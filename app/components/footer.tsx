import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid #00e5ff",
        padding: "40px 30px",
        marginTop: "80px",
        backgroundColor: "transparent",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* Brand */}
        <div>
          <h3 style={{ marginBottom: "10px" }}>My Website</h3>
          <p style={{ maxWidth: "300px", lineHeight: "1.6" }}>
            Building modern web experiences with performance, design, and
            scalability in mind.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}>
            <li><Link className="footer-link" href="/">Home</Link></li>
            <li><Link className="footer-link" href="/about">About</Link></li>
            <li><Link className="footer-link" href="/services">Services</Link></li>
            <li><Link className="footer-link" href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Contact</h4>
          <p>Email: info@mywebsite.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Delhi, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          marginTop: "40px",
          paddingTop: "20px",
          borderTop: "1px solid rgba(0,229,255,0.3)",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} My Website. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;