import { role } from "@/components/lib/data";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { PiChalkboardTeacher } from "react-icons/pi";
import { PiStudentLight } from "react-icons/pi";
import { RiParentLine } from "react-icons/ri";
import { FiBook } from "react-icons/fi";
import { MdOutlineClass } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";
import { PiExamThin } from "react-icons/pi";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { TbTemperatureSun } from "react-icons/tb";
import { PiBatteryVerticalMedium } from "react-icons/pi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TiMessage } from "react-icons/ti";
import { TfiAnnouncement } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { PiGear } from "react-icons/pi";
import { RiLogoutCircleLine } from "react-icons/ri";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <IoHomeOutline />,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <PiChalkboardTeacher />,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <PiStudentLight />,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: <RiParentLine />,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FiBook />,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: <MdOutlineClass />,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: <SiFuturelearn />,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: <PiExamThin />,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdOutlineAssignmentInd />,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <TbTemperatureSun />,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <PiBatteryVerticalMedium />,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdOutlineCalendarMonth />,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <TiMessage />,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <TfiAnnouncement />,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <CgProfile />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <PiGear />,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <RiLogoutCircleLine />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-2 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-1" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-1">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-1 text-gray-500 py-1.5 md:px-2 rounded-md hover:bg-teal-500 hover:text-white"
                >
                  {item.icon}
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;