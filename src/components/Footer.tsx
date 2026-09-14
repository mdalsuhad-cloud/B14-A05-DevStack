import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-base-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500 text-xs font-bold text-white">
                DS
              </div>

              <h2 className="text-base font-bold">
                <span className="text-base-content">Dev</span>
                <span className="text-pink-500"> Stack</span>
              </h2>
            </div>

            <p className="mt-4 max-w-xs text-xs leading-5 text-base-content/50">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-5 text-xs font-medium text-base-content/70">
              <a href="#" className="transition hover:text-base-content">
                GitHub
              </a>

              <a href="#" className="transition hover:text-base-content">
                Twitter
              </a>

              <a href="#" className="transition hover:text-base-content">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold uppercase text-base-content">
              Product
            </h3>

            <ul className="mt-4 space-y-3 text-xs text-base-content/50">
              <li>
                <a href="#" className="hover:text-base-content">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-base-content">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-base-content">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase text-base-content">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-xs text-base-content/50">
              <li>
                <a href="#" className="hover:text-base-content">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-base-content">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-base-content">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase text-base-content">
              Legal
            </h3>

            <ul className="mt-4 space-y-3 text-xs text-base-content/50">
              <li>
                <a href="#" className="hover:text-base-content">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-base-content">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 flex flex-col gap-4 pt-6 text-xs text-base-content/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-base-content">
              Privacy
            </a>

            <a href="#" className="hover:text-base-content">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;