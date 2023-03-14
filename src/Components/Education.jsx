import EducationItems from "./EducationItems"

const Education = () => {
    return (
        <>

            <section className="education section" id="education">
                <h2 className="section-title">Education</h2>

                <div className="education-container bd-grid">
                    
                    <EducationItems 
                        job = "Web Developer"
                        place = "Indonesian Young Scientist Association | Fulltime"
                        timeline = "Sep 2021 - 2023 Maret"
                    />

                    <EducationItems 
                        job = "Private Tutor | Fulltime"
                        place = "Kemang, South Jakarta"
                        timeline = "Sep 2020 - Feb 2021"
                    />

                    <EducationItems 
                        job = "Web developer | Internship"
                        place = "Jakarta Rent Bus"
                        timeline = "Jan 2019 - Mar 2019"
                    />

                </div>

            </section>

        </>
    )
}

export default Education