import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const menu = [
    { id: 1, path: "/#home", name: "Home" },
    { id: 2, path: "/#aboutUs", name: "About Us" },
    { id: 3, path: "/#services", name: "Services" },
    { id: 5, path: "/#projects", name: "Projects" },
    { id: 4, path: "/#features", name: "Our Features" },
    { id: 6, path: "/#contact", name: "Contact" },
  ];

  const textToType = [
    "Reimagine, Renovate, Revitalize",
    "Transform Your Space, Elevate Your Living",
    "Revamp Your Home, Redefine Your Lifestyle",
    "Breathe New Life Into Your Home",
    "From Dream to Reality: Expert Renovations",
  ];
  const typingSpeed = 100;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < textToType[index].length) {
        setTypedText((prevText) => prevText + textToType[index][charIndex]);
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setIndex((prevIndex) => (prevIndex + 1) % textToType.length);
          setTypedText("");
        }, 1000);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [index, charIndex]);

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
    <div className="container">
      <div className={`header ${isScrolled ? "scrolled" : ""}`}>
        <header className="logo">
          <Image
            src="/logo.png"
            width={0}
            height={0}
            alt="logo"
            layout="responsive"
            onClick={() => router.push("/")}
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
      <div className="typing-text">
        <p>{typedText}</p>
      </div>
    </div>
  );
}
