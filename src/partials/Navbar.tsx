import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container } from ".";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Button, Heading } from "@radix-ui/themes";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  // { name: "FAQ's", href: "/faqs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // const handleScroll = () => {
  //   const element = document.getElementById("waitlist_form_cta");
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "end",
  //       inline: "nearest",
  //     });
  //   }
  //   setMenuOpen(false);
  // };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="border-bottom fixed z-50 w-full border border-slate-50 bg-white shadow-sm">
      <Container>
        <div className="z-20 flex items-center justify-between py-6">
          <Link to="/">
            <Heading>Diaspora</Heading>
          </Link>
          <ul className="hidden gap-x-12 text-secondary lg:flex">
            {navLinks.map((link) => {
              return (
                <Link
                  className={`transition-all duration-100 hover:font-semibold`}
                  to={link.href}
                  key={link.name}
                >
                  {link.name}
                </Link>
              );
            })}
          </ul>

          <Button size={"3"} className="mt-2 hidden lg:block">
            Join Us Now
          </Button>

          <button
            onClick={toggleMobileMenu}
            className="rounded-[4px] bg-primary px-2 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-primary/80 lg:hidden"
          >
            {!menuOpen ? <HamburgerMenuIcon /> : <Cross1Icon />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -250 }}
          className="z-10 mx-auto px-6  sm:max-w-2xl sm:px-8 md:max-w-3xl"
        >
          <div className="w-full space-y-7 bg-white py-6 text-secondary lg:hidden">
            <ul className="space-y-7  text-xl">
              {navLinks.map((link) => {
                return (
                  <li onClick={() => setMenuOpen(false)} key={link.name}>
                    <Link
                      className={` transition-all duration-100 hover:font-semibold font-normal`}
                      to={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Button className=" lg:hidden">Become A Merchant</Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
