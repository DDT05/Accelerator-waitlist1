import React from 'react';
import { Play, BookOpen, List, ArrowRight, Zap, TrendingUp, DollarSign } from 'lucide-react';
import { GoogleFormEmbed } from './components/GoogleFormEmbed';

const VideoThumbnail = ({ 
  src, 
  alt, 
  className = "",
  videoUrl
}: { 
  src: string; 
  alt: string; 
  className?: string;
  videoUrl?: string;
}) => (
  <div className={`relative cursor-pointer group ${className}`}>
    <img 
      src={src} 
      alt={alt}
      className="w-full h-full object-cover rounded-lg"
    />
    <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-200">
      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200">
        <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
      </div>
    </div>
  </div>
);

const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  image,
  hasQuote = false 
}: { 
  quote: string; 
  author: string; 
  role: string; 
  image?: string;
  hasQuote?: boolean;
}) => (
  <div className="bg-gray-900 text-white p-8 rounded-lg shadow-md relative">
    {image && (
      <div className="flex justify-center mb-6">
        <img 
          src={image} 
          alt={author}
          className="w-20 h-20 object-cover rounded-full border-4 border-white"
        />
      </div>
    )}
    {hasQuote && !image && (
      <span className="text-7xl font-bold leading-none opacity-30 absolute top-4 left-6">"</span>
    )}
    <blockquote className={`${hasQuote && !image ? 'mt-12' : ''} mb-6 text-gray-100`}>
      {quote}
    </blockquote>
    <figcaption>
      <cite className="font-bold not-italic text-white">{author}</cite>
      <p className="text-gray-300 text-sm">{role}</p>
    </figcaption>
  </div>
);

