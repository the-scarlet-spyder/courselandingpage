import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { courses } from "@/data/courses";
import { ArrowLeft, Clock, Users, Award, CheckCircle } from "lucide-react";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Courses
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Link>
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Course Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{course.mode}</Badge>
                  {course.isPlaceholder && (
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                      Preview Content
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {course.title}
                </h1>
                
                <p className="text-xl text-primary font-semibold">
                  {course.subtitle}
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{course.mode}</p>
                  <p className="text-xs text-muted-foreground">Format</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Certificate</p>
                  <p className="text-xs text-muted-foreground">Included</p>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                asChild 
                size="lg" 
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
              >
                <Link to={`/register?course=${course.id}`}>
                  Register Now
                </Link>
              </Button>
            </div>

            {/* Course Image/Flyer */}
            <div className="lg:order-first">
              <div className="w-full h-96 lg:h-[500px] bg-muted rounded-xl overflow-hidden shadow-lg">
                {course.flyer ? (
                  <img 
                    src={course.flyer} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-12 h-12 text-primary" />
                      </div>
                      <p className="text-lg text-muted-foreground font-medium">Professional Training Program</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Gain Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center">
                  <CheckCircle className="w-8 h-8 text-primary mr-3" />
                  What You'll Gain
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {course.whatYoullGain.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-foreground font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <Award className="w-10 h-10 text-primary" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Certificate of Completion
              </h2>
              <p className="text-lg text-muted-foreground">
                Upon successful completion of this training program, you'll receive an official 
                certificate from Strengths Africa, validating your newly acquired skills and knowledge.
              </p>
            </div>

            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              <Link to={`/register?course=${course.id}`}>
                Secure Your Spot Today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;