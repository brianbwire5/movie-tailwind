import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "100"],

  subsets: ["latin"],
  variable: "--font-montserrat",
});

function Layout({ children }) {
  return (
    <div className={`${montserrat.className} mx-32 my-12`}>{children}</div>
  );
}

export default Layout;
