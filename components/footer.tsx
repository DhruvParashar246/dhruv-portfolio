import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-24">
        {/* Mobile Social Links */}
        <div className="mb-6 flex justify-center gap-6 md:hidden">
          <a
            href="https://github.com/DhruvParashar246"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/dhruvparashar-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:dhruvparashar246@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="text-center">
          <a
            href="https://github.com/DhruvParashar246"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            Built by Dhruv Parashar
          </a>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
