import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hauspire - Premium Interior Design & Architecture",
  description: "Hauspire is a leading interior design firm offering creative, high-quality interior designing services for residential and commercial spaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        />
        {/* Flaticon */}
        <link rel="stylesheet" href="/lib/flaticon/font/flaticon.css" />
        {/* Owl Carousel CSS */}
        <link rel="stylesheet" href="/lib/owlcarousel/assets/owl.carousel.min.css" />
        {/* Lightbox CSS */}
        <link rel="stylesheet" href="/lib/lightbox/css/lightbox.min.css" />
        {/* Template CSS */}
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        {children}

        {/* jQuery */}
        <Script
          src="https://code.jquery.com/jquery-3.4.1.min.js"
          strategy="beforeInteractive"
        />
        {/* Bootstrap */}
        <Script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        {/* Easing */}
        <Script src="/lib/easing/easing.min.js" strategy="afterInteractive" />
        {/* Owl Carousel */}
        <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="afterInteractive" />
        {/* Isotope */}
        <Script src="/lib/isotope/isotope.pkgd.min.js" strategy="afterInteractive" />
        {/* Lightbox */}
        <Script src="/lib/lightbox/js/lightbox.min.js" strategy="afterInteractive" />
        {/* Contact Scripts */}
        <Script src="/mail/jqBootstrapValidation.min.js" strategy="afterInteractive" />
        <Script src="/mail/contact.js" strategy="afterInteractive" />
        {/* Main Template JS */}
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
