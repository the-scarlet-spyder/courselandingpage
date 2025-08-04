import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Course } from "@/data/courses";
import { Link } from "react-router-dom";
import { Users } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link to={`/course/${course.id}`} className="block group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg">
      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border cursor-pointer">
      <CardHeader className="space-y-4">
        {/* Course Image/Flyer */}
        <div className="w-full h-48 bg-muted rounded-lg overflow-hidden">
          {course.flyer ? (
            <img 
              src={course.flyer} 
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">Professional Training</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Course Title */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-primary font-medium text-sm">{course.subtitle}</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-2">
          {course.description}
        </p>
        
        {/* Course Details */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{course.mode}</Badge>
          {course.isPlaceholder && (
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              Preview
            </Badge>
          )}
        </div>

        {/* What You'll Gain Preview */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">What You'll Gain:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {course.whatYoullGain.slice(0, 3).map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                {item}
              </li>
            ))}
            {course.whatYoullGain.length > 3 && (
              <li className="text-primary text-xs font-medium">
                +{course.whatYoullGain.length - 3} more benefits
              </li>
            )}
          </ul>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground" tabIndex={-1}>
          View & Register
        </Button>
      </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;