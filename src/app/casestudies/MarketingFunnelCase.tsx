import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MarketingFunnelCase() {
  return (
    <>
      <Navbar />
      <article className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src="/marketing-funnel-case.jpg"
            alt="Marketing Funnel Optimization"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
          <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Streamlining Marketing Funnel
            </h1>
            <p className="text-xl text-white/90 font-light">
              Client: Legal Services Consulting Business
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Challenge Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Complex manual process for managing Master Class webinars and
                lead generation, limiting growth potential.
              </p>
            </section>

            {/* Solution Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Solution
              </h2>
              <ul className="space-y-4">
                {[
                  "Holistic process evaluation",
                  "Strategic and tactical partnership",
                  "Streamlined event management workflow",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-lg text-gray-700"
                  >
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-4 mt-1">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Results Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Results</h2>
              <ul className="space-y-4">
                {[
                  "Improved webinar management efficiency",
                  "Enhanced lead tracking capabilities",
                  "Scalable event management system",
                ].map((result, index) => (
                  <li
                    key={index}
                    className="flex items-center text-lg text-gray-700"
                  >
                    <span className="text-green-500 mr-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {result}
                  </li>
                ))}
              </ul>
            </section>

            {/* Full Story Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Full Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our client, a legal services consulting business, uses
                  &ldquo;Master Class&rdquo; webinars as their primary channel
                  for generating new business. But as they grew and wanted to do
                  more of these, managing the events and the leads from them was
                  becoming painful.
                </p>
                <p>
                  They would create invitations, send out to their contacts via
                  email, and keep track of the registrations, but this took
                  immense manual effort, and there just had to be a better way.
                </p>
              </div>
            </section>
          </div>

          {/* Back Link */}
          <div className="mt-16 border-t pt-8">
            <Link
              href="/#case-studies"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Case Studies
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
