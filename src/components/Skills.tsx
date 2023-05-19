import { useContext } from "react"
import { JobContextType , jobContext } from "../context/jobsContext"

const Skills = (data:any) => {
    const {setFilters , filters} = useContext(jobContext) as JobContextType
    let skill = data.data
    const aggregatedSkillsArray = []
    aggregatedSkillsArray.push(skill.level)
    if(skill.languages.length > 0) { 
        skill.languages.forEach((item : string) => {
            aggregatedSkillsArray.push(item)
        })
    }
    if(skill.tools.length > 0) { 
        skill.tools.forEach((item : string) => {
            aggregatedSkillsArray.push(item)
        })
    }


    const handleFilterClick = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
           const selectedFilter = event.currentTarget.value
           if(filters.includes(selectedFilter)){
           }else {
             setFilters(prev => {
                return [...prev  , selectedFilter]
             })
           }
    }
    return  <div className="skills">
       {
        aggregatedSkillsArray?.map((item : string)  => {
            return <button className = "skill-button" key = {item} value = {item} onClick = {handleFilterClick}>{item}</button>
        })
       }
    </div>
}

export default Skills