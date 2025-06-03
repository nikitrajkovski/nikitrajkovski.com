import {createSystem, defaultConfig} from "@chakra-ui/react";

const config = {
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: {_light: "#FEFEE3", _dark: "#0F0F0F"},
          },
        },
      },
    },
    styles: {
      global: {
        '::selection': {
          background: {
            value: {_light: "#ECE4B7", _dark: "#999"}
          },
        },
      },
    },
  },
};


export const system = createSystem(defaultConfig, config)