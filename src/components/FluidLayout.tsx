import type { CustomLayout } from "next";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

/**
 * @package
 */

export const FluidLayout: CustomLayout = (page) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-red-300">{page}</main>
      <Footer />
    </div>
  );
};
