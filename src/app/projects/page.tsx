import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Our Projects | Hauspire - Interior Design Portfolio",
  description: "Browse Hauspire's portfolio of stunning interior design projects across residential and commercial spaces in Pune.",
};

const projects = [
  { img: "portfolio-1.jpg", name: "Modern Living Room", cat: "first" },
  { img: "portfolio-2.jpg", name: "Elegant Bedroom", cat: "second" },
  { img: "portfolio-3.jpg", name: "Contemporary Kitchen", cat: "third" },
  { img: "portfolio-4.jpg", name: "Luxury Bathroom", cat: "first" },
  { img: "portfolio-5.jpg", name: "Office Interior", cat: "second" },
  { img: "portfolio-6.jpg", name: "Dining Space", cat: "third" },
];

export default function ProjectsPage() {
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
              <h1 className="mb-4 mb-md-0 text-primary text-uppercase">Our Projects</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <Link className="btn btn-outline-primary" href="/">Home</Link>
                <i className="fas fa-angle-double-right text-primary mx-2"></i>
                <a className="btn btn-outline-primary disabled" href="#">Our Projects</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col text-center mb-4">
              <h6 className="text-primary font-weight-normal text-uppercase mb-3">Our Projects</h6>
              <h1 className="mb-4">Some Of Our Awesome Interior Designing Projects</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mb-2">
              <ul className="list-inline mb-4" id="portfolio-flters">
                <li className="btn btn-outline-primary m-1 active" data-filter="*">All</li>
                <li className="btn btn-outline-primary m-1" data-filter=".first">Complete</li>
                <li className="btn btn-outline-primary m-1" data-filter=".second">Running</li>
                <li className="btn btn-outline-primary m-1" data-filter=".third">Upcoming</li>
              </ul>
            </div>
          </div>
          <div className="row mx-1 portfolio-container">
            {projects.map((item, i) => (
              <div key={i} className={`col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item ${item.cat}`}>
                <div className="position-relative overflow-hidden">
                  <div className="portfolio-img d-flex align-items-center justify-content-center">
                    <img className="img-fluid" src={`/img/${item.img}`} alt={item.name} />
                  </div>
                  <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                    <h4 className="text-white mb-4">{item.name}</h4>
                    <div className="d-flex align-items-center justify-content-center">
                      <a className="btn btn-outline-primary m-1" href="#">
                        <i className="fa fa-link"></i>
                      </a>
                      <a className="btn btn-outline-primary m-1" href={`/img/${item.img}`} data-lightbox="portfolio">
                        <i className="fa fa-eye"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
