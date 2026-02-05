
import AccordionItem from "@/components/Accordion";
import BookForm from "@/components/BookForm";
import Pricing from "@/components/Pricing";
import ProcessTimeline from "@/components/ProcessTimeline";
import Section from "@/components/Section";
import StickyCTA from "@/components/StickyCTA";
import VideoEmbed from "@/components/VideoEmbed";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Section className="pt-8 md:pt-24 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="space-y-8 lg:col-span-7">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] text-balance">
              Your Content Engine <span className="text-blue-600">Extension</span>
            </h1>
            This isn’t just content; it’s a clarity and consistency engine for dental practices. Strategy, production, and execution, all handled.

            <ul className="space-y-4">
              {[
                "Premium assets designed to perform",
                "Crafted to hook and convert",
                "Built to strengthen credibility and elevate your presence"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="p-1 rounded-full bg-orange-100 text-orange-600">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#book"
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-blue-700 transition-colors shadow-xl shadow-blue-500/20 active:scale-95 flex items-center gap-2"
              >
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#packages"
                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-base font-bold hover:bg-slate-50 transition-colors active:scale-95"
              >
                View Packages
              </Link>
            </div>
          </div>

          {/* Hero Video */}
          <div className="relative lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px]">
              {/* Phone Frame border effect */}
              <div className="absolute -inset-[3px] bg-slate-900 rounded-[1.2rem] opacity-10"></div>
              <VideoEmbed
                title="Hero Video Introduction"
                placeholderText="Play Introduction"
                className="shadow-2xl shadow-blue-900/20 border-4 border-white"
                isVertical={true}
                src="https://www.youtube.com/shorts/C3wafPMYbks"
              />
              {/* Decorative blob behind */}
              <div className="absolute -inset-12 bg-gradient-to-tr from-blue-100 to-orange-100 rounded-full -z-10 opacity-60 blur-3xl"></div>


            </div>
          </div>
        </div>
      </Section>



      {/* PORTFOLIO SECTION */}
      <Section id="portfolio">
        {/* Header Content */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Portfolio</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            Real results for <span className="text-orange-500">modern clinics</span>.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            Patients choose providers they trust. See how we help clinics showcase their expertise, culture, and patient stories.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="space-y-8">
          {/* Row 1: 4 Vertical Videos */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {/* Vertical Video 1 */}
            <div className="relative flex justify-center">
              <VideoEmbed
                title="Patient Experience"
                placeholderText="Patient Experience"
                src="https://youtube.com/shorts/a19bVpu7hjE"
                isVertical={true}
                className="shadow-lg"
              />
            </div>

            {/* Vertical Video 2 */}
            <div className="relative flex justify-center">
              <VideoEmbed
                title="Clinic Tour"
                placeholderText="Clinic Tour"
                src="https://youtube.com/shorts/so-eepsOD9A"
                isVertical={true}
                className="shadow-lg"
              />
            </div>

            {/* Vertical Video 3 */}
            <div className="relative flex justify-center">
              <VideoEmbed
                title="Doctor Introductions"
                placeholderText="Doctor Introductions"
                src="https://youtube.com/shorts/2dRgt44oInA"
                isVertical={true}
                className="shadow-lg"
              />
            </div>

            {/* Vertical Video 4 */}
            <div className="relative flex justify-center">
              <VideoEmbed
                title="Educational Content"
                placeholderText="Educational Content"
                src="https://youtube.com/shorts/e3atsxJDIb0"
                isVertical={true}
                className="shadow-lg"
              />
            </div>
          </div>

          {/* Row 2: Large Horizontal Video */}
          <div className="relative w-full">
            <VideoEmbed
              title="Treatment Explainers"
              placeholderText="See Our Production Quality"
              src="https://youtu.be/OO6QZdhJyd0"
              className="w-full shadow-lg rounded-2xl"
              isVertical={false}
            />
          </div>
        </div>
      </Section>

      {/* WHAT YOU GET (PRICING) SECTION */}
      <Section id="packages" className="bg-slate-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            A consistent drop of premium assets, <span className="text-blue-600">every month</span>.
          </h2>
          <p className="text-lg text-slate-600">Choose the tier that fits your growth goals.</p>
        </div>

        <Pricing />
      </Section>

      {/* PROCESS SECTION */}
      <Section id="process">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">The Workflow</span>
          <h2 className="text-4xl font-extrabold text-slate-900">Simple system. Predictable delivery.</h2>
        </div>
        <ProcessTimeline />
      </Section>



      {/* FAQ SECTION */}
      <Section id="faq">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {[
            { q: "Do you handle posting?", a: "Yes, for the Hands-Free and Full-House packages. For the Launch package, we deliver the ready-to-post assets to you." },
            { q: "How many shoot days are included?", a: "Launch includes 1 shoot day. Hands-Free includes 2. Full-House includes 3. We batch content efficiently to respect your clinic's time." },
            { q: "Can we request edits?", a: "Absolutely. Our process includes a weekend review cycle where you can green-light or request tweaks before content goes live." },
            { q: "Do you run ad campaigns?", a: "We provide consultation on ad strategy and create the creative assets that convert. We don't manage ad spend directly, but we feed your ad manager the winning creatives." },
            { q: "What platforms do you manage?", a: "Primarily Instagram and Facebook (Meta). Full-House adds LinkedIn and YouTube optimization to the mix." },
            { q: "How fast do we start?", a: "After the strategy call, we have a two-week foundation phase to build your content vault. This ensures we're never scrambling and you have a consistent posting schedule from Day 1." },
          ].map((item, i) => (
            <AccordionItem key={i} title={item.q}>
              <p className="text-slate-600 leading-relaxed">{item.a}</p>
            </AccordionItem>
          ))}
        </div>
      </Section>

      {/* BOOK SECTION */}
      <Section id="book" className="bg-blue-900 text-white pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Ready to build your <span className="text-orange-400">content engine</span>?
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Let&apos;s deep dive into your brand, audience, and goals. We&apos;ll align on the perfect package and map out a content system that works for your clinic, not against it.
            </p>
            <div className="flex flex-col gap-4 text-blue-200">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-400" />
                <span>No hard selling. Just strategy.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-400" />
                <span>Clear pricing & deliverables.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-400" />
                <span>Full roadmap provided on the call.</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl text-slate-900">
            <h3 className="text-2xl font-bold mb-6">Book a Strategy Call</h3>
            <BookForm />
          </div>
        </div>
      </Section>

      <StickyCTA />
    </>
  );
}
