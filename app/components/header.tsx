import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center px-8 bg-transparent z-50">
      
      <div className="flex items-center justify-between w-full">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/photos/img.png"
            width={120}
            height={40}
            alt="Logo"
          />
        </div>

        {/* Menu */}
        <nav className="flex gap-10 text-white font-medium">
          <Link href="/" className="hover:text-[#00e5ff] transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#00e5ff] transition">
            About
          </Link>
          <Link href="/services" className="hover:text-[#00e5ff] transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-[#00e5ff] transition">
            Contact
          </Link>
        </nav>

        {/* Contact Button */}
        <button className="px-5 py-2 border border-[#00e5ff] text-[#00e5ff] rounded-md hover:bg-[#00e5ff] hover:text-black transition">
          Contact Us
        </button>

      </div>
    </header>
  );
};

export default Header;
