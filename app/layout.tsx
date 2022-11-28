import "./global.css";

import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="ja">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 bg-red-300">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
