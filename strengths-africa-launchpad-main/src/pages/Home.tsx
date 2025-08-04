import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, Clock } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section
        className="pt-24 pb-16 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/flyers/background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Hero Content */}
            <div className="space-y-6">
              <Badge variant="outline" className="border-white text-white px-4 py-2 bg-white/10">
                Professional Development Excellence
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                <span>Smart Training for the</span>{" "}
                <span className="text-primary">Future-Ready Professional</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Explore 19 expertly designed programs to boost your skills in Facility Management, HR, Innovation, and more.
              </p>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Unlock Your Potential</h3>
                <p className="text-white/70">Advance your career with practical, industry-driven training</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Self-Paced</h3>
                <p className="text-white/70">All Courses</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">100%</h3>
                <p className="text-white/70">Certified Training</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a href="#courses-section">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
                  Explore Courses
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Gallery Section */}
      <section id="courses-section" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Training Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive collection of industry-leading training programs designed to elevate your professional capabilities.
            </p>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Career?
            </h2>
            <p className="text-lg text-secondary-foreground/80">
              Join thousands of professionals who have advanced their careers with our expert-led training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#courses-section">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a
                href="/flyers/Strengths Africa Brochure.pdf"
                download
                className="border-black text-black bg-white hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors rounded-lg px-6 py-3 text-lg font-medium inline-flex items-center justify-center"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;