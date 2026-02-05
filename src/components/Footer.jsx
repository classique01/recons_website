import { FaDiscord, FaInstagram, FaLinkedin, FaEnvelope} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[oklch(14.5%_0_0)] text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-6 flex-wrap">

          {/* Left icons */}
          <div className="flex gap-6">
            <a href="https://discord.gg/xUhkyw9vRV"  target="_blank" aria-label="Discord" className="hover:text-[#d2ac89] transition-colors">
              <FaDiscord className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/rutgersrecons/" target="_blank"  aria-label="Instagram" className="hover:text-[#d2ac89] transition-colors">
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>

          {/* Center text */}
          <span className="text-sm text-white/80 text-center">
            © 2026 Rutgers Economics Society. All rights reserved.
          </span>

          {/* Right icons */}
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/company/rutgers-economics/" target="_blank" aria-label="LinkedIn" className="hover:text-[#d2ac89] transition-colors">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href="mailto:economicsrutgers@gmail.com" aria-label="Email" className="hover:text-[#d2ac89] transition-colors">
              <FaEnvelope className="h-5 w-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
