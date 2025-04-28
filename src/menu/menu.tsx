import {
  Award,
  CheckSquare,
  Home,
  Settings,
  User,
  LucideIcon,
} from "lucide-react";
import { UsersPage } from "../pages/users";
import { AwardPage } from "../pages/award";
import { HomePage } from "../pages/home";
import { TodoPage } from "../pages/todo";
import { SettingsPage } from "../pages/settings";
import { JSX } from "react";

export interface IMenuItem {
  name: string;
  link: string;
  icon: LucideIcon;
  element: JSX.Element;
}

export const MENU: IMenuItem[] = [
  {
    icon: Home,
    name: "Home",
    link: "/",
    element: <HomePage />,
  },
  {
    icon: User,
    name: "Friends",
    link: "/friends",
    element: <UsersPage />,
  },
  {
    icon: CheckSquare,
    name: "Todo list",
    link: "/todo",
    element: <TodoPage />,
  },
  {
    icon: Award,
    name: "Achievements",
    link: "/achievements",
    element: <AwardPage />,
  },
  {
    icon: Settings,
    name: "Settings",
    link: "/settings",
    element: <SettingsPage />,
  },
];
