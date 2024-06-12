import { Link } from 'react-router-dom'

import styles from './NavButton.module.css'

export const NavButton = ({titleNav,linkNav}) => {
  return (
    <>
        <li className={styles["nav-li"]}>
            <Link className={styles["nav-a"]} to={linkNav}>{titleNav}</Link>
        </li>
    </>
  )
}