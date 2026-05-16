import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Our Services | Hauspire - Interior Design",
  description: "Explore Hauspire's full range of interior design services including bedroom, kitchen, bathroom, and commercial design solutions.",
};

export default function ServicesPage() {
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
              <h1 className="mb-4 mb-md-0 text-primary text-uppercase">Our Services</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <Link className="btn btn-outline-primary" href="/">Home</Link>
                <i className="fas fa-angle-double-right text-primary mx-2"></i>
                <a className="btn btn-outline-primary disabled" href="#">Our Services</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 pr-lg-5">
              <h6 className="text-primary font-weight-normal text-uppercase mb-3">Our Awesome Services</h6>
              <h1 className="mb-4 section-title">Awesome Interior Designing Services For Your Home</h1>
              <p>We offer a comprehensive range of interior design services tailored to your unique lifestyle and preferences. From concept to completion, our team of expert designers ensures every detail is perfect, creating spaces that are both beautiful and functional.</p>
              <Link href="/contact" className="btn btn-primary mt-3 py-2 px-4">Book Consultation</Link>
            </div>
            <div className="col-lg-6 p-0 pt-5 pt-lg-0">
              <div className="owl-carousel service-carousel position-relative">
                <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                  <h3 className="flaticon-bedroom display-3 font-weight-normal text-primary mb-3"></h3>
                  <h5 className="mb-3">Bedroom Design</h5>
                  <p className="m-0">Transform your bedroom into a luxurious sanctuary with our bespoke design solutions tailored to your personal style.</p>
                </div>
                <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                  <h3 className="flaticon-kitchen display-3 font-weight-normal text-primary mb-3"></h3>
                  <h5 className="mb-3">Kitchen Design</h5>
                  <p className="m-0">Modern, functional kitchens designed with premium materials to make cooking a joy and gathering a pleasure.</p>
                </div>
                <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                  <h3 className="flaticon-bathroom display-3 font-weight-normal text-primary mb-3"></h3>
                  <h5 className="mb-3">Bathroom Design</h5>
                  <p className="m-0">Create your own spa-like retreat with our elegant bathroom design concepts and premium fixtures.</p>
                </div>
                <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                  <h3 className="flaticon-living-room display-3 font-weight-normal text-primary mb-3"></h3>
                  <h5 className="mb-3">Living Room</h5>
                  <p className="m-0">Curated living spaces that perfectly balance comfort and sophistication for your entire family.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container-fluid bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mt-5 py-5 pr-lg-5">
              <h6 className="text-primary font-weight-normal text-uppercase mb-3">Why Choose Us?</h6>
              <h1 className="mb-4 section-title">25+ Years Experience In The Interior Design Industry</h1>
              <p className="mb-4">By integrating cutting-edge business insights, multidisciplinary expertise, and stringent design principles, we continuously break new ground in creativity. As leaders in Pune, we take immense pride in enhancing lives through exceptional interior design solutions.</p>
              <ul className="list-inline">
                <li><h5><i className="far fa-check-square text-primary mr-3"></i>25+ Years Experience</h5></li>
                <li><h5><i className="far fa-check-square text-primary mr-3"></i>Best Interior Design</h5></li>
                <li><h5><i className="far fa-check-square text-primary mr-3"></i>Customer Satisfaction</h5></li>
              </ul>
              <Link href="/contact" className="btn btn-primary mt-3 py-2 px-4">Get A Quote</Link>
            </div>
            <div className="col-lg-5">
              <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                <img className="h-100" src="/img/feature.jpg" alt="Why Choose Us" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                <img className="h-100" src="/img/testimonial.jpg" alt="Testimonials" />
              </div>
            </div>
            <div className="col-md-7 py-5 pl-md-5">
              <h6 className="text-primary font-weight-normal text-uppercase mb-3 pt-5">Testimonial</h6>
              <h1 className="mb-4 section-title">What Our Clients Say</h1>
              <div className="owl-carousel testimonial-carousel position-relative pb-5 mb-md-5">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <img className="img-fluid rounded-circle" src="/img/testimonial-1.jpg" style={{ width: 60, height: 60 }} alt="Client" />
                    <div className="ml-3">
                      <h5>Pooja Deshmukh</h5>
                      <i>Home Owner, Pune</i>
                    </div>
                  </div>
                  <p>The design by Hauspire exceeded my expectations. They brought innovative ideas and quality workmanship that made all the difference.</p>
                </div>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <img className="img-fluid rounded-circle" src="/img/testimonial-2.jpg" style={{ width: 60, height: 60 }} alt="Client" />
                    <div className="ml-3">
                      <h5>Sneha Sharma</h5>
                      <i>Business Owner</i>
                    </div>
                  </div>
                  <p className="m-0">Hauspire transformed my living room into a modern yet cozy space. Their attention to detail is impeccable. Highly recommend!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
