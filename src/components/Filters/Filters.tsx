import "./filters.css"
import { useContext } from "react"
import { JobContextType , jobContext } from "../../context/jobsContext"
import { VscChromeClose } from "react-icons/vsc";

const Filters : React.FC = () => {
   const {filters , setFilters} = useContext(jobContext) as JobContextType
   const handleFilterRemove = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const selectedFilter = event.currentTarget.value
        let tempFilters =  [...filters]
        if(filters.includes(selectedFilter)){
        const index = tempFilters.indexOf(selectedFilter)
        tempFilters.splice(index , 1)
        setFilters(tempFilters)
    }
   }
   const clearFilters = ()=>{
       setFilters([])
   }
   return <div className="filters">
      <div className="filter">
        <div className="active-filters">
        {
           filters?.map((item : string) => {
             return <div className="filter-tile">
             <div className="filter-name">{item}</div>
             <button onClick =  {handleFilterRemove} value ={item}><VscChromeClose  className = "icon"/></button>
            </div>
           })
        }
        </div>
        <button className="clear-all-filters" onClick = {clearFilters}>Clear</button>
      </div>
   </div>
}

export default Filters


{/* <div className="filter-tile">
                <div className="filter-name">Junior</div>
                <button><VscChromeClose  className = "icon"/></button>
        </div> */}