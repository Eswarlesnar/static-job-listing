
import { JobType } from "../context/jobsContext"

interface PropsType {
    data : JobType
}

const Details = (props : PropsType) => {
    const details :JobType  = props.data
    const splitArray = details.logo.split("/")
    const length = splitArray.length
    const imageURL = `/assets/${splitArray[length -1 ]}`
    const imgUrl = new URL(imageURL, import.meta.url).href

    return <div className= { `details`}>
        <img className="logo" src = {imgUrl} alt ="logo" loading="lazy"/>
        <div className= "profile">
            <div className = "company-features">
             <h4>{details.company}</h4>
             {
                details.new && <div className="new">New</div>
             }
             {
                details.featured && <div className="featured"> featured</div>
             }
            </div>
            <h3 className="job-title">{details.position}</h3>
            <div className="job-details">
            <span>{details.postedAt}</span><span>{details.contract}</span><span>{details.location}</span>
            </div>
        </div>
    </div>
}
 
export default Details