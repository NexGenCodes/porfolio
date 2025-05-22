import socials from "@/constants/socials";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="border-t py-6 sm:py-8 md:py-12"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link
            href="/"
            className="nexgencode-logo"
            aria-label="NexGenCode - Home"
          >
            <span className="highlight">Nex</span>
            <span>Gen</span>
            <span className="highlight">Code</span>
          </Link>
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            Full-stack web, mobile, and end-to-end developer
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-3 sm:gap-4">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name} Profile`}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full p-1.5 sm:p-2 hover:bg-muted"
              >
                <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-foreground hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
