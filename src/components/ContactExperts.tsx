"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactExperts() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add this to debug
    console.log("Form data:", {
      name: formRef.current?.from_name.value,
      email: formRef.current?.reply_to.value,
      company: formRef.current?.company_name.value,
      message: formRef.current?.message.value,
    });

    try {
      await emailjs.sendForm(
        "service_j353o43",
        "template_wg5tz7p",
        formRef.current!,
        "user_wiUeBluxgHfn8y23Vihwj"
      );
      setSubmitStatus("success");
      formRef.current?.reset();
    } catch (error) {
      setSubmitStatus("error");
      console.error("Email send failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Talk to Our Experts</h2>
          <p className="text-lg text-gray-600">
            Ready to transform your business? Let&apos;s discuss how we can help
            you automate and optimize your processes.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="from_name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="reply_to"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="reply_to"
                id="reply_to"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="company_name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name
            </label>
            <input
              type="text"
              name="company_name"
              id="company_name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your company"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              How can we help?
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tell us about your project or requirements..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 text-lg font-medium"
          >
            {isSubmitting ? "Sending..." : "Get in Touch"}
          </button>

          {submitStatus === "success" && (
            <p className="text-green-600 text-center">
              Thank you! We&apos;ll get back to you soon.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-600 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
