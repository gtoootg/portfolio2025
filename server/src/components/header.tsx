import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav>
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/album">Album</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
