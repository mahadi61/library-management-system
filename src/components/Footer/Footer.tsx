import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white mt-10" style={{ backgroundColor: "#471396" }}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">LibraryApp</h2>
          <p>Making reading easier for everyone. 📚</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/books" className="hover:underline">
                Browse Books
              </a>
            </li>
            <li>
              <a href="/borrow-summary" className="hover:underline">
                Borrow Summary
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p>Email: support@libraryapp.com</p>
          <p>Phone: +880-1234-567890</p>
          <p className="mt-3">Built with ❤️ using React + TypeScript</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 text-center text-xs py-4">
        © {new Date().getFullYear()} LibraryApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
