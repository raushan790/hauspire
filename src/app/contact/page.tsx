import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | Hauspire - Interior Design",
  description: "Get in touch with Hauspire for premium interior design services in Pune. Book a consultation today.",
};

export default function ContactPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <ContactBar />

      {/* Page Header */}
      <div className="container-fluid bg-secondary py-5">
        <div className="container py-5">
          <div className="row align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="mb-4 mb-md-0 text-primary text-uppercase">Contact Us</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <Link className="btn btn-outline-primary" href="/">Home</Link>
                <i className="fas fa-angle-double-right text-primary mx-2"></i>
                <a className="btn btn-outline-primary disabled" href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="container-fluid bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="d-flex flex-column justify-content-center bg-primary h-100 p-5">
                <div className="d-inline-flex border border-secondary p-4 mb-4">
                  <h1 className="flaticon-office font-weight-normal text-secondary m-0 mr-3"></h1>
                  <div className="d-flex flex-column">
                    <h4>Our Office</h4>
                    <p className="m-0 text-white">Pune, Maharashtra, India</p>
                  </div>
                </div>
                <div className="d-inline-flex border border-secondary p-4 mb-4">
                  <h1 className="flaticon-email font-weight-normal text-secondary m-0 mr-3"></h1>
                  <div className="d-flex flex-column">
                    <h4>Email Us</h4>
                    <p className="m-0 text-white">hello@hauspire.com</p>
                  </div>
                </div>
                <div className="d-inline-flex border border-secondary p-4">
                  <h1 className="flaticon-telephone font-weight-normal text-secondary m-0 mr-3"></h1>
                  <div className="d-flex flex-column">
                    <h4>Call Us</h4>
                    <p className="m-0 text-white">+91 766 664 5800</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mb-5 my-lg-5 py-5 pl-lg-5">
              <div className="contact-form">
                <div id="success"></div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control p-4"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control p-4"
                      rows={6}
                      id="message"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary py-3 px-5"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
