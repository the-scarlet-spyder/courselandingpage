import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { courses } from "@/data/courses";
import { useToast } from "@/hooks/use-toast";
import { Loader2, User, Mail, Phone, BookOpen } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnqewwqg"; // Replace with your Formspree endpoint

const Registration = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const preselectedCourseId = searchParams.get('course');
  const preselectedCourse = courses.find(c => c.id === preselectedCourseId);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedCourse: preselectedCourseId || ''
  });

  useEffect(() => {
    if (preselectedCourseId) {
      setFormData(prev => ({ ...prev, selectedCourse: preselectedCourseId }));
    }
  }, [preselectedCourseId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Prepare a well-formatted message for workflow efficiency
    const selectedCourseObj = courses.find(c => c.id === formData.selectedCourse);
    const courseTitle = selectedCourseObj ? selectedCourseObj.title : '';
    const courseSubtitle = selectedCourseObj ? selectedCourseObj.subtitle : '';
    const courseMode = selectedCourseObj ? selectedCourseObj.mode : '';

    const emailBody = `
New Course Registration

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Selected Course: ${courseTitle}
Subtitle: ${courseSubtitle}
Mode: ${courseMode}
    `.trim();

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: new FormData(Object.assign(document.createElement('form'), {
          elements: [
            { name: "Full Name", value: formData.fullName },
            { name: "Email", value: formData.email },
            { name: "Phone", value: formData.phone },
            { name: "Selected Course", value: courseTitle },
            { name: "Subtitle", value: courseSubtitle },
            { name: "Mode", value: courseMode }
          ]
        }))
      });

      if (response.ok) {
        toast({
          title: "Registration Successful!",
          description: "Thank you for registering. We'll contact you soon with course details.",
        });
        navigate('/thank-you');
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Course Registration
              </h1>
              <p className="text-lg text-muted-foreground">
                Take the next step in your professional development journey
              </p>
            </div>

            {/* Preselected Course Info */}
            {preselectedCourse && (
              <Card className="mb-8 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">Selected Course</h3>
                      <p className="font-medium text-primary">{preselectedCourse.title}</p>
                      <p className="text-sm text-muted-foreground">{preselectedCourse.subtitle}</p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">
                          {preselectedCourse.mode}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Registration Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-primary" />
                  Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-primary" />
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                      className="border-border focus:border-primary"
                      name="Full Name"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="border-border focus:border-primary"
                      name="Email"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="border-border focus:border-primary"
                      name="Phone"
                    />
                  </div>

                  {/* Course Selection */}
                  <div className="space-y-2">
                    <Label className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-primary" />
                      Selected Course *
                    </Label>
                    <Select 
                      value={formData.selectedCourse} 
                      onValueChange={(value) => handleInputChange('selectedCourse', value)}
                      required
                      name="Selected Course"
                    >
                      <SelectTrigger className="border-border focus:border-primary">
                        <SelectValue placeholder="Choose a training program" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
                            <div className="py-1">
                              <p className="font-medium">{course.title}</p>
                              <p className="text-sm text-muted-foreground">{course.mode}</p>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing Registration...
                      </>
                    ) : (
                      'Complete Registration'
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By registering, you agree to receive course updates and communications from Strengths Africa.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Registration;