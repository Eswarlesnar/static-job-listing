
import { JobType } from "../context/jobsContext"

interface PropsType {
    data : JobType
}

const Details = (props : PropsType) => {
    const details :JobType  = props.data
    const splitArray = details.logo.split("/")
    const length = splitArray.length
    const imageURL = `./src/assets/${splitArray[length -1 ]}`
    return <div className="details">
        <img className="logo" src = {imageURL} alt ="logo"/>
        <div className= "profile">
            <div className = "company-features">
            <h5>{details.company}</h5>
            </div>
            <h3 className="job-title">{details.position}</h3>
            <div className="job-details">
            <span>{details.postedAt}</span><span>{details.contract}</span><span>{details.location}</span>
            </div>
        </div>
    </div>
}

export default Details