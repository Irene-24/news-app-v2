import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 footer">
      <div className="space-y-2">
        <p className="text-sm text-center text-gray-600">
          Design credit goes to &nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.figma.com/@subas"
            className="text-brand-blue-medium font-medium"
          >
            Subash Matheswaran
          </a>
        </p>

        <p className="text-sm text-center text-gray-600">
          Built by &nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Irene-24"
            className="text-brand-orange font-medium"
          >
            Irene_24
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
