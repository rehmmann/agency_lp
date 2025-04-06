"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function BookCall() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">
              Book a Discovery Call
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Choose a time that works best for you to discuss how we can{" "}
              <span className="text-blue-600">
                transform your business with AI
              </span>
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <style jsx global>{`
              .tidycal-embed {
                --tc-primary-color: #2563eb;
                --tc-font-family: inherit;
              }
              .tidycal-embed .calendar-wrapper {
                display: grid;
                grid-template-columns: minmax(auto, 600px) minmax(300px, 1fr);
                gap: 2rem;
                align-items: start;
              }
              .tidycal-embed button {
                background-color: #2563eb !important;
                border-color: #2563eb !important;
              }
              .tidycal-embed button:hover {
                background-color: #1d4ed8 !important;
                border-color: #1d4ed8 !important;
              }
              .tidycal-embed .selected-date {
                color: #2563eb !important;
                border-color: #2563eb !important;
              }
              @media (max-width: 1024px) {
                .tidycal-embed .calendar-wrapper {
                  grid-template-columns: 1fr;
                }
              }
            `}</style>

            <div
              className="tidycal-embed"
              data-path="team/robustflow/discovery-call"
            ></div>
            <Script src="https://asset-tidycal.b-cdn.net/js/embed.js" async />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
