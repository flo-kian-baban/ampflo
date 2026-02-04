import AccordionItem from "@/components/Accordion";
import BookForm from "@/components/BookForm";
import Pricing from "@/components/Pricing";
import ProcessTimeline from "@/components/ProcessTimeline";
import Section from "@/components/Section";
import VideoEmbed from "@/components/VideoEmbed";
import { ArrowRight, CheckCircle, Lightbulb, Repeat, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Section className="pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="space-y-8 lg:col-span-7">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] text-balance">
              Your Content Engine <span className="text-blue-600">Extension</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed text-balance">
              This isn’t just content — it’s a clarity and consistency engine for dental practices. Strategy, production, and execution — all handled.
            </p>

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

      {/* BE DIFFERENT SECTION */}
      <Section className="bg-slate-50">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Be Different. Stand Out.</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We operate as your dedicated marketing division. A premium, tailored content system designed to help you stand out, not blend in. From planning to production, we capture attention, strengthen credibility, and elevate your presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Clarity",
              desc: "Clear messaging that resonates with your ideal patients."
            },
            {
              icon: Repeat,
              title: "Consistency",
              desc: "Regular, high-quality output that keeps you top of mind."
            },
            {
              icon: ShieldCheck,
              title: "Credibility",
              desc: "Professional production that builds instant trust."
            }
          ].map((card, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center group">
              <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <card.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
              <p className="text-slate-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PORTFOLIO SECTION */}
      <Section id="portfolio">
        {/* Header Content */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Portfolio</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            Real results for <span className="text-orange-500">modern clinics</span>.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            Patients choose providers they trust. See how we help clinics showcase their expertise, culture, and patient stories.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {/* Large Horizontal Video - Spans 2 cols */}
          <div className="md:col-span-2 md:row-span-1 relative">
            <VideoEmbed
              title="Treatment Explainers"
              placeholderText="See Our Production Quality"
              src="https://youtu.be/OO6QZdhJyd0"
              className="h-full min-h-[300px] md:min-h-[400px] shadow-lg"
              isVertical={false}
            />
          </div>

          {/* Vertical Video 1 - Spans 1 col */}
          <div className="md:col-span-1 md:row-span-1 relative">
            <VideoEmbed
              title="Patient Experience"
              placeholderText="Patient Experience"
              src="https://youtube.com/shorts/e3atsxJDIb0"
              isVertical={true}
              className="h-full shadow-lg"
            />
          </div>

          {/* Vertical Video 2 */}
          <div className="md:col-span-1 md:row-span-1 relative flex justify-center">
            <VideoEmbed
              title="Clinic Tour"
              placeholderText="Clinic Tour"
              src="https://youtube.com/shorts/so-eepsOD9A"
              isVertical={true}
              className="h-full shadow-lg"
            />
          </div>

          {/* Vertical Video 3 */}
          <div className="md:col-span-1 md:row-span-1 relative flex justify-center">
            <VideoEmbed
              title="Doctor Introductions"
              placeholderText="Doctor Introductions"
              src="https://youtube.com/shorts/2dRgt44oInA"
              isVertical={true}
              className="h-full shadow-lg"
            />
          </div>

          {/* Call to Action Card in Grid */}
          <div className="md:col-span-1 md:row-span-1 bg-blue-600 rounded-2xl p-8 flex flex-col justify-center items-start text-white shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">See more examples?</h3>
            <p className="text-blue-100 mb-6 relative z-10">Check out our full channel or book a call to see relevant case studies.</p>
            <Link href="#book" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors relative z-10">
              Book Strategy Call
            </Link>
          </div>
        </div>
      </Section>

      {/* WHAT YOU GET (PRICING) SECTION */}
      <Section id="packages" className="bg-slate-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            A consistent drop of premium assets — <span className="text-blue-600">every month</span>.
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

      {/* DETAILED PACKAGES ACCORDION */}
      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900">Detailed Package Breakdowns</h2>
            <p className="text-slate-500">Everything included in each tier.</p>
          </div>

          <AccordionItem title="Launch Package" subtitle="Just Content Creation">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Deliverables</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>4 Short form videos</li>
                  <li>Limited Visual assets</li>
                  <li>Meta Ads Consultation</li>
                  <li>1 Monthly Video Shoot</li>
                </ul>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Who it&apos;s for</h4>
                  <p className="text-sm text-slate-600">Clinics that need high-quality assets to post themselves but lack production capabilities.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Monthly snapshot</h4>
                  <p className="text-sm text-slate-600">We shoot, we edit, you post. A steady stream of 4 high-value videos per month.</p>
                </div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="Hands-Free Package" subtitle="Social Media Management" defaultOpen={true}>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Deliverables</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Social media management</li>
                  <li>8 Short form videos</li>
                  <li>4 Visual assets</li>
                  <li>1 Marketing Campaign</li>
                  <li>Monthly Strategy Call & Stats Report</li>
                  <li>2 Monthly Video Shoots</li>
                </ul>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Who it&apos;s for</h4>
                  <p className="text-sm text-slate-600">Practices that want to delegate the entire social grind. We handle the posting and engagement strategy.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Monthly snapshot</h4>
                  <p className="text-sm text-slate-600">Double the video volume, full management. Your channels stay active without you lifting a finger.</p>
                </div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="Full-House Package" subtitle="Online Presence Management">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Deliverables</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Full online presence management</li>
                  <li>12 Short-form videos</li>
                  <li>Unlimited Visual assets</li>
                  <li>Full campaign content operations</li>
                  <li>LinkedIn setup & consultation</li>
                  <li>YouTube setup & 2 YouTube videos</li>
                  <li>Monthly Strategy Call & Stats Report</li>
                  <li>3 Monthly Video Shoots</li>
                </ul>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Who it&apos;s for</h4>
                  <p className="text-sm text-slate-600">Aggressive growth clinics wanting to dominate their local market across every major platform.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Monthly snapshot</h4>
                  <p className="text-sm text-slate-600">Massive content volume (3 videos/week avg), comprehensive cross-platform strategy.</p>
                </div>
              </div>
            </div>
          </AccordionItem>
        </div>
      </Section>

      {/* FAQ SECTION */}
      <Section id="faq">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { q: "Do you handle posting?", a: "Yes, for the Hands-Free and Full-House packages. For the Launch package, we deliver the ready-to-post assets to you." },
            { q: "How many shoot days are included?", a: "Launch includes 1 shoot day. Hands-Free includes 2. Full-House includes 3. We batch content efficiently to respect your clinic's time." },
            { q: "Can we request edits?", a: "Absolutely. Our process includes a weekend review cycle where you can green-light or request tweaks before content goes live." },
            { q: "Do you run ad campaigns?", a: "We provide consultation on ad strategy and create the creative assets that convert. We don't manage ad spend directly, but we feed your ad manager the winning creatives." },
            { q: "What platforms do you manage?", a: "Primarily Instagram and Facebook (Meta). Full-House adds LinkedIn and YouTube optimization to the mix." },
            { q: "How fast do we start?", a: "After the strategy call, we have a two-week foundation phase to build your content vault. This ensures we're never scrambling and you have a consistent posting schedule from Day 1." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2 text-lg">{item.q}</h4>
              <p className="text-slate-600">{item.a}</p>
            </div>
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
    </>
  );
}
