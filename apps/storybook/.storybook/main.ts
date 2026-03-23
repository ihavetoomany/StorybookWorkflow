import { fileURLToPath } from "url";
import type { StorybookConfig } from "@storybook/react-vite";

/** Vite resolves `ExpoFontLoader.js` (native); Metro uses `ExpoFontLoader.web.js` in the browser. Not in package `exports`, so use a filesystem path. */
const expoFontLoaderWeb = fileURLToPath(
  new URL("../node_modules/expo-font/build/ExpoFontLoader.web.js", import.meta.url)
);

/** Absolute path to web stub (avoids Flow/TS-in-.js in real @react-native/assets-registry) */
const registryStubPath = fileURLToPath(new URL("./rn-assets-registry-stub.js", import.meta.url));
/** Re-exports react-native-web + TurboModuleRegistry stub for Vite */
const reactNativeWebShimPath = fileURLToPath(
  new URL("./react-native-web-for-storybook.ts", import.meta.url)
);

const config: StorybookConfig = {
  stories: [
    "../src/Atoms/**/*.stories.@(js|jsx|ts|tsx)",
    "../../../packages/ui/src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../../../packages/native/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../../../packages/ui/src/modules/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/Flows/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/Interfaces/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/Handoffs/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/Experiments/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  // Avoid docgen parsing react-native's Flow/TS source (causes "Missing semicolon" on } as ReactNativePublicAPI)
  typescript: {
    reactDocgen: false,
  },
  viteFinal: async (config) => {
    // Ensure assets load from root (avoids 404s when base URL is wrong)
    config.base = config.base ?? "/";
    config.server = config.server || {};
    config.server.fs = config.server.fs || {};
    config.server.fs.allow = [
      ...(Array.isArray(config.server.fs.allow) ? config.server.fs.allow : []),
      "../../..",
    ];
    // React Native for Web: alias so @resurs-handoff/native runs in the browser
    config.resolve = config.resolve ?? {};
    const prevAlias = config.resolve.alias;
    const resursAliases: Record<string, string> = {
      // Must be shim (not bare react-native-web): named TurboModuleRegistry is missing from RN-web
      "react-native": reactNativeWebShimPath,
      "react-native-web": "react-native-web",
      // Real registry uses Flow/TS in .js; expo-asset only needs these exports in the browser
      "@react-native/assets-registry/registry": registryStubPath,
      // expo-font: Metro picks ExpoFontLoader.web.js; Vite was bundling ExpoFontLoader.js → requireNativeModule
      "expo-font/build/ExpoFontLoader.js": expoFontLoaderWeb,
    };
    const fontLoaderRegex = {
      find: /[/\\]expo-font[/\\]build[/\\]ExpoFontLoader\.js$/,
      replacement: expoFontLoaderWeb,
    };
    if (Array.isArray(prevAlias)) {
      config.resolve.alias = [
        ...prevAlias,
        ...Object.entries(resursAliases).map(([find, replacement]) => ({ find, replacement })),
        fontLoaderRegex,
      ];
    } else {
      config.resolve.alias = [
        ...Object.entries({ ...(prevAlias as Record<string, string>), ...resursAliases }).map(
          ([find, replacement]) => ({ find, replacement })
        ),
        fontLoaderRegex,
      ];
    }
    config.resolve.extensions = [
      ".web.tsx", ".web.ts", ".tsx", ".ts",
      ".web.jsx", ".web.js", ".jsx", ".js",
      ...(config.resolve.extensions ?? []),
    ];
    config.define = {
      ...config.define,
      __DEV__: JSON.stringify(process.env.NODE_ENV !== "production"),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV ?? "development"),
    };
    // Pre-bundle deps used by the App story so they don't trigger @fs 404s or dynamic import failures
    config.optimizeDeps = config.optimizeDeps ?? {};
    config.optimizeDeps.include = [
      ...(Array.isArray(config.optimizeDeps.include) ? config.optimizeDeps.include : []),
      "react-native-web",
      reactNativeWebShimPath,
      "@resurs-handoff/design-tokens",
      "@resurs-handoff/native",
    ];
    config.optimizeDeps.exclude = [
      ...(Array.isArray(config.optimizeDeps.exclude) ? config.optimizeDeps.exclude : []),
      "react-native",
    ];
    config.optimizeDeps.esbuildOptions = {
      ...config.optimizeDeps.esbuildOptions,
      // Mirror Vite's resolve.extensions so esbuild picks .web.* variants during pre-bundling
      resolveExtensions: [
        ".web.tsx", ".web.ts", ".tsx", ".ts",
        ".web.jsx", ".web.js", ".jsx", ".js",
        ".json",
      ],
      // @expo/vector-icons ships JSX in .js files
      loader: {
        ...(config.optimizeDeps.esbuildOptions?.loader as Record<string, string> | undefined),
        ".js": "jsx",
      },
    };
    return config;
  },
};

export default config;
