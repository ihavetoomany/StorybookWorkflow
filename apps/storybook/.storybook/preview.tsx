import type { Preview } from "@storybook/react";
import "../src/preview.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Atoms", "Components (Web)", "Components (App)", "Modules", "Flows", "Interfaces", "Handoffs"],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
