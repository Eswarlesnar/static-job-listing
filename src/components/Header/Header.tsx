import desktopBackground from "../../assets/bg-header-desktop.svg"
import mobileBackground from "../../assets/bg-header-mobile.svg"
import "./header.css"

const Header : React.FC  =() => {
    return <header className="header">
        <picture>
           
            <img src={desktopBackground} alt ="background-image" />
        </picture>
    </header>
}

export default Header