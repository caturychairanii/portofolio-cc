import "../Components/css/About.css"

const About = () => {
    return (
        <>

            <section className="about bg-grid section" id="about">
                <h2 className="section-title">About</h2>

                <div className="about-body">
                    
                    <div className="about-item about-wdh-6">
                        <p className="about-title">
                            I'm a person who likes things related to technology. So I chose to continue my study at the SMK Informatika Utama with a major Computer Software Engineering and currently studying at the Sekolah Tinggi Teknologi Terpadu Nurul Fikri (STT-NF) with a major Information Systems. So I emphasize my will to be balanced with the skills I have by looking for various hours of flying in the IT field.

                        </p>
                        <a href="" className="button btn-about">View</a>
                    </div>

                    <div className="about-item about-wdh-6">
                        <img src="assets/img/profile/CaturyChaerani.jfif" className="about-img" alt="" />
                    </div>

                </div>

            </section>
        
        </>
    )
}

export default About;