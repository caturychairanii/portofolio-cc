import SkillsItems from "./SkillsItems";
import "../Components/css/Skill.css"

const Skills = () => {
    return (
        <>
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>

            <div className="skills-container bd-grid">
                <div>

                    
                    <SkillsItems 
                        img = "./assets/img/pemograman/html.png"
                        name = "HTML"
                    />
                    
                    <SkillsItems 
                        img = "./assets/img/pemograman/css.png"
                        name = "CSS"
                    />  

                    <SkillsItems 
                        img = "./assets/img/pemograman/Javascript.png"
                        name = "Javascript"
                    />  

                    <SkillsItems 
                        img = "./assets/img/pemograman/php.svg"
                        name = "Javascript"
                    />  

                </div>

                <div>

                    <SkillsItems 
                        img = "./assets/img/pemograman/Laravel.png"
                        name = "Laravel"
                    />  

                    <SkillsItems 
                        img = "./assets/img/pemograman/codeigniter.png"
                        name = "Codeigniter"
                    />  
                    <SkillsItems 
                        img = "./assets/img/pemograman/reactjs.webp"
                        name = "React JS"
                    />
                      
                </div>


            </div>


        </section>
        </>
    )
}

export default Skills;