import Image from "next/image";
import {
  BeakerIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/solid";

import {
  HeartIcon,
  UserGroupIcon,
  PlusCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div class="shadow-sm border-b bg-white sticky top-0 z-50">
      <div class="flex items-center justify-between mx-5 xl:mx-auto  max-w-6xl">
        {/* Left */}
        <div className="relative hidden w-24 h-24 cursor-pointer lg:inline-grid">
          <Image
            layout="fill"
            objectFit="contain"
            src="https://links.papareact.com/ocw"
          ></Image>
        </div>
        <div className="relative w-10 h-10 cursor-pointer lg:hidden">
          <Image
            layout="fill"
            objectFit="contain"
            src="https://links.papareact.com/jjm"
          ></Image>
        </div>
        {/* Middle */}
        <div className="max-w-xl">
          <div className="relative p-3 mt-1 ">
            <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-500"></SearchIcon>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="block w-full pl-10 border-gray-300 rounded-md border-1 focus:border-black focus:ring-black bg-gray-50"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4 ">
          <HomeIcon className="navBtn"></HomeIcon>
          <MenuIcon className="w-6 h-6 md:hidden"></MenuIcon>
          <div className="relative navBtn">
            <PaperAirplaneIcon className="rotate-45 navBtn"></PaperAirplaneIcon>
            <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-2">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn"></PlusCircleIcon>
          <UserGroupIcon className="navBtn"></UserGroupIcon>
          <HeartIcon className="navBtn"></HeartIcon>
          <img
            className="h-10 rounded-full cursor-pointer"
            src="profile-pic.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
