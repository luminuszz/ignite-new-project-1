import { extendTheme, Theme } from "@chakra-ui/react";

const theme = {
  colors: {
    gray: {
      "900": "#121214",
      "800": "#202024",
      "700": "#323238",
      "600": "#8D8D99",
      "500": "#7C7C8A", // gray4 placeholder)
      "300": "#C4C4CC",
      "200": "#E1E1E6",
    },

    green: {
      "400": "#00B37E",
      "500": "#00B37E", // green-light
      "600": "#00875F",
    },

    red: {
      "500": "#F75A68", // error (danger)
    },
  },

  fonts: {
    body: "Roboto",
    heading: "Roboto",
  },

  styles: {
    global: {
      "html,body": {
        backgroundColor: "#121214",
        fontFamily: "Roboto, sans-serif",
        lineHeight: "160%",
        boxSizing: "border-box",
        "-webkit-font-smoothing": "antialiased",
        color: "white",
      },
    },
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: 700,
      },
      variants: {
        solid: {
          backgroundColor: "green.600",
          color: "white",
          borderRadius: "8px",
          lineHeight: "16px",
          _hover: {
            backgroundColor: "green.400",
          },
          _active: {
            backgroundColor: "green.400",
          },
        },

        outline: {
          borderColor: "green.400",
          color: "green.400",
          fontWeight: 700,
          _hover: {
            color: "white",
            backgroundColor: "green.600",
          },
          _active: {
            backgroundColor: "green.700",
          },
        },
      },
    },

    Textarea: {
      baseStyle: {
        backgroundColor: "gray.900",
        color: "gray,300",
        _focus: {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "green.500",
        },
      },
    },
  },
} as unknown as Theme;

export default extendTheme(theme);
