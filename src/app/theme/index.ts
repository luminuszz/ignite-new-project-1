import { extendTheme, Theme } from "@chakra-ui/react";

const theme = {
  colors: {
    gray: {
      "900": "#121214",
      "800": "#202024",
      "700": "#323238",
      "500": "#7C7C8A", // gray4 placeholder)
      "300": "#C4C4CC",
    },

    green: {
      "400": "#00B37E",
      "500": "#00B37E", // green-light
    },

    red: {
      "500": "#F75A68", // error (danger)
    },
  },

  fonts: {
    body: "Roboto",
    heading: "Roboto",
  },

  fontSizes: {
    md: "16px",
    sm: "14px",
  },

  styles: {
    global: {
      "html,body": {
        backgroundColor: "#121214",
        fontFamily: "Roboto, sans-serif",
        lineHeight: "160%",
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
            backgroundColor: "gray.400",
          },
        },

        outline: {
          borderColor: "green.400",
          color: "green.400",
          fontWeight: 700,
          _hover: {
            color: "white",
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
