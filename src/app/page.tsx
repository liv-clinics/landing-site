// src/app/page.tsx
import Image from 'next/image';
import { 
  Hospital, 
  Users, 
  ClipboardCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  Heart, 
  Stethoscope, 
  Database,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  CheckCircle,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Compass,
  HeartHandshake,
  Shield,
  Target
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// SEO Metadata
export const metadata = {
  title: 'After Liv Clinics - Quality Healthcare in Tier 2 & 3 Cities',
  description: 'Quality, affordable, and accessible medical clinics in tier 2 and tier 3 cities/towns',
  openGraph: {
    title: 'After Liv Clinics',
    description: 'Quality Healthcare in Tier 2 & 3 Cities',
    images: ['/og-image.jpg'],
  },
  keywords: ['healthcare', 'medical clinic', 'affordable healthcare', 'tier 2 cities', 'tier 3 cities', 'India healthcare'],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="After Liv Clinics Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold text-xl text-gray-900">After Liv Clinics</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            <Button>Book Appointment</Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4">
                <a href="#about" className="text-lg">About</a>
                <a href="#services" className="text-lg">Services</a>
                <a href="#contact" className="text-lg">Contact</a>
                <Button className="w-full">Book Appointment</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 z-0">
          <Image
            src="/heroBg.png"
            alt="Medical professionals"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Path to Better Quality and Affordable Health
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Making quality healthcare accessible to everyone in tier 2 and tier 3 cities/towns, 
                regardless of their location or financial status.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 group">
                  Book Appointment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/img.png"
                alt="Modern medical facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">About After Liv Clinics</h2>
            <p className="text-muted-foreground">
              Making quality healthcare accessible to everyone, regardless of their location.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Vision & Mission Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-primary/5 border-none">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our healthcare company establishes quality, affordable, and accessible medical clinics 
                    in tier 2 and tier 3 cities/towns, aiming to organize and improve the quality of 
                    healthcare services for the masses.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-none">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Compass className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our mission is to empower individuals in tier 2 and tier 3 cities/towns to achieve optimal 
                    health and well-being through accessible, affordable, and compassionate healthcare.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* History & Values */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Our History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Liv Clinics was founded with a vision to make quality healthcare accessible to everyone, 
                      especially in tier 3 and tier 2 cities/towns. We believe that everyone deserves access 
                      to quality healthcare, regardless of their location or financial status.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Team Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our team of experienced doctors and nurses is dedicated to providing the highest quality care.
                      With years of expertise and a commitment to excellence, we ensure that every patient receives
                      the best possible medical attention.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-2xl font-semibold text-center mb-8">Our Core Values</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Heart className="h-6 w-6" />,
                    title: "Patient-Centered Care",
                    description: "Focusing on individual patient needs"
                  },
                  {
                    icon: <Award className="h-6 w-6" />,
                    title: "Quality Healthcare",
                    description: "Maintaining highest medical standards"
                  },
                  {
                    icon: <HeartHandshake className="h-6 w-6" />,
                    title: "Compassion",
                    description: "Treating patients with empathy"
                  },
                  {
                    icon: <Shield className="h-6 w-6" />,
                    title: "Integrity",
                    description: "Upholding ethical practices"
                  }
                ].map((value, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {value.icon}
                      </div>
                      <h4 className="font-semibold mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600">Patient-centered affordable and quality care, compassion, integrity, and innovation.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Heart />, title: 'Patient-Centered Care' },
              { icon: <Award />, title: 'Quality Healthcare' },
              { icon: <Users />, title: 'Compassion' },
              { icon: <CheckCircle2 />, title: 'Integrity' },
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{value.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600">Comprehensive healthcare solutions designed for your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Stethoscope className="w-6 h-6" />,
                title: "Qualified Medical Health Practitioner",
                description: "Our clinics are staffed by qualified medical health practitioners who are experts in their field.",
                image: "/qual.png"
              },
              {
                icon: <Hospital className="w-6 h-6" />,
                title: "Affordable Healthcare",
                description: "We offer a wide range of affordable healthcare services, including consultations, daycare, and more.",
                image: "/afford.png"
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Digital Health Records",
                description: "We use a digital health record management system to ensure that your health information is always up-to-date and secure.",
                image: "/digital.png"
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "NABH Accredited",
                description: "Our clinics are NABH accredited, which means that we meet the highest standards of quality and safety.",
                image: "/nabh.png"
              },
              {
                icon: <ClipboardCheck className="w-6 h-6" />,
                title: "Latest Technology",
                description: "We use the latest technology to provide our patients with the best possible care.",
                image: "/tech.png"
              }
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problems */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Problems We Address</h2>
              <div className="space-y-4">
                {[
                  "Limited access to qualified professionals",
                  "Lack of basic healthcare facilities in the near vicinity",
                  "Long travel distances for basic health care"
                ].map((problem, index) => (
                  <Card key={index} className="group hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center space-x-4 p-6">
                      <div className="bg-red-100 p-2 rounded-full group-hover:bg-red-200 transition-colors">
                        <ClipboardCheck className="h-6 w-6 text-red-600" />
                      </div>
                      <p className="text-gray-700 font-medium">{problem}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Solutions</h2>
              <div className="space-y-4">
                {[
                  "Qualified Medical Health Practitioner",
                  "Affordable Healthcare",
                  "Digital health record management",
                  "NABH Accredited centres",
                  "Latest tech-enabled centres"
                ].map((solution, index) => (
                  <Card key={index} className="group hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center space-x-4 p-6">
                      <div className="bg-green-100 p-2 rounded-full group-hover:bg-green-200 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="text-gray-700 font-medium">{solution}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Patient Testimonials</h2>
            <p className="text-muted-foreground">Hear what our patients have to say about their experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                content: "I was so impressed with the care I received at After Liv Clinics. The doctor was very knowledgeable and compassionate, and the staff was friendly and helpful.",
                author: "Rahul Sharma",
                location: "Kanpur",
                image: "https://placehold.co/100x100/png"
              },
              {
                content: "The facility is modern and clean, and the medical team took the time to explain everything clearly. Having such quality healthcare nearby is a blessing.",
                author: "Priya Patel",
                location: "Lucknow",
                image: "https://placehold.co/100x100/png"
              },
              {
                content: "The digital health records system makes it so convenient to keep track of my medical history. The doctors are experienced and truly care about their patients.",
                author: "Amit Kumar",
                location: "Varanasi",
                image: "https://placehold.co/100x100/png"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="relative bg-card">
                <CardContent className="pt-12 px-8 pb-8">
                  <div className="absolute -top-6 left-8">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-4 ring-background">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground mb-4">
                    {testimonial.content}
                  </blockquote>
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Industry Partners</h2>
            <p className="text-gray-600">Collaborating with leading healthcare institutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Indian Medical Association",
                image: "/ima.jpg"
              },
              {
                name: "Indian Healthcare Federation",
                image: "/nathealth-logo.webp"
              },
              {
                name: "Indian Dental Association",
                image: "/ida.png"
              }
            ].map((partner, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-lg p-4">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{partner.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
            <Card className="relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
              <CardHeader>
                <CardTitle className="text-3xl text-center">Contact Us</CardTitle>
                <CardDescription className="text-center">
                  Get in touch with our healthcare professionals
                </CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">contact@afterlivclinics.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Locations</p>
                      <p className="text-gray-600">Multiple centers across tier 2 and tier 3 cities</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/contact.png"
                    alt="Contact us"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="py-12 grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/logo.jpg"
                    alt="After Liv Clinics Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-bold text-xl">After Liv Clinics</span>
              </div>
              <p className="text-gray-600">
                Your path to better quality and affordable healthcare in tier 2 and tier 3 cities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-3">
                <li className="text-gray-600">Qualified Medical Practitioners</li>
                <li className="text-gray-600">Affordable Healthcare</li>
                <li className="text-gray-600">Digital Health Records</li>
                <li className="text-gray-600">NABH Accredited Centres</li>
              </ul>
            </div>

            {/* Industry Partners */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Industry Partners</h3>
              <ul className="space-y-3">
                <li className="text-gray-600">Indian Medical Association</li>
                <li className="text-gray-600">Indian Healthcare Federation</li>
                <li className="text-gray-600">Indian Dental Association</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t py-8">
            <p className="text-center text-gray-600">
              &copy; {new Date().getFullYear()} After Liv Clinics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}