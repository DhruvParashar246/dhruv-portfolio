import Link from "next/link";

const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <div className="navWrap">
      <div className="container">
        <div className="nav glass">
          <Link href="/" className="brand">
            <span className="brandDot" />
            <span>Dhruv</span>
          </Link>

          <div className="navLinks">
            {nav.map((i) => (
              <a key={i.href} href={i.href}>
                {i.label}
              </a>
            ))}
            <a
              className="btn btnPrimary"
              href="/Dhruv_Parashar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
