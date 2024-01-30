import { Box, Heading, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Compliance",
    link: "/compliance",
  },
  //   {
  //     name: "Transactions",
  //     link: "/transactions",
  //   },
  //   {
  //     name: "Payouts",
  //     link: "/payouts",
  //   },
  //   {
  //     name: "Products",
  //     link: "/products",
  //   },
  //   {
  //     name: "Storefront",
  //     link: "/storefront",
  //   },
  //   {
  //     name: "Orders",
  //     link: "/orders",
  //   },
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
            } hover:bg-white/10 rounded-md px-4 py-2 w-[200px] capitalize`}
          >
            <Link to={`${item.link}`}>{item.name}</Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
