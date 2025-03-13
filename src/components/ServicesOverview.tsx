import { CodeBracketIcon, ChartBarIcon } from "@heroicons/react/24/outline";

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
}

const ServiceCard = ({
  title,
  description,
  benefits,
  icon,
}: ServiceCardProps) => {
  return (
    <div className="p-7 lg:p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-all">
      <div className="flex items-center gap-4 mb-5">
        <div className="p-2.5 rounded-lg bg-blue-50">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-base lg:text-lg text-gray-600 mb-5">{description}</p>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="text-blue-500 text-lg">•</span>
            <span className="text-gray-700 text-base lg:text-lg">
              {benefit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function ServicesOverview() {
  const services = [
    {
      title: "AI Automation",
      description:
        "Slow, manual processes could be costing you time and money. We can help you by:",
      benefits: [
        " Prioritizing your most repetitive, expensive or painful processes and automating them",
        "Building intelligent automations that free you up to focus on more important things",
        "Implementing secure, custom AI solutions that help you scale and move faster",
      ],
      icon: <CodeBracketIcon className="w-7 h-7 text-blue-600" />,
    },
    {
      title: "Data Integration",
      description:
        "Even if your data is messy and scattered, we'll help you bring it all into one place. Then we:",
      benefits: [
        " Combine business context and data analysis to generate deep insights from your data ",
        "Set up reports, dashboards and visualizations that YOUR business needs",
        "Automate tedious, repetitive and error-prone reporting processes",
      ],
      icon: <ChartBarIcon className="w-7 h-7 text-blue-600" />,
    },
  ];

  return (
    <section className="pt-4 pb-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-5">Our Services</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
