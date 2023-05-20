import { useContext } from "react"
import { jobContext  , JobContextType } from "../../context/jobsContext"
import Details from "../Details"
import Skills from "../Skills"  
import "./jobs.css"

const Jobs : React.FC = () => {
    const {data} = useContext(jobContext) as JobContextType

    return <div className="container">
          {
            data?.map(job => {
                
                return <div className= {`job + " " + ${job.featured ? "job-border-left": ""}`} key = {job.id} > 
                    <Details data = {job} />
                    <Skills data = {job} />
              </div>
            })
          }
    </div>
}

export default Jobs


{/* <div className="job">
            <Details />
            <Skills />
          </div> */}