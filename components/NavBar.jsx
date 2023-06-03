import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

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
      <ThemeSwitch />
      <style jsx>
        {`
          nav { 
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background-color: inherit;
          }
          button{
            background: none;
            border: none;
            cursor: pointer;
            font-size: 16px;
            padding: 10px;
          }
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
