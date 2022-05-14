import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const [inputs, setInput] = useState<any>({});
  
  const handleInputs = async (e: any) => {
    setInput({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSend = async () => {
    if(inputs){
      let check: any = inputs.numberwa.match("^(62)8[1-9][0-9]{6,9}$");
      const clientWhatsapp = axios.create({
        baseURL: "https://wapisender.id/api/v1",
      });

      if(check){
        let res : any = await clientWhatsapp.post(
          `send-message?api_key=FKGDMTOwHhQEC2phRoBdOyTVq0qytNX0&device_key=jo0lh2&destination=6281932709954&message=%2A_Message%20From%20Web_%2A%0D%0A%0D%0ANama%20%3A%20${inputs.name}%0D%0AWA%20%3A%20wa.me/${inputs.numberwa}%0D%0AMessage%20%3A%20%0D%0A${inputs.message}%0D%0A%0D%0A_elcodee.com_`,
          {}
          );
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Message Send, Ill Reply Faster i can.'
        })
      } else {
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

        Toast.fire({
          icon: "error",
          title: `Nomor Whatsapp Harus Berawalan  "62"  Bukan  "0"`,
        });
      }
    }

  }

  return (
    <section id="contact" className="section">
      <div className="homecolor-box" />
      <div className="common_bg animate__animated animate__rollIn">
        <div className="container">
          {/* Contact-page Start */}
          <div className="contact-section">
            {/* Contact-Section Title */}
            <div className="row">
              <div className="col-12">
                <div className="section-title animate__animated animate__fadeInDown animate__delay-1s">
                  <p className="common-desctiption">
                    Feel free to contact me anytimes
                  </p>
                  <h1 className="common-title">
                    my <span>contact</span>
                  </h1>
                  <div className="animated-bar" />
                </div>
              </div>
            </div>
            {/* Contact-Section Title End*/}
            {/* Contact Form Start */}
            <div className="contact-section">
              <div className="row">
                {/* Contact form */}
                <div className="col-lg-7 col-12 ">
                  <form
                    className="contact-form animate__animated animate__fadeInLeft animate__delay-2s"
                    id="contact-form"
                  >
                    <h4 className="content-title">Whatsapp Me</h4>
                    <div className="row">
                      <div className="col-12 col-md-6 form-group">
                        <input
                          className="form-control"
                          id="contact-name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          onInput={(e) => handleInputs(e)}
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 form-group">
                        <input
                          className="form-control"
                          id="contact-email"
                          type="number"
                          name="numberwa"
                          placeholder="628xxx"
                          onInput={(e) => handleInputs(e)}
                          required
                        />
                      </div>
                      <div className="col-12 form-group form-message">
                        <textarea
                          className="form-control"
                          id="contact-message"
                          name="message"
                          placeholder="Message"
                          rows={5}
                          onInput={(e) => handleInputs(e)}
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </form>
                      <div className="col-12 mb-4 ms-2 form-submit animate__animated animate__fadeInLeft animate__delay-2s">
                        <button
                          className="clickbtn button-main button-scheme"
                          // id="contact-submit"
                          onClick={handleSend}
                        >
                          Send Message
                        </button>
                      </div>
                </div>
                {/* Contact form End */}
                {/* Contact info */}
                <div className="col-lg-5 col-12 ">
                  <div className="contact-info animate__animated animate__fadeInRight animate__delay-3s">
                    <h4 className="content-title">Contact Info</h4>
                    <p className="info-description">
                      Always available for freelance work if the right project
                      comes along, Feel free to contact me!
                    </p>
                    {/* <ul
                      className="list-unstyled list-info"
                      style={{ display: "inline-grid" }}
                    >
                      <li>
                        <div className="media d-flex align-items-center">
                          <span className="info-icon">
                            <i className="fas fa-user-alt" />
                          </span>
                          <div className="media-body info-details">
                            <h6 className="info-type">Name</h6>
                            <span className="info-value">Jini Smith</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media d-flex align-items-center">
                          <span className="info-icon">
                            <i className="fas fa-map-pin" />
                          </span>
                          <div className="media-body info-details">
                            <h6 className="info-type">Location</h6>
                            <span className="info-value">
                              4155 Mann Island, Liverpool, United Kingdom.
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media d-flex align-items-center">
                          <span className="info-icon">
                            <i className="fas fa-phone-alt" />
                          </span>
                          <div className="media-body info-details">
                            <h6 className="info-type">Call Me</h6>
                            <span className="info-value">
                              <a href="tel:+441632967704">+44 1632 967704</a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media d-flex align-items-center">
                          <span className="info-icon">
                            <i className="fas fa-envelope" />
                          </span>
                          <div className="media-body info-details">
                            <h6 className="info-type">Email Me</h6>
                            <span className="info-value">
                              <a href="mailto:Jini@example.com">
                                Jini@example.com
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul> */}
                  </div>
                  {/* Social media icons*/}
                  <div className="fixed-block d-flex animate__animated animate__jackInTheBox animate__delay-3s">
                    <ul className="list-unstyled social-icons p-3">
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
                {/* Contact info End */}
              </div>
            </div>
            {/* map */}
            {/* <div className="row">
              <div className="col-12">
                <div className="map animate__animated animate__fadeInRight animate__delay-4s">
                  <p>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19845.82732713224!2d-0.3162034543774074!3d51.55487883052924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876116207a6d0bd%3A0xaf7016a2cadb21e4!2sWembley%2C%20UK!5e0!3m2!1sen!2sin!4v1645179715804!5m2!1sen!2sin"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </p>
                </div>
              </div>
            </div> */}
            {/* map end */}
            {/* Contact-Footer */}
            <div className="row justify-content-center animate__animated animate__fadeInUp animate__delay-5s">
              <div className="col-lg-6 text-center">
                <h5 className="footer">
                  &copy; &nbsp; 2018 - 2022<a>&nbsp; Elcode</a>&nbsp;&nbsp;Made
                  With &nbsp;
                  <i className="fas fa-heart animate__animated animate__pulse animate__faster animate__infinite	infinite" />
                  &nbsp;&nbsp;
                  <br />
                  All rigths reserved
                </h5>
              </div>
            </div>
            {/* Contact-Footer End */}
          </div>
          {/* Contact-page End */}
        </div>
      </div>
    </section>
  );
}
