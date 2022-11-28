import Link from "next/link";
import type { FC } from "react";

const items = [
  { href: "/", label: "/app" },
  { href: "/blog", label: "/app/blog" },
  { href: "/test", label: "/pages" },
];

/**
 * @package
 */

export const Header: FC = () => {
  return (
    <header className="flex justify-around">
      <h1 className="p-4">Next 13 Template</h1>
      <nav>
        {items.map(({ href, label }) => {
          return (
            <Link key={href} href={href} legacyBehavior>
              <a className="inline-block p-4">{label}</a>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
