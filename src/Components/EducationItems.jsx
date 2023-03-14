const EducationItems = (props) => {
    return (
        <>
        
            <div className="education-data">
                <div className="education-names">
                    
                    <span className="education-name">{props.job}</span>
                    <p class="education-platform ">{props.place}</p>
                    <p class="education-duration ">{props.timeline}</p>

                </div>
            </div>

        </>
    )
}

export default EducationItems