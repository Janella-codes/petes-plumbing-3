import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Clock, Droplets, MapPin, Phone, ShieldCheck, ThumbsUp, Wrench } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplets className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">First Mien Respond Plumbing</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="tel:480-555-1234" className="hidden md:flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4" />
              <span>480-555-1234</span>
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-4 w-4" /> Request Service
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-blue-50 text-blue-700">
                <Clock className="mr-1 h-3.5 w-3.5" /> 24/7 Emergency Service
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Sacramento's Most Trusted Plumbing Experts
              </h1>
              <p className="text-lg text-muted-foreground">
                Professional plumbing services for residential and commercial properties across the greater Sacramento area.
                Fast, reliable, and guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Schedule Service
                </Button>
                <Button size="lg" variant="outline">
                  View Our Services
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-gray-200" />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-medium">500+</span> Happy Customers
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/plumbing1.jpg?height=400&width=600"
                alt="Professional plumber at work"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Our Professional Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From emergency repairs to new installations, our licensed plumbers provide comprehensive solutions for
                all your plumbing needs.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Emergency Repairs",
                  description: "24/7 emergency plumbing services for leaks, clogs, and other urgent issues.",
                  icon: <Wrench className="h-10 w-10 text-blue-600" />,
                },
                {
                  title: "Drain Cleaning",
                  description: "Professional drain cleaning services to remove clogs and prevent future blockages.",
                  icon: <Droplets className="h-10 w-10 text-blue-600" />,
                },
                {
                  title: "Water Heater Services",
                  description: "Installation, repair, and maintenance for all types of water heaters.",
                  icon: <ThumbsUp className="h-10 w-10 text-blue-600" />,
                },
                {
                  title: "Fixture Installation",
                  description: "Expert installation of sinks, faucets, toilets, showers, and other fixtures.",
                  icon: <Wrench className="h-10 w-10 text-blue-600" />,
                },
                {
                  title: "Pipe Repair & Replacement",
                  description: "Comprehensive pipe services including leak detection and repiping.",
                  icon: <Droplets className="h-10 w-10 text-blue-600" />,
                },
                {
                  title: "Sewer Line Services",
                  description: "Inspection, cleaning, repair, and replacement of sewer lines.",
                  icon: <ThumbsUp className="h-10 w-10 text-blue-600" />,
                },
              ].map((service, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button variant="link" className="p-0 mt-4 text-blue-600">
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="about" className="py-16 md:py-24 bg-blue-50">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="AZ Flow Pros team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Why Choose First Mien Respond Plumbing?</h2>
                <p className="text-muted-foreground">
                  With over 15 years of experience serving the greater Sacramento area, we've built our reputation on quality
                  workmanship, fair pricing, and exceptional customer service.
                </p>
                <div className="grid gap-4">
                  {[
                    {
                      title: "Licensed & Insured",
                      description: "All our plumbers are fully licensed, insured, and background-checked.",
                      icon: <ShieldCheck className="h-5 w-5 text-blue-600" />,
                    },
                    {
                      title: "100% Satisfaction Guarantee",
                      description: "We stand behind our work with a satisfaction guarantee on all services.",
                      icon: <CheckCircle className="h-5 w-5 text-blue-600" />,
                    },
                    {
                      title: "Transparent Pricing",
                      description: "Upfront pricing with no hidden fees or surprise charges.",
                      icon: <ThumbsUp className="h-5 w-5 text-blue-600" />,
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1">{item.icon}</div>
                      <div>
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Learn More About Us</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say about our services.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Johnson",
                  location: "Phoenix, AZ",
                  quote:
                    "AZ Flow Pros saved the day when we had a major leak! They arrived within an hour and fixed the problem quickly. Highly recommend!",
                },
                {
                  name: "Michael Rodriguez",
                  location: "Scottsdale, AZ",
                  quote:
                    "I've used AZ Flow Pros for several projects in my home. Their team is always professional, on time, and their work is excellent.",
                },
                {
                  name: "Jennifer Smith",
                  location: "Tempe, AZ",
                  quote:
                    "The best plumbing service in Arizona! Fair prices, quality work, and they always clean up after themselves. They're my go-to plumbers.",
                },
              ].map((testimonial, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#FFD700"
                        stroke="#FFD700"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {testimonial.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-blue-600 text-white">
          <div className="container text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Need a Plumber in Sacramento?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              Whether it's an emergency repair or a planned installation, our team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-4 w-4" /> Call 480-555-1234
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                Schedule Online
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions or need to schedule a service? Fill out the form and we'll get back to you as soon as
                  possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">480-555-1234</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">123 Plumbing Way, Sacramento, CA 95814</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-muted-foreground">Mon-Fri: 7am-7pm | Emergency: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" placeholder="Your email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="emergency">Emergency Repair</option>
                      <option value="drain">Drain Cleaning</option>
                      <option value="water-heater">Water Heater Service</option>
                      <option value="fixture">Fixture Installation</option>
                      <option value="pipe">Pipe Repair</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Describe your plumbing issue" rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Droplets className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">First Mien Respond Plumbing</span>
              </div>
              <p className="text-sm mb-4">
                Professional plumbing services for residential and commercial properties across Arizona.
              </p>
              <p className="text-sm">License #: ROC123456</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Emergency Repairs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Drain Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Water Heater Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Fixture Installation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Pipe Repair & Replacement
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Service Areas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Service Areas</h3>
              <ul className="space-y-2 text-sm">
                <li>Sacramento</li>
                <li>Roseville</li>
                <li>Folsom</li>
                <li>Rancho Cordova</li>
                <li>Citrus Heights</li>
                <li>North Highlands</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} First Mien Respond Plumbing. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
