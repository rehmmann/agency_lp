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
      title: "AI Automation Services",
      description:
        "Transform your business operations with intelligent automation solutions tailored to your needs.",
      benefits: [
        "Streamline repetitive tasks and workflows",
        "Implement intelligent decision-making systems",
        "Enhance customer experience with AI-powered interactions",
        "Reduce operational costs and improve efficiency",
      ],
      icon: <CodeBracketIcon className="w-7 h-7 text-blue-600" />,
    },
    {
      title: "Data Services",
      description:
        "Unlock the power of your data with comprehensive analytics and insights solutions.",
      benefits: [
        "Advanced data analytics and visualization",
        "Predictive modeling and forecasting",
        "Data cleaning and transformation",
        "Real-time monitoring and reporting",
      ],
      icon: <ChartBarIcon className="w-7 h-7 text-blue-600" />,
    },
  ];

  return (
    <section className="pt-4 pb-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-5">Our Services</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Empowering your business with cutting-edge AI automation and data
          services
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
