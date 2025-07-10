import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-14 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm">
          © {new Date().getFullYear()} LibraryApp. All rights reserved.
        </p>
        <p className="text-xs mt-1">Built with ❤️ using React + TypeScript</p>
      </div>
    </footer>
  );
};

export default Footer;
