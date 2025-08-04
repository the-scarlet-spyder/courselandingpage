import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, Home, MessageCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-12 space-y-8">
                {/* Success Icon */}
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>

                {/* Main Message */}
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    🎉 You've Successfully Registered!
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Thank you for choosing Strengths Africa for your professional development journey.
                  </p>
                </div>

                {/* Next Steps */}
                <div className="bg-background rounded-lg p-6 text-left space-y-4">
                  <h3 className="font-semibold text-foreground text-lg">What happens next?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">1.</span>
                      We'll review your registration and course selection
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">2.</span>
                      Our team will contact you within 24 hours with course details
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">3.</span>
                      You'll receive training materials and schedule information
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">4.</span>
                      Get ready to transform your professional skills!
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <h3 className="font-semibold text-foreground">Need immediate assistance?</h3>
                  <p className="text-muted-foreground text-sm">
                    Our team is here to help with any questions about your registration or course details.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('https://wa.me/your-number', '_blank')}
                      className="flex items-center"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('mailto:info@strengthsafrica.com', '_blank')}
                      className="flex items-center"
                    >
                      📧 Email Support
                    </Button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
                    <Link to="/">
                      <Home className="w-4 h-4 mr-2" />
                      Return to Courses
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/about">
                      Learn More About Us
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="mt-8 text-center space-y-4">
              <p className="text-muted-foreground">
                Keep an eye on your email for important updates about your training program.
              </p>
              <p className="text-sm text-muted-foreground">
                Registration confirmation sent to your provided email address.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYou;