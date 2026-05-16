import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <ContactBar />

      {/* Carousel Start */}
      <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="/img/carousel-1.jpg" alt="Creative Interior Design" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 800 }}>
                  <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">Creative Interior Design</h4>
                  <h3 className="display-3 text-white mb-md-4">Make Your Home Better</h3>
                  <a href="/contact" className="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4">Book Consultation</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="/img/carousel-2.jpg" alt="Stay At Home In Peace" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 800 }}>
                  <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">Creative Interior Design</h4>
                  <h3 className="display-3 text-white mb-md-4">Stay At Home In Peace</h3>
                  <a href="/contact" className="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4">Book Consultation</a>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
            <div className="btn btn-primary" style={{ width: 45, height: 45 }}>
              <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
          </a>
          <a className="carousel-control-next" href="#header-carousel" data-slide="next">
            <div className="btn btn-primary" style={{ width: 45, height: 45 }}>
              <span className="carousel-control-next-icon mb-n2"></span>
            </div>
          </a>
        </div>
      </div>
      {/* Carousel End */}

      {/* About Start */}
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
              <p>At Hauspire, we blend creativity and functionality to craft personalized interior designs tailored to your style and needs. With premium materials, expert craftsmanship, and seamless customization options, we transform spaces into stunning masterpieces.</p>
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
      {/* About End */}

      {/* Services Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 pr-lg-5">
              <h6 className="text-primary font-weight-normal text-uppercase mb-3">Our Awesome Services</h6>
              <h1 className="mb-4 section-title">Awesome Interior Designing Services For Your Home</h1>
              <p>We offer a comprehensive range of interior design services tailored to your unique lifestyle and preferences. From concept to completion, our team of expert designers ensures every detail is perfect.</p>
              <a href="/services" className="btn btn-primary mt-3 py-2 px-4">View More</a>
            </div>
            <div className="col-lg-6 p-0 pt-5 pt-lg-0">
              <div className="owl-carousel service-carousel position-relative">
                <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                  <h3 className="flaticon-bedroom display-3 font-weight-normal text-primary mb-3"></h3>
                  <h5 className="mb-3">Bedroom Design</h5>
                  <p className="m-0">Transform your bedroom into a luxurious sanctuary with our bespoke design solutions.</p>
                </div>
                <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                  <h3 className="flaticon-kitchen display-3 font-weight-normal text-primary mb-3"></h3>
                  <h5 className="mb-3">Kitchen Design</h5>
                  <p className="m-0">Modern, functional kitchens designed to make cooking a pleasure, not a chore.</p>
                </div>
                <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                  <h3 className="flaticon-bathroom display-3 font-weight-normal text-primary mb-3"></h3>
                  <h5 className="mb-3">Bathroom Design</h5>
                  <p className="m-0">Create your own spa-like retreat with our elegant bathroom design concepts.</p>
                </div>
                <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                  <h3 className="flaticon-living-room display-3 font-weight-normal text-primary mb-3"></h3>
                  <h5 className="mb-3">Living Room</h5>
                  <p className="m-0">Curated living spaces that perfectly balance comfort and sophistication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Features Start */}
      <div className="container-fluid bg-light">
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
                <li><h5><i className="far fa-check-square text-primary mr-3"></i>100+ Awards Won</h5></li>
                <li><h5><i className="far fa-check-square text-primary mr-3"></i>300+ Happy Clients</h5></li>
              </ul>
              <a href="/about" className="btn btn-primary mt-3 py-2 px-4">View More</a>
            </div>
            <div className="col-lg-5">
              <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                <img className="h-100" src="/img/feature.jpg" alt="Why Choose Hauspire" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}

      {/* Projects Start */}
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
            {[
              { img: "portfolio-1.jpg", cat: "first" },
              { img: "portfolio-2.jpg", cat: "second" },
              { img: "portfolio-3.jpg", cat: "third" },
              { img: "portfolio-4.jpg", cat: "first" },
              { img: "portfolio-5.jpg", cat: "second" },
              { img: "portfolio-6.jpg", cat: "third" },
            ].map((item, i) => (
              <div key={i} className={`col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item ${item.cat}`}>
                <div className="position-relative overflow-hidden">
                  <div className="portfolio-img d-flex align-items-center justify-content-center">
                    <img className="img-fluid" src={`/img/${item.img}`} alt={`Project ${i + 1}`} />
                  </div>
                  <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                    <h4 className="text-white mb-4">Project Name</h4>
                    <div className="d-flex align-items-center justify-content-center">
                      <a className="btn btn-outline-primary m-1" href="/projects">
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
      {/* Projects End */}

      {/* Team Start */}
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
                      <img className="img-fluid w-100" src={`/img/team-${n}.jpg`} alt={`Team member ${n}`} />
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
      {/* Team End */}

      {/* Testimonial Start */}
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-7 py-5 pr-md-5">
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
                  <p>The design by Hauspire exceeded my expectations. They brought innovative ideas and quality workmanship that made all the difference. My home is now exactly what I envisioned!</p>
                </div>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <img className="img-fluid rounded-circle" src="/img/testimonial-2.jpg" style={{ width: 60, height: 60 }} alt="Client" />
                    <div className="ml-3">
                      <h5>Sneha Sharma</h5>
                      <i>Business Owner</i>
                    </div>
                  </div>
                  <p className="m-0">Hauspire transformed my living room into a modern yet cozy space. Their attention to detail is impeccable. Highly recommend their services to anyone looking for a premium design experience!</p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                <img className="h-100" src="/img/testimonial.jpg" alt="Testimonials" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      {/* Blog Start */}
      <div className="container-fluid bg-light pt-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col text-center mb-4">
              <h6 className="text-primary font-weight-normal text-uppercase mb-3">Our Blog</h6>
              <h1 className="mb-4">Read The Latest News &amp; Articles From Our Blog</h1>
            </div>
          </div>
          <div className="row pb-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="col-md-4 mb-4">
                <div className="card border-0 mb-2">
                  <img className="card-img-top" src={`/img/blog-${n}.jpg`} alt={`Blog ${n}`} />
                  <div className="card-body bg-white p-4">
                    <div className="d-flex align-items-center mb-3">
                      <a className="btn btn-primary" href="/blog"><i className="fa fa-link"></i></a>
                      <h5 className="m-0 ml-3 text-truncate">Interior Design Tips {n}</h5>
                    </div>
                    <p>Discover the latest trends and expert tips in interior design to transform your living spaces into beautiful, functional environments.</p>
                    <div className="d-flex">
                      <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                      <small className="mr-3"><i className="fa fa-folder text-primary"></i> Interior</small>
                      <small className="mr-3"><i className="fa fa-comments text-primary"></i> 12</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Blog End */}

      <Footer />
    </>
  );
}
