import insure from "../assets/insure.svg"

const Details = (data :any) => {
    const details  = data.data
    return <div className="details">
        <img className="logo" src = {insure} alt ="logo"/>
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