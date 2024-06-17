import { Link } from 'react-router-dom'

//import styles from './NavButton.module.css'

export const NavButton = ({titleNav,linkNav}) => {
  return (
    <>
        <li className="list-none text-center p-3">
            <Link className="no-underline font-bold text-white" to={linkNav}>{titleNav}</Link>
        </li>
    </>
  )
}