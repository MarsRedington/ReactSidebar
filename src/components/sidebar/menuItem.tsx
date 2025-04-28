import { Link, useLocation } from "react-router-dom";
import { IMenuItem } from "../../menu/menu";
import { useAppContext } from "../../context/appContext";
import styles from "./sidebar.module.scss";
import cn from "clsx";

function MenuItem({ item }: { item: IMenuItem }) {
  const { sidebarOpen } = useAppContext();
  const location = useLocation();

  const isActive = location.pathname === item.link;
  return (
    <li>
      <Link
        to={item.link}
        className={cn(styles.link, { [styles.active]: isActive })}
      >
        <item.icon size={20} />
        <span>{!sidebarOpen ? item.name : null}</span>
      </Link>
    </li>
  );
}

export default MenuItem;
