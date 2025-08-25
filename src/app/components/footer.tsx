const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-blue-400 transition">GitHub</a>
            <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
            </div>
        </div>
        </footer>
    );
};

export default Footer;