import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
            My Portfolio
            </Link>
            <nav>
            <ul className="flex space-x-6">
                <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition">
                    Home
                </Link>
                </li>
                <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">
                    About
                </Link>
                </li>
                <li>
                <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition">
                    Projects
                </Link>
                </li>
                <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">
                    Contact
                </Link>
                </li>
            </ul>
        </nav>
        </div>
        </header>
    );
};

export default Header;