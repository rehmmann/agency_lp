import ServicesOverview from "@/components/ServicesOverview";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactExperts from "@/components/ContactExperts";
import FAQ from "@/components/FAQ";
import CaseStudies from "@/components/CaseStudies";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold tracking-tight">
              <span className="block text-gray-900">
                Transform Your Business with
              </span>
              <span className="block text-blue-600 mt-4">
                AI Automations & Data Solutions
              </span>
            </h1>
            <p className="mt-8 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              We help businesses by organizing and making sense of their data,
              automating manual processes, and building custom AI solutions that
              drive impact and results.
            </p>
            <div className="mt-14 flex gap-6 justify-center lg:justify-start">
              <a
                href="/book"
                className="rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-500 transition-colors"
              >
                Book a Call
              </a>
              <a
                href="#services"
                className="rounded-full border-2 border-gray-300 px-8 py-4 text-base font-semibold text-gray-700 shadow-lg hover:bg-gray-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div id="services">
          <ServicesOverview />
        </div>

        <CaseStudies />

        <FAQ />

        {/* Add the contact section with an id that matches the href in your "Get Started" button */}
        <div id="contact">
          <ContactExperts />
        </div>
      </main>
      <Footer />
    </>
  );
}
