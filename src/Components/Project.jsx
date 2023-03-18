import ProjectItems from "./ProjectItems"

const Project = () => {
    return (
        <>
            <section className="projects section" id="projects">
                <h2 className="section-title">Projects</h2>

                <div className="project-container">

                        <ProjectItems 
                            img = "./assets/img/Project/yisf.png"
                            title = "YISF"
                            text = "YISF is a website built with the aim of providing information about competitions for science contest participants, the website contains guidebooks, final results, contact information for event organizers, and others. This website was created using the JavaScript programming language with the React JS framework and website design using CSS & Bootstrap"
                            github = "https://github.com/caturychairanii/kerja_webnew_yisf"
                            live = "https://yisf.or.id/"
                        />          

                        <ProjectItems 
                            img = "./assets/img/Project/WYIIA.png"
                            title = "WYIIA"
                            text = "WYIIA is a website built with the aim of providing information about competitions for science contest participants, the website contains guidebooks, final results, contact information for event organizers, and others. This website was created using the PHP programming language with an OOP (Object Oriented Programming) system and website design using CSS & Bootstrap"
                            github = ""
                            live = "https://wyiia.or.id"
                        />    

                        <ProjectItems 
                            img = "./assets/img/Project/Database_iysa.png"
                            title = "Database IYSA"
                            text = "The IYSA Database is a website that was built with the aim of being a data repository or server that is used to accommodate databases of science competition participants from previous years to the present. This website was created using the PHP programming language with the Laravel framework and website design using CSS & Bootstrap"
                            github = ""
                            live = ""
                        />

                        <ProjectItems 
                            img = "./assets/img/Project/iysa_csr.jpeg"
                            title = "IYSA CSR"
                            text = "IYSA CSR is a website built with the aim of providing information about CSR activities organized by IYSA which is one of IYSA's Corporate Social Responsibility (CSR) activities which is presented to all parties (educational units, educators, students and students) who have participated in competitions held by IYSA. This website was created using the PHP programming language with the Laravel framework and website design using CSS & Bootstrap"
                            github = ""
                            live = ""
                        />

                        <ProjectItems
                            img     = "./assets/img/Project/irtc&nrtc.png"
                            title   = "NRTC & IRTC"
                            text    = "NRTC & IRTC is a website built with the aim of providing information about competitions for science contest participants, the website contains guidebooks, final results, contact information for event organizers, and others. This website was created using the JavaScript programming language with the React JS framework and website design using CSS & Bootstrap"
                            github  = ""
                            live    = ""
                        />

                        <ProjectItems
                            img     = "./assets/img/Project/iybc&glocolis.jpeg"
                            title   = "IYBC"
                            text    = "IYBC is a website built with the aim of providing information about competitions for science contest participants, the website contains guidebooks, final results, contact information for event organizers, and others. This website was created using the PHP programming language with an OOP (Object Oriented Programming) system and website design using CSS & Bootstrap"
                            github  = ""
                            live    = ""
                        />

                        <ProjectItems
                            img     = "./assets/img/Project/Glocolis.jpeg"
                            title   = "GLOCOLIS"
                            text    = "GLOCOLIS is a website built with the aim of providing information about competitions for science contest participants, the website contains guidebooks, final results, contact information for event organizers, and others. This website was created using the PHP programming language with an OOP (Object Oriented Programming) system and website design using CSS & Bootstrap"
                            github  = ""
                            live    = "https://glocolis.or.id/"
                        />



                </div>

                

            </section>        
        </>
    )
}

export default Project