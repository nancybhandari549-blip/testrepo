import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header
      style={{
        padding: "30px",
        borderBottom: "1px solid #00e5ff",
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/photos/img.png"   // IMPORTANT: from /public/photos/img.png
            width={100}
            height={20}
            alt="Logo"
          />
        </div>

        {/* Menu */}
        <nav style={{ display: "flex", gap: "50px" }}>
          <Link  href="/">Home</Link>
          <Link  href="/about">About</Link>
          <Link  href="/services">Services</Link>
          <Link  href="/contact">Contact</Link>
        </nav>

        {/* Contact Button */}
        <button>Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
