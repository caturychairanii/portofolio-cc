const Navbar = () => {
    return (
        <>
            <header className="l-header">
                <nav className="nav bd-grid">
                    <div>
                        <a href="" className="nav-logo"><img src="" alt="CC" /></a>
                    </div>

                    <div className="nav-menu" id="nav-menu">
                        <ul className="nav-list">

                            <li className="nav-item">
                                <a href="/Home" className="nav-link home active">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link about">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#skills" className="nav-link skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a href="#projects" className="nav-link projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link contact">Contact</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" onClick="myFunction()"> <img src="assets/img/sumoon.png" alt="" height="20px" width="20px" style={{backgroundColor:"transparent"}} /> </a>
                            </li>

                        </ul>
                    </div>

                    <div className="nav-toggle" id="nav-toggle">
                        <i className="bx bx-menu"></i>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Navbar;