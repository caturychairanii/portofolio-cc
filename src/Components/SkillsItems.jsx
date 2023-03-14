const SkillsItems = (props) => {
    return (
        <>

            <div class="skills-data">
                <div class="skills-names">
                    <img class="skills-icon" src={props.img} alt="" />
                    <span class="skills-name">{props.name}</span>
                </div>
            </div>

        </>
    )
}

export default SkillsItems