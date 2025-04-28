import { RouteObject } from "react-router-dom";
import { MENU } from "../menu/menu";
import { NotFoundPage } from "../pages/notFound";

export const routes: RouteObject[] = [
  ...MENU.map((item) => ({
    path: item.link,
    element: item.element,
  })),
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
