import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Us | Hauspire - Interior Design Firm",
  description: "Learn about Hauspire, Pune's leading interior design firm with 25+ years of experience crafting beautiful, functional spaces.",
};

export default function AboutPage() {
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
              <h1 className="mb-4 mb-md-0 text-primary text-uppercase">About Us</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <Link className="btn btn-outline-primary" href="/">Home</Link>
                <i className="fas fa-angle-double-right text-primary mx-2"></i>
                <a className="btn btn-outline-primary disabled" href="#">About Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="container-fluid bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="d-flex flex-column align-items-center justify-content-center bg-primary h-100 py-5 px-3">
                <i className="flaticon-brickwall display-1 font-weight-normal text-secondary mb-3"></i>
                <h4 className="display-3 mb-3">25+</h4>
                <h1 className="m-0">Years Experience</h1>
              </div>
            </div>
            <div className="col-lg-7 m-0 my-lg-5 pt-5 pb-5 pb-lg-2 pl-lg-5">
              <h6 className="text-primary font-weight-normal text-uppercase mb-3">Learn About Us</h6>
              <h1 className="mb-4 section-title">We Are The Best Interior Designing Firm In Pune</h1>
              <p>At Hauspire, we blend creativity and functionality to craft personalized interior designs tailored to your style and needs. With premium materials, expert craftsmanship, and seamless customization options, we transform spaces into stunning masterpieces. We take pride in our ability to listen to our clients and translate their visions into reality.</p>
              <div className="row py-2">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center mb-4">
                    <h1 className="flaticon-house font-weight-normal text-primary m-0 mr-3"></h1>
                    <h5 className="text-truncate m-0">Project Planning</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center mb-4">
                    <h1 className="flaticon-stairs font-weight-normal text-primary m-0 mr-3"></h1>
                    <h5 className="text-truncate m-0">Exterior &amp; Interior</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center mb-4">
                    <h1 className="flaticon-office font-weight-normal text-primary m-0 mr-3"></h1>
                    <h5 className="text-truncate m-0">Commercial Design</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center mb-4">
                    <h1 className="flaticon-living-room font-weight-normal text-primary m-0 mr-3"></h1>
                    <h5 className="text-truncate m-0">Residential Design</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container-fluid bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mt-5 py-5 pr-lg-5">
              <h6 className="text-primary font-weight-normal text-uppercase mb-3">Why Choose Us?</h6>
              <h1 className="mb-4 section-title">25+ Years Experience In The Interior Design Industry</h1>
              <p className="mb-4">By integrating cutting-edge business insights, multidisciplinary expertise, and stringent design principles, we continuously break new ground in creativity. As leaders in the industry in Pune, we take immense pride in enhancing lives through exceptional interior design solutions.</p>
              <ul className="list-inline">
                <li><h5><i className="far fa-check-square text-primary mr-3"></i>25+ Years Experience</h5></li>
                <li><h5><i className="far fa-check-square text-primary mr-3"></i>Best Interior Design</h5></li>
                <li><h5><i className="far fa-check-square text-primary mr-3"></i>Customer Satisfaction</h5></li>
                <li><h5><i className="far fa-check-square text-primary mr-3"></i>300+ Happy Clients</h5></li>
                <li><h5><i className="far fa-check-square text-primary mr-3"></i>100+ Awards Won</h5></li>
              </ul>
              <Link href="/contact" className="btn btn-primary mt-3 py-2 px-4">Get In Touch</Link>
            </div>
            <div className="col-lg-5">
              <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                <img className="h-100" src="/img/feature.jpg" alt="Why Choose Hauspire" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container-fluid bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="py-5 px-4 h-100 bg-primary d-flex flex-column align-items-center justify-content-center">
                <h6 className="text-white font-weight-normal text-uppercase mb-3">Our Team</h6>
                <h1 className="mb-0 text-center">Meet Our Team Members</h1>
              </div>
            </div>
            <div className="col-md-8 col-sm-6 p-0 py-sm-5">
              <div className="owl-carousel team-carousel position-relative p-0 py-sm-5">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="team d-flex flex-column text-center mx-3">
                    <div className="position-relative">
                      <img className="img-fluid w-100" src={`/img/team-${n}.jpg`} alt={`Team ${n}`} />
                      <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                        <a className="btn btn-outline-primary text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-primary text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-primary text-center px-0" style={{ width: 38, height: 38 }} href="#"><i className="fab fa-linkedin-in"></i></a>
                      </div>
                    </div>
                    <div className="d-flex flex-column bg-secondary text-center py-3">
                      <h5 className="text-white">Designer Name</h5>
                      <p className="m-0">Interior Designer</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
