import localFont from "@next/font/local";
export const messina = localFont({
  src: [
    {
      path: "../public/fonts/MessinaSansMono-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/MessinaSansMono-SemiBold.woff2",
      weight: "600",
    },
  ],
  variable: "--font-messina",
});

export const biro = localFont({
  src: [
    {
      path: "../public/fonts/BiroScriptPlus-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-biro",
});

export const grotesk = localFont({
  src: [
    {
      path: "../public/fonts/RightGrotesk-CompactBlack.otf",
      weight: "900",
    },
  ],
  variable: "--font-grotesk",
});
