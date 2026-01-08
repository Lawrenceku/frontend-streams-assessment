import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${bricolage.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
