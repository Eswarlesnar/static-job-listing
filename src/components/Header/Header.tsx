import desktopBackground from "../../assets/bg-header-desktop.svg"
import Filters from "../Filters/Filters"
import { useContext } from "react"
import { JobContextType , jobContext } from "../../context/jobsContext"
import "./header.css"

const Header : React.FC  =() => {
    const {filters } = useContext(jobContext) as JobContextType
    return <header className="header">
        <picture>
          <img src={desktopBackground} alt ="background-image" />
        </picture>
        {
            filters.length > 0 &&   <Filters />
        }
    </header>
}

export default Header