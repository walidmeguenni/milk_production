import { LuLayoutDashboard } from "react-icons/lu";
import { BsFileMedicalFill } from "react-icons/bs";
import { GiMilkCarton } from "react-icons/gi";
import { SiHappycow } from "react-icons/si";
import { FaUserTie } from "react-icons/fa";
import { TbMoodKidFilled } from "react-icons/tb";
export const sideBarData = [
  { Icon: LuLayoutDashboard, label: "Dashboard", link: "/dashboard" },
  { Icon: SiHappycow, label: "Cows", link: "cows" },
  {
    Icon: BsFileMedicalFill,
    label: "Medical Examination",
    link: "medicalexamination",
  },
  { Icon: TbMoodKidFilled, label: "Births", link: "births" },
  { Icon: GiMilkCarton, label: "Milk Production", link: "milkproduction" },
];

export const cardData = {
  Cows: SiHappycow,
  Examinations: BsFileMedicalFill,
  Births: FaUserTie,
  Milks: GiMilkCarton,
};

export const cowsHeadTable = ["#", "Date Entry", "Breed"];
export const medicalHeadTable = ["#", "Examination day", "Disease"];
export const birthsHeadTable = [
  "#",
  "Mother Cow Number",
  "Birth of Date",
  "Breed",
];
export const milkHeadTable = ["#", "today", "Amount of milk in liters"];
