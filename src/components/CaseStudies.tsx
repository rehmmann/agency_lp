import React from "react";
import Link from "next/link";
import Image from "next/image";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Marketing Budgets Automation",
      client: "Boutique Marketing Agency",
      challenge:
        "Manual, time-consuming process of managing client budgets across multiple spreadsheets, leading to sync issues and inefficiencies.",
      slug: "marketing-budgets-automation",
      image: "/marketing-budget-case.jpg",
      results: ["Saved 10+ hours per week", "Eliminated manual sync errors"],
    },
    {
      title: "Streamlining Marketing Funnel",
      client: "Legal Services Consulting Business",
      challenge:
        "Complex manual process for managing Master Class webinars and lead generation, limiting growth potential.",
      slug: "marketing-funnel-optimization",
      image: "/marketing-funnel-case.jpg",
      results: ["Improved efficiency", "Enhanced lead tracking"],
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Case Studies</h2>
          <p className="mt-4 text-xl text-gray-600">
            Real results for real businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Link
              href={`/casestudies?case=${
                study.slug === "marketing-budgets-automation"
                  ? "marketing-budgets"
                  : "marketing-funnel"
              }`}
              key={index}
              className="group transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-[500px] rounded-2xl shadow-lg overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Adjusted gradient to be more concentrated at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                </div>

                {/* Content - adjusted padding at bottom */}
                <div className="relative h-full px-8 pb-12 pt-48 flex flex-col justify-end text-white">
                  <div>
                    <h3 className="text-2xl font-bold text-white transition-colors">
                      {study.title}
                    </h3>
                    <p className="mt-4 text-gray-200 line-clamp-3">
                      {study.challenge}
                    </p>

                    <div className="mt-6">
                      <h4 className="font-semibold text-white">Key Results:</h4>
                      <ul className="mt-2 space-y-2">
                        {study.results.map((result, i) => (
                          <li
                            key={i}
                            className="text-gray-200 flex items-start"
                          >
                            <span className="text-green-400 mr-2">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Keep Read full case study color the same */}
                  <div className="mt-6 flex justify-end">
                    <span className="text-white font-semibold flex items-center">
                      Read full case study
                      <svg
                        className="w-5 h-5 ml-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
