// components/Navbar.tsx
export default function Navbar() {
  return (
    <header className="nav">
      <div className="navInner">
        <a className="navBrand" href="#top" aria-label="Home">
          <span className="navDot" />
          <span>Dhruv</span>
        </a>

        <nav className="navLinks">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <a className="navResume" href="/Dhruv_Parashar_Resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
