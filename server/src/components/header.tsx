import { Link } from "@/i18n/routing";
import LocaleSwitcher from "@/components/language-switcher";

export const HEADER_HEIGHT = 70

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4" style={{ height: HEADER_HEIGHT }}>
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/album">Album</Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  );
};

export default Header;
