import { Box, Heading } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FiHome, FiCheckCircle, FiShoppingBag, FiShoppingCart, FiBox } from "react-icons/fi";

const navLinks = [
  {
    name: "Home",
    link: "/",
    icon: <FiHome />,
  },
  {
    name: "Compliance",
    link: "/compliance",
    icon: <FiCheckCircle />,
  },
  {
    name: "Orders",
    link: "/orders",
    icon: <FiShoppingBag />,
  },
  {
    name: "Store front",
    link: "/store",
    icon: <FiShoppingCart />,
  },
  {
    name: "Product",
    link: "/product",
    icon: <FiBox />,
  },
];

export default function SideBar() {
  const pathName = useLocation().pathname;
  return (
    <Box className="col-span-1 h-screen bg-slate-950 px-4 py-5 text-white">
      <Heading size={"5"} weight={"medium"}>
        Diaspora
      </Heading>

      <Box className="space-y-4 mt-10">
        {navLinks.map((item) => (
          <Box
            key={item.link}
            className={`${
              pathName === item.link && "bg-white/10"
            } hover:bg-white/10 rounded-md px-4 py-2 w-[185px] capitalize flex items-center space-x-2`}
          >
            {item.icon}
            <Link to={`${item.link}`}>{item.name}</Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
