import "./HamburgerMenu.css"

interface MenuProps {
  open: boolean
}

const HamburgerMenu: React.FC<MenuProps> = ({ open }) => {
  return (
    <section className={`hamburger-menu ${open ? "open" : ""}`}>
      <section className="hamburger-menu__link-wrapper">
        <a href="/" className="hamburger-menu__link">
          BOOKING
        </a>
        <a href="/confirmation" className="hamburger-menu__link">
          CONFIRMATION
        </a>
      </section>
    </section>
  )
}

export default HamburgerMenu
