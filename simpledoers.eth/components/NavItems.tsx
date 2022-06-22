import { ChildrenProps } from "../types";


const NavItem = ({ href, isActive, children }:any) => {
  return (
    <li>
      <a
        href={href}
        className={`block px-3 py-2 rounded-md ${isActive ? 'bg-sky-500 text-white' : 'bg-slate-50'}`}
      >
        {...children}
      </a>
    </li>
  )
}
export default NavItem;