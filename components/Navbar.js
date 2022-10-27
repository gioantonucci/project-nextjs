import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <menu>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </menu>
    </nav>
  );
};

export default Navbar;
