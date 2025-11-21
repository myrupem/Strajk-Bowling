import "./LoadingPage.css"
import logo from "../../assets/logo.svg"
import Title from "../../components/Title/Title"

function LoadingPage() {
  return (
    <section className="loadingPage__wrapper">
      <img src={logo} alt="logo" className="loadingPage__logo" />
      <Title title="STRAJK"></Title>
      <h2 className="loadingPage__subtitle">BOWLING</h2>
    </section>
  )
}

export default LoadingPage
