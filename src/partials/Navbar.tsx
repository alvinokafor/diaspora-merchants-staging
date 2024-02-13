import { TriangleDownIcon } from "@radix-ui/react-icons";
import { Flex, Text, Avatar } from "@radix-ui/themes";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const pathName = useLocation().pathname;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };


  const handleSettings = () => {
  };

  // const LogoutIcon = () => (
  //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  //     <path d="M0 0h24v24H0z" fill="none"/>
  //     <path d="M17 17h-5v-2h5v-4h-2V7h-3v3H7v2h5v4H7v3h3v2h5v-2z"/>
  //   </svg>
  // );
  // const SettingIcon = () => (
  //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  //     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
  //   </svg>
  // );
  return (
    <Flex
      align={"center"}
      justify={"between"}
      className="p-4 border-b border-gray-200 shadow-sm z-50"
    >
      <Text className="font-semibold capitalize">
        {pathName === "/" ? "Home" : pathName.slice(1)}
      </Text>

      <Flex align={"center"} gap={"1"} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
        <Avatar fallback="AC" radius="full" />
        <TriangleDownIcon />

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-md z-10">
           
            <button className="block row-auto w-full text-left px-4 py-2 text-sm hover:bg-gray-100" onClick={handleSettings}>
               Settings
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100" onClick={handleLogout}>
             Logout
            </button>
          </div>
        )}
      </Flex>
    </Flex>
  );
}
