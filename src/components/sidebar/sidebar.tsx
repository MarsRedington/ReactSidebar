import Menu from "./menu";
import styles from "./sidebar.module.scss";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { m } from "framer-motion";
import { useAppContext } from "../../context/appContext";
import cn from "clsx";

function Sidebar() {
  const { sidebarOpen, toggleSidebar } = useAppContext();

  return (
    <m.aside
      className={cn(styles.sidebar, {
        [styles.open]: sidebarOpen,
      })}
      animate={{ width: sidebarOpen ? 50 : 224 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <button className={styles.toggle} onClick={toggleSidebar}>
        {sidebarOpen ? <PanelLeftOpen /> : <PanelLeftClose />}
      </button>
      <Menu />
    </m.aside>
  );
}

export default Sidebar;
