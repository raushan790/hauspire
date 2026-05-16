import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Blog | Hauspire - Interior Design Tips & Ideas",
  description: "Read the latest interior design tips, trends, and ideas from Hauspire's expert design team.",
};

const posts = [
  {
    img: "blog-1.jpg",
    title: "10 Tips For A Modern Living Room",
    excerpt: "Discover how to transform your living room with these modern interior design tips that balance style and comfort seamlessly.",
    category: "Interior Design",
    comments: 12,
  },
  {
    img: "blog-2.jpg",
    title: "Kitchen Design Trends For 2025",
    excerpt: "Stay ahead of the curve with the hottest kitchen design trends of 2025 — from smart storage to bold color palettes.",
    category: "Kitchen",
    comments: 8,
  },
  {
    img: "blog-3.jpg",
    title: "Creating A Luxurious Bedroom Retreat",
    excerpt: "Turn your bedroom into a personal sanctuary with these expert tips on lighting, textures, and furniture placement.",
    category: "Bedroom",
    comments: 15,
  },
  {
    img: "blog-2.jpg",
    title: "Small Space, Big Style: Studio Design Ideas",
    excerpt: "Maximizing space without compromising on style — smart solutions for compact homes and apartments.",
    category: "Small Spaces",
    comments: 6,
  },
  {
    img: "blog-3.jpg",
    title: "Choosing The Right Color Palette For Your Home",
    excerpt: "Color can make or break an interior. Learn how to select the perfect palette that reflects your personality.",
    category: "Color Theory",
    comments: 10,
  },
  {
    img: "blog-1.jpg",
    title: "Sustainable Interior Design: Eco-Friendly Ideas",
    excerpt: "Going green has never looked so good. Explore sustainable materials and eco-conscious design choices for modern homes.",
    category: "Sustainability",
    comments: 9,
  },
];

export default function BlogPage() {
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
              <h1 className="mb-4 mb-md-0 text-primary text-uppercase">Our Blog</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <Link className="btn btn-outline-primary" href="/">Home</Link>
                <i className="fas fa-angle-double-right text-primary mx-2"></i>
                <a className="btn btn-outline-primary disabled" href="#">Our Blog</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container-fluid bg-light pt-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col text-center mb-4">
              <h6 className="text-primary font-weight-normal text-uppercase mb-3">Our Blog</h6>
              <h1 className="mb-4">Read The Latest News &amp; Articles From Our Blog</h1>
            </div>
          </div>
          <div className="row pb-3">
            {posts.map((post, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div className="card border-0 mb-2">
                  <img className="card-img-top" src={`/img/${post.img}`} alt={post.title} />
                  <div className="card-body bg-white p-4">
                    <div className="d-flex align-items-center mb-3">
                      <a className="btn btn-primary" href="#"><i className="fa fa-link"></i></a>
                      <h5 className="m-0 ml-3 text-truncate">{post.title}</h5>
                    </div>
                    <p>{post.excerpt}</p>
                    <div className="d-flex">
                      <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                      <small className="mr-3"><i className="fa fa-folder text-primary"></i> {post.category}</small>
                      <small className="mr-3"><i className="fa fa-comments text-primary"></i> {post.comments}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="col-md-12 mb-4">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center mb-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
