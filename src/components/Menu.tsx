import { useState, useEffect } from "react";
import "./Menu.css";

const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#latest", label: "Latest Release" },
  { href: "#members", label: "Members" },
  { href: "#cover", label: "Customize Cover" },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Burger Button SVG */}
      <div
        className={`menu-container fixed top-1 md:top-8 right-1 md:right-8 z-50 cursor-pointer ${
          isOpen ? "active" : ""
        }`}
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-25 md:size-30"
          viewBox="0 0 200 200"
        >
          <g strokeWidth="6.5" strokeLinecap="round">
            <path
              d="M72 82.286h28.75"
              fill="none"
              fillRule="evenodd"
              stroke="#f79aaf"
            />
            <path
              d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
              fill="none"
              stroke="#f79aaf"
            />
            <path
              d="M72 125.143h28.75"
              fill="none"
              fillRule="evenodd"
              stroke="#f79aaf"
            />
            <path
              d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
              fill="none"
              stroke="#f79aaf"
            />
            <path
              d="M100.75 82.286h28.75"
              fill="none"
              fillRule="evenodd"
              stroke="#f79aaf"
            />
            <path
              d="M100.75 125.143h28.75"
              fill="none"
              fillRule="evenodd"
              stroke="#f79aaf"
            />
          </g>
        </svg>
      </div>

      <div
        className={`fixed inset-0 bg-dark-gray z-40 flex items-center justify-center transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className={`menu-nav flex flex-col items-center text-center gap-8 ${isOpen ? "active" : ""}`}>
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-primetime text-pink-light! text-5xl uppercase hover:text-pink-medium transition-colors duration-300"
              onClick={toggleMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
