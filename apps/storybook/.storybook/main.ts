import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/Atoms/**/*.stories.@(js|jsx|ts|tsx)",
    "../../../packages/ui/src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../../../packages/ui/src/modules/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/Flows/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/Interfaces/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/Handoffs/**/*.stories.@(js|jsx|ts|tsx)",
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
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-native": "react-native-web",
      "react-native-web": "react-native-web",
    };
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
      "@resurs-handoff/design-tokens",
      "@resurs-handoff/native",
    ];
    config.optimizeDeps.exclude = [
      ...(Array.isArray(config.optimizeDeps.exclude) ? config.optimizeDeps.exclude : []),
      "react-native",
    ];
    return config;
  },
};

export default config;
