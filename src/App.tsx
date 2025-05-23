import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [email, setEmail] = useState("");
  const [footerEmail, setFooterEmail] = useState("");
  const [showTerms, setShowTerms] = useState(false);
  const [showContact, setShowContact] = useState(false);
  // Header scroll state
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("You will be notified when we launch!");
      setEmail("");
    }
  };
  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (footerEmail) {
      toast.success("You have joined our newsletter!");
      setFooterEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFFED] flex flex-col">
      <Toaster position="top-center" />
      {/* Navigation */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showHeader ? 0 : -100 }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
        style={{ willChange: "transform" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://raw.githubusercontent.com/GIGZs-Marketplace/brand-images/1684edf3da61c756551e28a9bdfb157c9243bfa2/gigzs-logo.svg"
              alt="Logo"
              className="w-10 h-10 sm:w-14 sm:h-14"
            />
            <span className="font-onset text-xl font-bold text-primary hidden sm:inline"></span>
          </motion.div>
          <div className="flex items-center gap-6">
            <ul className="flex gap-6 font-medium text-gray-700 text-base">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary transition-colors"
                >
                  Homepage
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#clients"
                  className="hover:text-primary transition-colors"
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="#freelancers"
                  className="hover:text-primary transition-colors"
                >
                  Freelancers
                </a>
              </li>
            </ul>
            <div className="flex gap-3 items-center bg-gray-100 border border-gray-200 rounded-full px-4 py-2 shadow-sm">
              <a
                href="#login"
                className="text-primary font-semibold hover:underline transition-colors"
              >
                Login
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="#signup"
                className="text-white bg-primary hover:bg-primary-light font-semibold px-4 py-1 rounded-full transition-colors"
              >
                Signup
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <main
        id="home"
        className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center relative bg-[#FCFFED]"
      >
        <GravityShapesHero />
        <div className="max-w-3xl w-full py-32 sm:py-40 flex flex-col items-center justify-center relative z-10">
          <motion.h1
            className="font-onset text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-6 text-center leading-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Freelancing Tailored to You
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 mb-8 text-center max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Discover a curated platform connecting exceptional talent with
            visionary projects. Minimal, modern, and made for you.
          </motion.p>
          <motion.div
            className="flex gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button className="px-8 py-3 rounded-full bg-primary text-white font-bold shadow hover:bg-primary-light transition-all text-lg">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-full border border-primary text-primary font-bold bg-white shadow hover:bg-primary/10 transition-all text-lg">
              Learn More
            </button>
          </motion.div>
        </div>
      </main>

      {/* Our Services Sliding Gallery Section */}
      <section className="py-20 bg-[#FCFFED] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-onset text-4xl sm:text-5xl font-extrabold text-center mb-10 text-primary">
            Our Services
          </h2>
        </div>
        <div className="w-full relative">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: [0, "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          >
            {/* Repeat the cards twice for seamless looping */}
            {Array(2)
              .fill(null)
              .flatMap((_, idx) => [
                ...[
                  {
                    icon: "💻",
                    title: "Technical",
                    desc: "Web, Mobile, Backend, Cloud, and more",
                  },
                  {
                    icon: "🎨",
                    title: "Graphic Design",
                    desc: "Branding, Illustration, Social Media, etc.",
                  },
                  {
                    icon: "🎬",
                    title: "Video Editing",
                    desc: "YouTube, Ads, Reels, Animation, etc.",
                  },
                  {
                    icon: "🖌️",
                    title: "UI/UX",
                    desc: "Web, App, Product, Prototyping, etc.",
                  },
                  {
                    icon: "📝",
                    title: "Content Writing",
                    desc: "Blogs, Copywriting, SEO, and more",
                  },
                  {
                    icon: "📈",
                    title: "Marketing",
                    desc: "Digital, Social Media, Growth, and more",
                  },
                  {
                    icon: "🔧",
                    title: "DevOps",
                    desc: "CI/CD, Cloud, Automation, and more",
                  },
                  {
                    icon: "🔒",
                    title: "Cybersecurity",
                    desc: "Audits, Pen Testing, Compliance, and more",
                  },
                ].map((service, i) => (
                  <div
                    key={idx + "-" + i}
                    className="flex-shrink-0 w-72 h-44 rounded-2xl shadow-lg bg-white flex flex-col items-center justify-center p-6 border border-primary/10"
                  >
                    <span className="text-4xl mb-3">{service.icon}</span>
                    <div className="font-bold text-xl text-primary mb-1">
                      {service.title}
                    </div>
                    <div className="text-gray-600 text-center text-base">
                      {service.desc}
                    </div>
                  </div>
                )),
              ])}
          </motion.div>
        </div>
      </section>

      {/* Comparative Section: Frustrations vs. Our Solutions */}
      <section className="py-24 bg-[#FCFFED] border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-onset text-3xl sm:text-4xl font-bold mb-10 text-primary text-center">
            Solving Real Problems for Freelancers & Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Frustrations */}
            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col justify-center shadow-sm border border-gray-100">
              <h3 className="font-onset text-2xl font-bold text-primary mb-6">
                Freelancer's Frustration
              </h3>
              <ul className="mb-10 space-y-6">
                <li className="text-lg text-gray-800 border-l-4 border-primary pl-4 italic">
                  "The platform took 20% of my payment, and I still had to wait
                  10 days to get it."
                </li>
                <li className="text-lg text-gray-800 border-l-4 border-primary pl-4 italic">
                  "I send 20+ proposals and don't even get replies."
                </li>
                <li className="text-lg text-gray-800 border-l-4 border-primary pl-4 italic">
                  "I can't compete with people charging $5/hour even though I'm
                  highly skilled."
                </li>
              </ul>
              <h3 className="font-onset text-2xl font-bold text-primary mb-6">
                Client's Frustration
              </h3>
              <ul className="space-y-6">
                <li className="text-lg text-gray-800 border-l-4 border-primary pl-4 italic">
                  "I hired someone who looked great on paper, but the work was
                  terrible."
                </li>
                <li className="text-lg text-gray-800 border-l-4 border-primary pl-4 italic">
                  "It took me weeks to find a decent freelancer, and even then
                  they missed the deadline."
                </li>
                <li className="text-lg text-gray-800 border-l-4 border-primary pl-4 italic">
                  "I want reliable professionals, not a lottery."
                </li>
              </ul>
            </div>
            {/* Solutions */}
            <div className="bg-primary/10 rounded-2xl p-8 flex flex-col justify-center shadow-sm border border-primary/20">
              <h3 className="font-onset text-2xl font-bold text-primary mb-6">
                How gigzs Solves This
              </h3>
              <ul className="space-y-8">
                <li className="flex flex-col items-start gap-2">
                  <div className="font-semibold text-lg text-primary">
                    Verified Clients and Freelancers
                  </div>
                  <div className="text-gray-800">
                    Exclusive platform for skilled, verified users. Top 10
                    matchmaking ensures quality connections.
                  </div>
                </li>
                <li className="flex flex-col items-start gap-2">
                  <div className="font-semibold text-lg text-primary">
                    Hybrid Freelanding Marketplace
                  </div>
                  <div className="text-gray-800">
                    Small organizations can form dedicated virtual teams for
                    seamless collaboration.
                  </div>
                </li>
                <li className="flex flex-col items-start gap-2">
                  <div className="font-semibold text-lg text-primary">
                    Safe Payments with Smart Contracts
                  </div>
                  <div className="text-gray-800">
                    Escrow-based system with auto-release on milestone
                    completion. No more payment delays or disputes.
                  </div>
                </li>
                <li className="flex flex-col items-start gap-2">
                  <div className="font-semibold text-lg text-primary">
                    Built-in SaaS Tools
                  </div>
                  <div className="text-gray-800">
                    Integrated tools and AI agents streamline freelancing and
                    project management.
                  </div>
                </li>
                <li className="flex flex-col items-start gap-2">
                  <div className="font-semibold text-lg text-primary">
                    AI-Driven Marketplace
                  </div>
                  <div className="text-gray-800">
                    AI supervises matchmaking, gig management, and payment
                    transfer for reliability.
                  </div>
                </li>
                <li className="flex flex-col items-start gap-2">
                  <div className="font-semibold text-lg text-primary">
                    Smart Pricing at Affordable Rate
                  </div>
                  <div className="text-gray-800">
                    AI-powered pricing suggestions reduce disputes and keep
                    transaction fees flexible and fair.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section (Side by Side, Minimal, Custom Image) */}
      <section
        className="py-28 rounded-3xl relative overflow-hidden"
        style={{ background: "#00704a" }}
      >
        {/* Gradient overlay for visual interest */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.04) 100%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
            {/* Left: Questions and Answers */}
            <div className="flex-1 flex flex-col gap-10">
              <div className="my-4">
                <h2 className="font-onset text-2xl sm:text-4xl font-extrabold mb-4 text-white">
                  Why we are different?
                </h2>
                <p className="font-onset text-base sm:text-xl text-white max-w-xl">
                  We focus on quality, transparency, and a curated experience
                  for both clients and freelancers. Our platform is designed to
                  foster trust, innovation, and long-term partnerships, setting
                  us apart from generic freelance marketplaces.
                </p>
              </div>
              <div className="my-4">
                <h2 className="font-onset text-2xl sm:text-4xl font-extrabold mb-4 text-white">
                  What is gigzs?
                </h2>
                <p className="font-onset text-base sm:text-xl text-white max-w-xl">
                  Gigzs is a next-generation freelance platform connecting
                  exceptional talent with visionary projects. We empower
                  professionals and businesses to collaborate seamlessly and
                  achieve outstanding results.
                </p>
              </div>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src="/10.jpg"
                alt="About Us"
                className="w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-gray-100 bg-[#f7f7f7] mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Newsletter/Waitlist */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-primary">
              Join our Newsletter
            </h3>
            <form onSubmit={handleFooterSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                className="px-4 py-3 rounded-full border border-gray-200 focus:border-primary outline-none text-gray-800 shadow-sm text-base bg-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 text-white font-medium rounded-full bg-primary hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-primary">Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setShowTerms(true)}
                  className="text-gray-700 hover:text-primary transition-colors focus:outline-none"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setShowContact(true)}
                  className="text-gray-700 hover:text-primary transition-colors focus:outline-none"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          {/* Location */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-primary">Location</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              House no 108 Pachkedhi Gandli Pachkhedi Kuhi,
              <br />
              Nagpur, Maharashtra, PIN: 441210
            </p>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-primary">Contact</h3>
            <p className="text-gray-700 text-base mb-1 leading-relaxed">
              +91 7038725831
            </p>
            <a href="mailto:info@gigzs.com" className="text-primary underline">
              info@gigzs.com
            </a>
          </div>
        </div>
        <div className="w-full text-center py-6 bg-[#f7f7f7] border-t border-gray-200">
          <p className="text-sm sm:text-base text-gray-600 tracking-wide">
            © 2025 TRONOCITY LABS. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Terms and Conditions Modal */}
      <AnimatePresence>
        {showTerms && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTerms(false)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8 relative overflow-y-auto max-h-[80vh]"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-primary text-2xl font-bold focus:outline-none"
                onClick={() => setShowTerms(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Terms and Conditions
              </h2>
              <div className="text-gray-700 space-y-4 text-base sm:text-lg max-h-[60vh] overflow-y-auto pr-2">
                <p>
                  By using our website and availing the Services, you agree that
                  you have read and accepted these Terms (including the Privacy
                  Policy). We reserve the right to modify these Terms at any
                  time and without assigning any reason. It is your
                  responsibility to periodically review these Terms to stay
                  informed of updates.
                </p>
                <p>
                  The use of this website or availing of our Services is subject
                  to the following terms of use:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    To access and use the Services, you agree to provide true,
                    accurate and complete information to us during and after
                    registration, and you shall be responsible for all acts done
                    through the use of your registered account.
                  </li>
                  <li>
                    Neither we nor any third parties provide any warranty or
                    guarantee as to the accuracy, timeliness, performance,
                    completeness or suitability of the information and materials
                    offered on this website or through the Services, for any
                    specific purpose. You acknowledge that such information and
                    materials may contain inaccuracies or errors and we
                    expressly exclude liability for any such inaccuracies or
                    errors to the fullest extent permitted by law.
                  </li>
                  <li>
                    Your use of our Services and the website is solely at your
                    own risk and discretion. You are required to independently
                    assess and ensure that the Services meet your requirements.
                  </li>
                  <li>
                    The contents of the Website and the Services are proprietary
                    to Us and you will not have any authority to claim any
                    intellectual property rights, title, or interest in its
                    contents.
                  </li>
                  <li>
                    You acknowledge that unauthorized use of the Website or the
                    Services may lead to action against you as per these Terms
                    or applicable laws.
                  </li>
                  <li>
                    You agree to pay us the charges associated with availing the
                    Services.
                  </li>
                  <li>
                    You agree not to use the website and/ or Services for any
                    purpose that is unlawful, illegal or forbidden by these
                    Terms, or Indian or local laws that might apply to you.
                  </li>
                  <li>
                    You agree and acknowledge that website and the Services may
                    contain links to other third party websites. On accessing
                    these links, you will be governed by the terms of use,
                    privacy policy and such other policies of such third party
                    websites.
                  </li>
                  <li>
                    You understand that upon initiating a transaction for
                    availing the Services you are entering into a legally
                    binding and enforceable contract with the us for the
                    Services.
                  </li>
                  <li>
                    You shall be entitled to claim a refund of the payment made
                    by you in case we are not able to provide the Service. The
                    timelines for such return and refund will be according to
                    the specific Service you have availed or within the time
                    period provided in our policies (as applicable). In case you
                    do not raise a refund claim within the stipulated time, than
                    this would make you ineligible for a refund.
                  </li>
                  <li>
                    Notwithstanding anything contained in these Terms, the
                    parties shall not be liable for any failure to perform an
                    obligation under these Terms if performance is prevented or
                    delayed by a force majeure event.
                  </li>
                  <li>
                    These Terms and any dispute or claim relating to it, or its
                    enforceability, shall be governed by and construed in
                    accordance with the laws of India.
                  </li>
                  <li>
                    All disputes arising out of or in connection with these
                    Terms shall be subject to the exclusive jurisdiction of the
                    courts in Nagpur, Maharashtra
                  </li>
                  <li>
                    All concerns or communications relating to these Terms must
                    be communicated to us using the contact information provided
                    on this website.
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Us Modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContact(false)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8 relative overflow-y-auto max-h-[80vh]"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-primary text-2xl font-bold focus:outline-none"
                onClick={() => setShowContact(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Contact Us
              </h2>
              <div className="text-gray-700 space-y-4 text-base sm:text-lg max-h-[60vh] overflow-y-auto pr-2">
                <p>
                  <span className="font-semibold">
                    Merchant Legal entity name:
                  </span>{" "}
                  TRONOCITY LABS PRIVATE LIMITED
                </p>
                <p>
                  <span className="font-semibold">Registered Address:</span>{" "}
                  House no 108 Pachkedhi Gandli Pachkhedi Kuhi, Nagpur,
                  Maharashtra, PIN: 441210
                </p>
                <p>
                  <span className="font-semibold">Operational Address:</span>{" "}
                  House no 108 Pachkedhi Gandli Pachkhedi Kuhi, Nagpur,
                  Maharashtra, PIN: 441210
                </p>
                <p>
                  <span className="font-semibold">Telephone No:</span> +91
                  7038725831
                </p>
                <p>
                  <span className="font-semibold">E-Mail ID:</span>{" "}
                  <a
                    href="mailto:info@gigzs.com"
                    className="text-primary underline"
                  >
                    info@gigzs.com
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GravityShapesHero() {
  const [shapes, setShapes] = useState(() =>
    Array.from({ length: 8 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight * 0.5,
      size: 24 + Math.random() * 32,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      type: ["circle", "square", "triangle", "diamond"][
        Math.floor(Math.random() * 4)
      ],
      color: ["#00704a33", "#00704a22", "#00704a55"][
        Math.floor(Math.random() * 3)
      ],
    }))
  );
  const [mouse, setMouse] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationId: number;
    const animate = () => {
      setShapes((prevShapes) =>
        prevShapes.map((shape) => {
          // Repel if mouse is near the shape
          const centerX = shape.x + shape.size / 2;
          const centerY = shape.y + shape.size / 2;
          const dist = Math.sqrt(
            (mouse.x - centerX) ** 2 + (mouse.y - centerY) ** 2
          );
          let newVx = shape.vx;
          let newVy = shape.vy;
          let newX = shape.x + newVx;
          let newY = shape.y + newVy;
          const repelRadius = 80;
          if (dist < repelRadius) {
            // Calculate repel vector
            const angle = Math.atan2(centerY - mouse.y, centerX - mouse.x);
            const repelStrength = ((repelRadius - dist) / repelRadius) * 1.5; // Reduced strength
            newVx += Math.cos(angle) * repelStrength;
            newVy += Math.sin(angle) * repelStrength;
            // Clamp velocity for stability
            newVx = Math.max(Math.min(newVx, 1.5), -1.5);
            newVy = Math.max(Math.min(newVy, 1.5), -1.5);
            newX = shape.x + newVx;
            newY = shape.y + newVy;
          }
          if (heroRef.current) {
            const rect = heroRef.current.getBoundingClientRect();
            // Bounce horizontally
            if (newX < 0) {
              newX = 0;
              newVx = -newVx;
            } else if (newX + shape.size > rect.width) {
              newX = rect.width - shape.size;
              newVx = -newVx;
            }
            // Bounce vertically
            if (newY < 0) {
              newY = 0;
              newVy = -newVy;
            } else if (newY + shape.size > rect.height) {
              newY = rect.height - shape.size;
              newVy = -newVy;
            }
          }
          return { ...shape, x: newX, y: newY, vx: newVx, vy: newVy };
        })
      );
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [mouse]);

  return (
    <div ref={heroRef} className="absolute inset-0 pointer-events-none z-0">
      {shapes.map((shape, i) => {
        const style = {
          left: shape.x,
          top: shape.y,
          width: shape.size,
          height: shape.size,
          opacity: 0.7,
          transition: "background 0.2s",
        } as React.CSSProperties;
        if (shape.type === "circle") {
          return (
            <div
              key={i}
              className="absolute"
              style={{ ...style, borderRadius: "50%", background: shape.color }}
            />
          );
        }
        if (shape.type === "square") {
          return (
            <div
              key={i}
              className="absolute"
              style={{ ...style, borderRadius: "12%", background: shape.color }}
            />
          );
        }
        if (shape.type === "diamond") {
          return (
            <div
              key={i}
              className="absolute"
              style={{
                ...style,
                background: shape.color,
                transform: `rotate(45deg)`,
              }}
            />
          );
        }
        if (shape.type === "triangle") {
          return (
            <svg
              key={i}
              className="absolute"
              style={style}
              viewBox="0 0 100 100"
            >
              <polygon points="50,0 100,100 0,100" fill={shape.color} />
            </svg>
          );
        }
        return null;
      })}
    </div>
  );
}

export default App;
