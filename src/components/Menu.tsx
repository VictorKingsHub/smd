import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentThin } from "react-icons/pi";
import { RiParentLine } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <IoHomeOutline />,
        label: "Home",
        href: "/",
      },
      {
        icon: <LiaChalkboardTeacherSolid />,
        label: "Teacher",
        href: "/teacher",
      },
      {
        icon: <PiStudentThin />,
        label: "Student",
        href: "/student",
      },
      {
        icon: <RiParentLine />,
        label: "Parent",
        href: "/parent",
      },
      {
        icon: <PiStudentThin />,
        label: "Events",
        href: "/events",
      },
      {
        icon: <TiMessages />,
        label: "Messages",
        href: "/messages",
      },
    ],
  },
  {
    title: "OTHERS",
    items: [
      {
        icon: <CgProfile />,
        label: "Profile",
        href: "profile",
      },
      {
        icon: <CiSettings />,
        label: "Setting",
        href: "setting",
      },
      {
        icon: <AiOutlineLogout />,
        label: "Logout",
        href: "logout",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="flex flex-col my-4 lg:my-2">
      <div>
        <Link
          href="/"
          className="flex flex-row gap-2 justify-center lg:justify-start"
        >
          <h1 className="text-teal-600 text-xl">
            {" "}
            <FaHeart />{" "}
          </h1>
          <span className="hidden lg:flex">Logo Here</span>
        </Link>
      </div>

      {menuItems.map((i) => (
        <div key={i.title} className="flex flex-col gap-2 my-3">
          <span className="hidden text-sm md:flex  font-light  text-teal-800">
            {i.title}
          </span>
          {i.items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-800 flex flex-row gap-2 my-1 justify-start"
            >
              <span> {item.icon}</span>
              <span className="hidden lg:flex"> {item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
