import "./HamburgerButton.css"

interface HamburgerProps {
  open: boolean
  toggle: () => void
}

const HamburgerButton: React.FC<HamburgerProps> = ({ toggle }) => {
  return (
    <button className="hamburger-button" onClick={toggle}>
      <section className="hamburger-button__line-wrapper">
        <span className="hamburger-button__span-1"></span>
        <span className="hamburger-button__span-2"></span>
        <span className="hamburger-button__span-3"></span>
      </section>
    </button>
  )
}

export default HamburgerButton
