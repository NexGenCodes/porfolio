import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Nex</span>GenCode
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Full-stack web, mobile, and end-to-end developer
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4">
            <Link
              href="https://github.com/chi-na-go-rom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/odugu-chinagorom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://x.com/chi_na_go_rom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
