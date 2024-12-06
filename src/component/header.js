"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menu = [
    { id: 2, path: "/#aboutUs", name: "About Us" },
    { id: 3, path: "/#services", name: "Services" },
    { id: 4, path: "/#features", name: "Our Features" },
    { id: 6, path: "/#contact", name: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isScrolled ? "scrolled" : ""}`}>
      <header className="logo">
        <Image
          src="/logo-dark.png"
          width={0}
          height={0}
          alt="logo"
          layout="responsive"
        />
      </header>

      <div className="menu">
        {menu.map((item) => (
          <p key={item.id} onClick={() => router.push(item.path)}>
            {item.name}
          </p>
        ))}
      </div>

      <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="hamburger-icon">&#9776;</span>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {menu.map((item) => (
          <p key={item.id} onClick={() => router.push(item.path)}>
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
}
