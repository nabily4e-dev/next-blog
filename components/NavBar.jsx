import Link from "next/link";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
      <style jsx>
        {`
          ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }

          li {
            display: inline-block;
            margin: 0 10px;
          }

          li:not(:first-child) {
            margin-left: 0;
          }
        `}
      </style>
    </nav>
  );
}

export default NavBar;
