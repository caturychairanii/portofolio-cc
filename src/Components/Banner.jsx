const Banner = () => {
    return (
        <>   
            <section className="home bd-grid section" id="home">
                <div className="home-data">
                    <h2 className="home-title">
                    Hi, 👋<br />I'm <span className="home-title-color">Catury Chaerani</span><br />
                    <span id="jobTitle" >Web Developer</span> 
                    </h2>

                    <a href="#" target="_blank"
                    className="button">Resume</a>

                </div>

                <div className="home-social">
                    <a href="https://www.linkedin.com/in/catury-chairani-2637771ab/" target="_blank" className="home-social-icon"><i
                        className="bx bxl-linkedin"></i></a>
                    <a href="https://github.com/caturychairanii" target="_blank" className="home-social-icon"><i
                        className="bx bxl-github"></i></a>
                </div>

                <div className="home-img">
                    <img src="assets/img/profile.gif" alt="" />
                </div>
            </section>

        </>
    )
}

export default Banner;