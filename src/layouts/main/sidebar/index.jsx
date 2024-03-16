import Account from "./account"
import Logo from "./logo"
import Menu from "./menu"

function Sidebar() {
  return (
    <aside className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col z-[2] sticky top-0">
      <Logo />
      <Menu />
      <Account />
    </aside>
  )
}

export default Sidebar