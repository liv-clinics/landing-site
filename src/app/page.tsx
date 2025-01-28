// src/app/page.tsx
import { Hospital, Users, ClipboardCheck, Phone, Mail, MapPin, Award, Heart, Stethoscope, Database } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ContactInfo } from '@/components/ContactInfo';
import { ServiceCard } from '@/components/ServiceCard';
import { TeamMember } from '@/components/TeamMember';

// Metadata for SEO
export const metadata = {
  title: 'After Liv Clinics - Quality Healthcare in Tier 2 & 3 Cities',
  description: 'After Liv Clinics provides affordable, accessible healthcare services in tier 2 and tier 3 cities with qualified medical practitioners and modern facilities.',
  keywords: 'healthcare, medical clinic, affordable healthcare, tier 2 cities, tier 3 cities',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">After Liv Clinics</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-200">About</a>
            <a href="#services" className="hover:text-blue-200">Services</a>
            <a href="#team" className="hover:text-blue-200">Team</a>
            <a href="#contact" className="hover:text-blue-200">Contact</a>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Path to Better Quality and Affordable Health</h1>
          <p className="text-xl mb-8">Making quality healthcare accessible in tier 2 and tier 3 cities</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Book Appointment
          </button>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Heart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p>Establishing quality, affordable, and accessible medical clinics in tier 2 and tier 3 cities/towns.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Core Values</h3>
              <p>Patient-centered affordable and quality care, compassion, integrity, and innovation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Expertise</h3>
              <p>Experienced doctors and nurses dedicated to providing the highest quality care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Stethoscope className="w-8 h-8" />}
              title="Qualified Medical Health Practitioner"
              description="Expert medical practitioners providing comprehensive healthcare services"
            />
            <ServiceCard 
              icon={<Hospital className="w-8 h-8" />}
              title="Affordable Healthcare"
              description="Wide range of affordable healthcare services including consultations and daycare"
            />
            <ServiceCard 
              icon={<Database className="w-8 h-8" />}
              title="Digital Health Records"
              description="Secure and up-to-date digital health record management system"
            />
            <ServiceCard 
              icon={<Award className="w-8 h-8" />}
              title="NABH Accredited"
              description="Meeting the highest standards of quality and safety in healthcare"
            />
            <ServiceCard 
              icon={<ClipboardCheck className="w-8 h-8" />}
              title="Latest Technology"
              description="Tech-enabled centers providing cutting-edge medical care"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Dr. Some Name"
              role="Co-founder, CEO & Chief Strategy Officer"
              credentials="M.B.B.S."
            />
            <TeamMember
              name="Dr. Another Name"
              role="Co-founder, COO"
              credentials="M.B.B.S."
            />
            <TeamMember
              name="Dr. Another Another"
              role="Co-founder, Chief Clinical & Quality Officer"
              credentials="M.B.B.S., Cardiology Fellowship (NHS, UK)"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ContactInfo
              icon={<Phone className="w-6 h-6" />}
              title="Phone"
              info="+91 XXXXXXXXXX"
            />
            <ContactInfo
              icon={<Mail className="w-6 h-6" />}
              title="Email"
              info="contact@afterlivclinics.com"
            />
            <ContactInfo
              icon={<MapPin className="w-6 h-6" />}
              title="Location"
              info="Multiple locations across tier 2 and tier 3 cities"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">After Liv Clinics</h3>
              <p className="text-sm">Your path to better quality and affordable health</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-sm hover:text-blue-200">About Us</a></li>
                <li><a href="#services" className="text-sm hover:text-blue-200">Services</a></li>
                <li><a href="#team" className="text-sm hover:text-blue-200">Team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Industry Partners</h3>
              <ul className="space-y-2">
                <li className="text-sm">Indian Medical Association</li>
                <li className="text-sm">Indian Healthcare Federation</li>
                <li className="text-sm">Indian Dental Association</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="border-t border-blue-500 mt-8 pt-8 text-center">
            <p className="text-sm">&copy; 2025 After Liv Clinics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}



