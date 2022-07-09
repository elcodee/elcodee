import Swal from "sweetalert2";

export default function About(){
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const clickCV = () => {
    Toast.fire({
      icon: "warning",
      title: `CV Please Contact`,
    })
  }
    return(
        <section id="about" className="section ">
        <div className="homecolor-box" />
        <div className="common_bg animate__animated animate__lightSpeedInLeft">
          <div className="container">
            <div className="about-content">
              {/* About Title Start*/}
              <div className="row ">
                <div className="col-12 ">
                  <div className="section-title  animate__animated animate__fadeInDown animate__delay-1s">
                    <p className="common-desctiption">intro</p>
                    <h1 className="common-title">About <span>Me</span></h1>
                    <div className="animated-bar" />
                  </div>
                </div>
              </div>
              {/* About Title End */}
              {/* About-Me */}
              <div className="row single-section">
                <div className="col-lg-4 profile-photo animate__animated animate__fadeInLeft animate__delay-2s ">
                  <div className="row">
                    <div className="col-12 d-block col-sm-none">
                      <img src="./elcode.jpeg" className="img-fluid main-img-mobile" alt="elcode" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <div className="row personal-info animate__animated animate__fadeInRight animate__delay-2s">
                    <div className="col-12">
                      <h5 className="personal-title">who am <span>i ?</span></h5>
                      <h3 className="personal-title">I'm Rama Aditya, a  <span>Frontend Developer, Web
                          Developer, AI Engineer</span> and <span>Freelancer</span></h3>
                    </div>
                    <div className="row ">
                      <div className="col-lg-12 mt-5">
                        <h3 className="personal-infotitle">personal <span>informations</span></h3>
                      </div>
                      <div className="col-lg-6">
                        <ul className="about-you ">
                          <li>
                            <span className="title">first name : </span>
                            <span className="value"> Rama</span>
                          </li>
                          <li>
                            <span className="title">last name : </span>
                            <span className="value"> Aditya</span>
                          </li>
                          <li>
                            <span className="title">address : </span>
                            <span className="value"> Bekasi Kota Jawa Barat, Indonesia</span>
                          </li>
                          <li>
                            <span className="title">From : </span>
                            <span className="value"> Surabaya, Indonesia</span>
                          </li>
                          <li>
                            <span className="title">Age : </span>
                            <span className="value"> 22 years</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="about-you ">
                          <li>
                            <span className="title">E-mail : </span>
                            <span className="value"><a href="mailto:elcodeee@gmail.com"> elcodeee@gmail.com</a></span>
                          </li>
                          <li>
                            <span className="title">Phone : </span>
                            <span className="value"><a href="tel:(+62)819-3270-9954"> (+62) 819-3270-9954</a></span>
                          </li>
                          <li>
                            <span className="title">Main Language :</span>
                            <span className="value">Indonesia</span>
                          </li>
                          <li>
                            <span className="title">Freelance :</span>
                            <span className="value"> Available</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12">
                        <div className="About-btn">
                          <button id="b1" className="clickbtn download-cv" onClick={clickCV}>Download CV <i className="fa fa-download" aria-hidden="true" /></button>
                          {/* Social media icons*/}
                          <div className="col-lg-7 col-sm-6 col-12">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* About-Me End */}
              {/* Resume section Start */}
              <div className="resume-section ">
                {/* Resume title*/}
                <div className="row">
                  <div className="col-12">
                    <div className="section-title animate__animated animate__fadeInUp animate__delay-3s">
                      <p className="common-desctiption">Check out my Resume</p>
                      <h1 className="common-title ">my <span>Resume</span></h1>
                      <div className="animated-bar " />
                    </div>
                  </div>
                </div>
                {/* Resume title End*/}
                {/* Resume Content */}
                <div className="row">
                  {/* Education part*/}
                  <div className="col-md-6 col-12 ">
                    <div className=" col-block education ">
                      <h3 className="about-subtitle">Education</h3>
                      <div className="resume-item"><span className="item-arrow" />
                        <h5 className="item-title">Graduated From Senior High School</h5><span className="item-details">SMK PKP JIS / 2016 - 2019</span>
                        {/* <p className="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo
                          repudiandae.</p> */}
                      </div>
                      <div className="resume-item"><span className="item-arrow" />
                        <h5 className="item-title">Graduated From Junior High School</h5><span className="item-details">SMP 230 Jakarta / 2013 - 2016</span>
                        {/* <p className="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo
                          repudiandae.</p> */}
                      </div>
                      {/* <div className="resume-item"><span className="item-arrow" />
                        <h5 className="item-title">Diploma In Web Design</h5><span className="item-details">Cambridge University
                          /
                          2009 - 2010</span>
                        <p className="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo
                          repudiandae.</p>
                      </div> */}
                    </div>
                  </div>
                  {/* Experience part*/}
                  <div className="col-md-6 col-12 ">
                    <div className=" col-block education">
                      <h3 className="about-subtitle">Experience</h3>
                      <div className="resume-item"><span className="item-arrow" />
                        <h5 className="item-title">FullStack JS Developer</h5><span className="item-details">Dumbways.id / 2021</span>
                        {/* <p className="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo
                          repudiandae.</p> */}
                      </div>
                      <div className="resume-item"><span className="item-arrow" />
                        <h5 className="item-title">React JS Developer</h5><span className="item-details">Hacktiv8 / 2020</span>
                        {/* <p className="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo
                          repudiandae.</p> */}
                      </div>
                      <div className="resume-item"><span className="item-arrow" />
                        <h5 className="item-title">Laravel Developer</h5><span className="item-details">BWA / 2019 - 2020</span>
                        {/* <p className="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo
                          repudiandae.</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Resume ContentEnd */}
              </div>
              {/* / Resume section End*/}
              {/* Skill Bar Section */}
              <div className="skill-section">
                <div className="row">
                  <div className="col-12 ">
                    <div className="section-title animate__animated animate__fadeInUp animate__delay-3s">
                      <p className="common-desctiption">My level of knowledge in some tools</p>
                      <h1 className="common-title">My <span>Skills</span></h1>
                      <div className="animated-bar" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 ">
                    <h3 className="about-subtitle">Design <span>Skills</span></h3>
                    <div className="skill-bars">
                      <div className="bar">
                        <div className="info">
                          <span>Photoshop</span>
                        </div>
                        <div className="progress-line Photoshop">
                          <span />
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Figma</span>
                        </div>
                        <div className="progress-line Figma">
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 ">
                    <h3 className="about-subtitle">Coding <span>Skills</span></h3>
                    <div className="skill-bars">
                      <div className="bar">
                        <div className="info">
                          <span>React JS</span>
                        </div>
                        <div className="progress-line html">
                          <span />
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Next JS</span>
                        </div>
                        <div className="progress-line css">
                          <span />
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>JS Framework</span>
                        </div>
                        <div className="progress-line jquery">
                          <span />
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Node JS</span>
                        </div>
                        <div className="progress-line python">
                          <span />
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Laravel</span>
                        </div>
                        <div className="progress-line mysql">
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* / Skill Bar Section */}
              {/* service section  */}
              <div className="services-section text-center ">
                <div className="row ">
                  <div className="col-12">
                    <div className="section-title  animate__animated animate__fadeInUp animate__slower animate__delay-3s ">
                      <p className="common-desctiption">Services i offer to my clients</p>
                      <h1 className="common-title">My <span>Services</span></h1>
                      <div className="animated-bar" />
                    </div>
                    <p className="service-text">Lorem Ipsum is simply dummy text of the printing and type setting industry.
                      Lorem Ipsum has been the industry's<br />standard dummy text ever since the 1500s, when an unknown
                      book.
                    </p>
                  </div>
                </div>
                <div className="row animate__animated animate__zoomIn animate__slower animate__delay-3s">
                  {/* Single Item */}
                  <div className="col-lg-3 col-sm-6 services-box animate__animated animate__zoomIn animate__slower animate__delay-3s">
                    <div className="service-item">
                      <i className="fas fa-laptop-code" />
                      <h4><span className="service-line">web design</span></h4>
                      {/* <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p> */}
                    </div>
                  </div>
                  {/* End Single Item */}
                  {/* Single Item */}
                  <div className="col-lg-3 col-sm-6 services-box animate__animated animate__zoomIn animate__slower animate__delay-3s">
                    <div className="service-item">
                      <i className="fas fa-palette" />
                      <h4><span className="service-line">design</span></h4>
                      {/* <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p> */}
                    </div>
                  </div>
                  {/* End Single Item */}
                  {/* Single Item */}
                  <div className="col-lg-3 col-sm-6 services-box animate__animated animate__zoomIn animate__slower animate__delay-3s">
                    <div className="service-item">
                      <i className="fas fa-object-ungroup" />
                      <h4><span className="service-line">product design</span></h4>
                      {/* <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p> */}
                    </div>
                  </div>
                  {/* End Single Item */}
                  {/* Single Item */}
                  <div className="col-lg-3 col-sm-6 services-box animate__animated animate__zoomIn animate__slower animate__delay-3s">
                    <div className="service-item">
                      <i className="far fa-object-ungroup" />
                      <h4><span className="service-line">UI/UX design</span></h4>
                      {/* <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p> */}
                    </div>
                  </div>
                  {/* End Single Item */}
                  {/* Single Item */}
                  <div className="col-lg-3 col-sm-6 services-box animate__animated animate__zoomIn animate__slower animate__delay-3s">
                    <div className="service-item">
                      <i className="fas fa-radiation" />
                      <h4><span className="service-line">animation</span></h4>
                      {/* <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p> */}
                    </div>
                  </div>
                  {/* End Single Item */}
                  {/* Single Item */}
                  <div className="col-lg-3 col-sm-6 services-box animate__animated animate__zoomIn animate__slower animate__delay-3s">
                    <div className="service-item">
                      <i className="fas fa-code" />
                      <h4><span className="service-line">web devolopment</span></h4>
                      {/* <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p> */}
                    </div>
                  </div>
                  {/* End Single Item */}
                  {/* Single Item */}
                  <div className="col-lg-3 col-sm-6 services-box animate__animated animate__zoomIn animate__slower animate__delay-3s">
                    <div className="service-item">
                      <i className="fas fa-arrows-alt" />
                      <h4><span className="service-line">fully responsive</span></h4>
                      {/* <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p> */}
                    </div>
                  </div>
                  {/* End Single Item */}
                  {/* Single Item */}
                  <div className="col-lg-3 col-sm-6 services-box animate__animated animate__zoomIn animate__slower animate__delay-3s">
                    <div className="service-item">
                      <i className="fas fa-dharmachakra" />
                      <h4><span className="service-line">management</span></h4>
                      {/* <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p> */}
                    </div>
                  </div>
                  {/* End Single Item */}
                </div>
              </div>
              {/* / service section */}
              {/* Testimonials */}
              <div className="row">
                <div className="col-12 animate__animated animate__fadeInDown animate__delay-3s">
                  <div className="section-title">
                    <p className="common-desctiption">what i learned in 5 years</p>
                    <h1 className="common-title">My<span>Certificate</span></h1>
                    <div className="animated-bar" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div id="testimonial" className="owl-carousel owl-theme">
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="quote">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="testimonial-img">
                        <img src="https://files.elcodee.com/certi/rama-bnsp.jpeg" alt="BNSP" />
                      </div>
                      <p><b>BNSP</b> Multimedia Service</p>
                      {/* <div className="rating">
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                      </div> */}
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="quote">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="testimonial-img">
                        <img src="https://files.elcodee.com/certi/rama-lspr.png" alt="LSPR" />
                      </div>
                      <p><b>LSPR</b> Radio Poster Design</p>
                      {/* <div className="rating">
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                      </div> */}
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="quote">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="testimonial-img">
                        <img src="https://files.elcodee.com/certi/rama-codio.png" alt="Koding Stuio" />
                      </div>
                      <p><b>Koding Stuio</b> Fullstack Laravel Web Developer</p>
                      {/* <div className="rating">
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                      </div> */}
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="quote">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="testimonial-img">
                        <img src="https://files.elcodee.com/certi/rama-hacktiv8-rn.png" alt="Hackti8" />
                      </div>
                      <p><b>Hacktiv8</b> React & React Native </p>
                      {/* <div className="rating">
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                      </div> */}
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="quote">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="testimonial-img">
                        <img src="https://files.elcodee.com/certi/rama-dumbways-bootcamp-selection.png" alt="dumbways.id" />
                      </div>
                      <p><b>Dumbways.id</b> Fullstack JavaScript Developer </p>
                      {/* <div className="rating">
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                      </div> */}
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="quote">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="testimonial-img">
                        <img src="https://files.elcodee.com/certi/rama-dumbways-preclass.png" alt="dumbways.id" />
                      </div>
                      <p><b>Dumbways.id</b> Junior Fullstack JavaScript Developer </p>
                      {/* <div className="rating">
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                      </div> */}
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="quote">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="testimonial-img">
                        <img src="https://files.elcodee.com/certi/rama-hacktiv8-intro.png" alt="hacktiv8" />
                      </div>
                      <p><b>Hacktiv8</b> Into To Programing</p>
                      {/* <div className="rating">
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                      </div> */}
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="quote">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="testimonial-img">
                        <img src="https://files.elcodee.com/certi/rama-bwa.png" alt="build with angga" />
                      </div>
                      <p><b>BWA</b> Junior Laravel Fullstack</p>
                      {/* <div className="rating">
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                        <i className="fas fa-3x fa-star" />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/*End Testimonials section */}
              {/* Fun Fact Section */}
              
              {/* <div className="funfacts-section">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title">
                      <p className="common-desctiption">This are my strongest sides</p>
                      <h1 className="common-title">fun <span>facts</span></h1>
                      <div className="animated-bar" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="funfacts-box">
                      <h3 className="counter" data-to={10} data-time={10000}>0</h3>
                      <p className="fun-text">years of <span>experience</span></p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="funfacts-box">
                      <h3 className="counter" data-to={499} data-time={100000}>0</h3>
                      <p className="fun-text">happy Clients</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="funfacts-box">
                      <h3 className="counter" data-to={101} data-time={100000}>0</h3>
                      <p className="fun-text">completed projects</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="funfacts-box">
                      <h3 className="counter" data-to={20} data-time={10000}>0</h3>
                      <p className="fun-text">awards win</p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="row justify-content-center animate__animated animate__fadeInUp animate__delay-2s">
                <div className="col-lg-6 text-center">
                  <h5 className="footer">&copy; &nbsp; 2018 - 2022<a>&nbsp; Elcode</a>&nbsp;&nbsp;Made With <i className="fas fa-heart animate__animated animate__pulse animate__faster animate__infinite	infinite" />&nbsp;&nbsp;<br />All
                    rigths reserved</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}
