import { MENU } from "../../menu/menu";
import MenuItem from "./menuItem";
import styles from "./sidebar.module.scss";

function Menu() {
  return (
    <ul className={styles.menu}>
      {MENU.map((item) => (
        <MenuItem key={item.link} item={item} />
      ))}
    </ul>
  );
}

export default Menu;