const HighlightItem = ({ 
  icon,
  title, 
  description 
}: { 
  icon: React.ReactNode;
  title: string; 
  description: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="w-16 h-16 flex-shrink-0 bg-blue-600 rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
            ENTREPRENEURS, MANAGERS & EMPLOYEES<br />
            You're one step away from acquiring core AI skills and beat the competition.
          </h1>
          <p className="text-xl text-white font-medium">
            IMPORTANT: Please Watch This Video Below
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative cursor-pointer group aspect-video">
            <iframe 
              src="https://www.youtube.com/embed/t8oHTDdA5uU" 
              title="AI Training Video"
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            PREMIUM ACCELERATOR LAUNCHING SOON
          </h2>
          <p className="text-xl text-gray-300 mb-12">Secure your exclusive spot before it's too late!</p>
          
          <GoogleFormEmbed 
            title="🚀 Reserve Your Spot Now!"
            subtitle="227 entrepreneurs have already secured their place - don't get left behind!"
          />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <HighlightItem
              icon={<Zap className="w-8 h-8 text-white" />}
              title="Boost Efficiency with AI"
              description="Discover how AI tools can streamline your business processes and save you time and effort"
            />
            <HighlightItem
              icon={<TrendingUp className="w-8 h-8 text-white" />}
              title="Maximize Growth Potential"
              description="Learn how AI can help you scale your business and reach new heights of success"
            />
            <HighlightItem
              icon={<DollarSign className="w-8 h-8 text-white" />}
              title="High ROI Investment"
              description="Invest in yourself with our course and see significant returns on your business"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-8">About HEBED Accelerator</h2>
          <p className="text-lg leading-relaxed">
            Are you an independent consultant, freelancer, or business owner looking to harness the power of AI to supercharge your business? Whether you run an online store, marketing agency, or content creation business, our course is designed for you. We understand your need for efficiency, growth, and high ROI. Let us guide you on the path to success. Join our exclusive program now and be among the select few to unlock the potential of AI for your business.
          </p>
        </div>
      </section>

      {/* Meet Instructors Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://i.ibb.co/hFphcTjT/founders.png"
                alt="HEBED AI Instructors"
                className="w-full h-auto object-contain rounded-lg max-h-96"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-normal mb-6">Meet Your Instructors</h2>
              <p className="text-lg leading-relaxed text-gray-300">
                "Hi, we're Heben and Edward, co-founders of HEBED AI, and we're passionate about making AI transformation accessible to every small business owner."
                <br /><br />
                As seasoned digital transformation specialists, we've witnessed firsthand the frustration of small business owners drowning in AI hype while struggling to find practical, profitable solutions. Together, we've spent over 1 year helping businesses bridge the gap between cutting-edge technology and real-world results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geneva Conference Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-center mb-12 text-gray-900">
            Generative AI for Business — Live at Mövenpick Geneva
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative cursor-pointer group aspect-video">
                <iframe 
                  src="https://www.youtube.com/embed/gSFIVQBePwI" 
                  title="Geneva Conference Video"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-gray-700">
                On May 22, 2025, HEBED AI brought together business leaders, entrepreneurs, and innovators for an exclusive conference on Generative AI at the prestigious Mövenpick Hotel Geneva.
                <br /><br />
                From real-world automation case studies to live demos of AI agents in action, attendees walked away with powerful insights and practical tools to future-proof their business.
                <br /><br />
                🔥 Missed it? No worries — the momentum continues inside the HEBED Accelerator. Reserve your spot now and be among the select few to access our mentorship program with replays, expert insights, and the community shaping the next wave of AI-driven business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Product Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">Our Interventions</h1>
              <p className="text-xl text-gray-600 mb-12">
                Sharing our knowledge with experts who want to thrive in their business with AI.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="mb-6">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">Course</span>
                  <h3 className="text-2xl font-semibold text-gray-900">HEBED Accelerator</h3>
                </div>
                
                <div className="mb-8">
                  <GoogleFormEmbed 
                    title="⚡ Claim Your Spot!"
                    subtitle="Only 33 spots remaining out of 260 total!"
                    className="bg-white border border-gray-200"
                    showUrgency={false}
                  />
                </div>
                
                <div className="flex gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>10 Chapters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <List className="w-4 h-4" />
                    <span>10 Lessons</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img src="https://i.ibb.co/LdX856PD/trust.png" alt="HEBED AI Course Material" border="0" className="w-full h-auto object-contain rounded-lg max-h-96" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">What People Are Saying</h2>
            <p className="text-xl text-gray-600">
              Discover how our course is transforming businesses and helping professionals like you succeed
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <TestimonialCard
                quote="Before this program, AI felt overwhelming. Now, I've automated my booking confirmations, set up a feedback bot, and even use AI to analyze guest reviews. Everything was broken down clearly—no fluff, just results. My staff loves it, and our response time has improved by 40%."
                author="Fatou K., Dakar"
                role="| Guesthouse Manager"
                hasQuote={true}
              />
              
              <TestimonialCard
                quote="I used to think AI was only for big corporations. After Module 2, I automated my customer follow-ups and saved at least 6 hours a week. The templates were practical, and I launched my first chatbot by the end of Week 3. It's like having a digital team working 24/7."
                author="Grace A., Nairobi"
                role="Boutique Owner"
                image="https://i.ibb.co/60FrgLw0/Confident-Portrait-of-a-Beautiful-Woman.png"
              />
            </div>
            
            <div className="space-y-8">
              <TestimonialCard
                quote="This course changed how I work. The AI marketing tools helped me triple my content output. Clients noticed immediately. I even booked two new projects thanks to the portfolio I built using the course exercises."
                author="Thabo M., Johannesburg"
                role="Digital Consultant"
                image="https://i.ibb.co/NnN8HwWP/Calm-Portrait-on-Beige-Background.png"
              />
              
              <TestimonialCard
                quote="The 90-day action plan was gold. It forced us to prioritize, track ROI, and implement automations that actually matter. We're now running leaner and smarter—without needing a full-time ops team."
                author="John S., Accra"
                role="SaaS Founder"
                image="https://i.ibb.co/gbfVNs3D/Confident-Smile-in-Classic-Suit.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-6">
            🚨 Last Chance: Only 33 Spots Remaining!
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            227 forward-thinking entrepreneurs have already secured their spot. Don't let this opportunity slip away!
          </p>
          
          <GoogleFormEmbed 
            title="🔥 FINAL CALL - Reserve Now!"
            subtitle="Join the exclusive group transforming their business with AI"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
