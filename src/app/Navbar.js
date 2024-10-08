import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-gray-400">Blog Website</a>
        </div>
        <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-10">
            <Link href="/">
          <li className="hover:text-gray-400 transition-colors duration-300">Home</li>
            </Link>
            <Link href="/Blogs">
          <li className="hover:text-gray-400 transition-colors duration-300">Blog</li>
            </Link>
          <li className="hover:text-gray-400 transition-colors duration-300">Services</li>
          <li className="hover:text-gray-400 transition-colors duration-300">Contact</li>
            </ul>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
