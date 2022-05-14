export default function Home() {
  return (
    <section id="home" className="section active">
      <div className="homecolor-box" />
      <div className="common_bg animate__animated animate__rotateIn">
        <div className="container m-auto">
          <div className="row align-items-center">
            {/* Profile-Pic */}
            <div className=" col-xl-5 col-lg-6 col-md-6 col-12">
              <div
                id="particles-js"
                className="home-profile particles-js animate__animated animate__fadeInLeft animate__delay-1s"
              >
                <img
                  src="./elcode.jpeg"
                  alt="elcode"
                />
              </div>
            </div>
            {/* Profile-Pic End*/}
            {/* Profile-Information */}
            <div className="col-xl-7 col-lg-6 col-md-6 col-12">
              <div className="home-content">
                <p className="common-desctiption animate__animated animate__fadeInDown animate__delay-1s">
                  Get to know me
                </p>
                <h1 className="common-title animate__animated animate__fadeInDown animate__delay-1s">
                 Rama Aditya
                </h1>
                <div className="animated-bar animate__animated animate__fadeInDown animate__delay-2s" />
                <div className="animated-text animate__animated animate__fadeInDown animate__delay-2s">
                  <h3>Frontend Dev</h3>
                  <h3>Web Dev</h3>
                  <h3>Freelancer</h3>
                </div>
                {/* Social media icons*/}
                <div className="fixed-block animate__animated animate__jackInTheBox animate__delay-2-5s">
                  <ul className="list-unstyled social-icons">
                    <li>
                      <a href="https://www.facebook.com/elcodeee/" target="tab">
                        <i className="fab fa-facebook-square" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/rmdtya/" target="tab">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/elcodee" target="tab">
                        <i className="fab fa-github-square" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/ramditya_/" target="tab">
                        <i className="fab fa-instagram-square" />
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="lorem-text animate__animated animate__zoomIn animate__delay-2-5s">
                I am a fulltime programmer building an application for an organization that helps many Indonesian ID community, which is in line with the latest design trends. I also freelance to increase my knowledge & experience in the IT world. And <b>ELCODE</b> is a branding that I have developed since 2018 until now.
                </p>
                <div className="home-btn">
                  <a
                    href="#contact"
                    data-section-index={1}
                    className="clickbtn hire-me animate__animated animate__fadeInTopLeft animate__delay-3s "
                  >
                    Hire Me
                  </a>
                  <a
                    href="#about"
                    data-section-index={1}
                    className="clickbtn about-us animate__animated animate__fadeInTopRight animate__delay-3s"
                  >
                    About Me
                  </a>
                </div>
              </div>
            </div>
            {/* Profile-Information End */}
          </div>
          <div className="row justify-content-center animate__animated animate__fadeInUp animate__delay-2s">
                <div className="col-lg-6 text-center">
                  <h5 className="footer">&copy; &nbsp; 2018 - 2022<a>&nbsp; Elcode</a>&nbsp;&nbsp;Made With &nbsp;<i className="fas fa-heart animate__animated animate__pulse animate__faster animate__infinite	infinite" />&nbsp;&nbsp;<br />All
                    rigths reserved</h5>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
}
