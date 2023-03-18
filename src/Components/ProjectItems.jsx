const ProjectItems = (props) => {
    return  (
        <>
            <div className="project-img">
                <img src={props.img} alt />
                <p className="project-title">{props.title}</p>
                <p className="project-subtitle">
                    {props.text}
                    <br />
                    <br />{props.program}
                </p>
                <div className="project-btn">
                    <a href={props.github} className="small-btn button">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href={props.live} className="small-btn button">
                        Live
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProjectItems