import React from "react";
import logo from "./../assets/images/disney-logo.svg";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  
  UserCircleIcon,
 
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
 
  Bars2Icon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  StarIcon,
  PlayCircleIcon,
  TvIcon,
  ArrowLeftStartOnRectangleIcon
} from "@heroicons/react/24/solid";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
 
 
];
 
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const closeMenu = () => setIsMenuOpen(false);
  
  const navigate = useNavigate()
  const {user,logOut} = UserAuth()
  const cerrarSesion = async()=>{
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button 
          placeholder={""}
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
          placeholder={""}
            variant="circular"
            size="md"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://emi9d8rzue7.exactdn.com/wp-content/uploads/2022/10/Ice-Age-Avatars-2.png?strip=all&lossy=1&resize=600%2C600&ssl=1"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList placeholder={""} className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
            placeholder={""}
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
              placeholder={""}
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
              
            </MenuItem>
          );
        })}

        <button onClick={cerrarSesion}>

          <MenuItem
            placeholder={""}   
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${"hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
              }`}
            > 

            

            <ArrowLeftStartOnRectangleIcon className="h-6 w-6 text-gray-500" />

              <Typography
                placeholder={""}
                  as="span"
                  variant="small"
                   className="font-normal"
                  color={ "inherit"}
                >
                    sign out
                 </Typography>

            

            
             </MenuItem>
        </button>
        
      </MenuList>
    </Menu>
  );
}
 
// nav list menu

 
const navListItems = [
  {
    label: "HOME",
    icon: HomeIcon,
    Url:"/home-movies"
  },
  {
    label: "SEARCH",
    icon: MagnifyingGlassIcon,
    Url:"/search-movie"
  },
  {
    label: "WATCH LIST",
    icon: PlusIcon,
    Url:"#"
  },
  {
    label: "ORIGINALS",
    icon: StarIcon,
    Url:"#"
  },
  {
    label: "MOVIES",
    icon: PlayCircleIcon,
    Url:"#"
  },
  {
    label: "SERIES",
    icon: TvIcon,
    Url:"#"
  },
];
 
function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {/* <NavListMenu /> */}
      {navListItems.map(({ label, icon, Url }, key) => (
        <Typography 
        placeholder={""}
          key={label}
          as="a"
          href={Url}
          variant="small"
          color="white"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem placeholder={""} className="flex items-center gap-2 lg:rounded-full text-white">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-white app-h5 text-sm"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}
 
export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
  
  const {user,logOut} = UserAuth()
 
  return (
    <Navbar placeholder={""} className="rounded-none mx-auto max-w-none p-2  lg:pl-6 bg-app-gray-5" color="transparent">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">

        <div className="flex content-center justify-items-center ">

        <Typography
                placeholder={""}
                  as="a"
                  href="/home-movies"
                  className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
                  
                >
                  <img src={logo} width={85} height={85}  />
          </Typography>
          <div className="hidden lg:flex ">
            <NavList />
          </div>

        </div>

        
        <IconButton
        placeholder={""}
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      <div className=" flex">
        <Button placeholder={""} size="sm" variant="text">
            <span className="text-white hidden md:flex"> {user.displayName ? user.displayName : user.email }  </span>
          </Button>
        <ProfileMenu />

      </div>
       
      </div>
      <Collapse open={isNavOpen} className="">
        <NavList />
      </Collapse>
    </Navbar>
  );
}

