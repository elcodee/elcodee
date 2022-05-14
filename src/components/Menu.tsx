export default function Menu(){
    return (
        <div className="header-holder services-section text-center animate__animated animate__rotateIn">
        <div className="navigation">
          <ul className="nav">
            <li className="list active">
              <a href="#home" className="active">
                <span className="icon">
                  <i className="fas fa-house-user" />
                </span>
                <div className="social__tooltip social__tooltip-bottom">Home</div>
              </a>
            </li>
            <li className="list">
              <a href="#about">
                <span className="icon">
                  <i className="fas fa-user-alt" />
                </span>
                <div className="social__tooltip social__tooltip-bottom">About</div>
              </a>
            </li>
            {/* <li className="list">
              <a href="#portfolio">
                <span className="icon">
                  <i className="fas fa-briefcase" />
                </span>
                <div className="social__tooltip social__tooltip-bottom">Portfolio</div>
              </a>
            </li> */}
            <li className="list">
              <a href="#project">
                <span className="icon">
                  <i className="fas fa-desktop" />
                </span>
                <div className="social__tooltip social__tooltip-bottom">My Project</div>
              </a>
            </li>
            <li className="list">
              <a href="#contact">
                <span className="icon">
                  <i className="fas fa-phone-alt" />
                </span>
                <div className="social__tooltip social__tooltip-bottom">Contact</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
}