"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)",
  };
  const colors = {
    brand: {
      primary: "#48BB78",
      hover: "#38A169",
    },
  };

  const theme = extendTheme({
    components: {
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles,
                },
              },
              "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
                {
                  ...activeLabelStyles,
                },
              label: {
                top: 0,
                left: 0,
                zIndex: 2,
                position: "absolute",
                backgroundColor: "white",
                pointerEvents: "none",
                mx: 3,
                px: 1,
                my: 2,
                transformOrigin: "left top",
              },
            },
          },
        },
      }
    },
    colors,
  });

  return (
    <html lang="en">
      <head>
        <title>Pesa24</title>
      </head>
      <body>
        <ChakraProvider
          theme={theme}
          toastOptions={{ defaultOptions: { position: "top" } }}
        >
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
