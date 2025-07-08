
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const COURSES = [
  { code: "BIS101", name: "Introduction to Computer", credits: 3 },
  { code: "ACC101", name: "Principles of Accounting 1", credits: 3 },
  { code: "MAT101", name: "Business Math", credits: 3 },
  { code: "ECO101", name: "Principles of Economics", credits: 3 },
  { code: "MAN101", name: "Principles of Management", credits: 3 },
  { code: "ACC102", name: "Principles of Accounting 2", credits: 3 },
  { code: "BIS103", name: "Operating Systems", credits: 3 },
  { code: "BIS201", name: "Information Systems", credits: 3 },
  { code: "HU111", name: "English 1", credits: 2 },
  { code: "HU313", name: "Societal Issues", credits: 2 },
  { code: "MAN102", name: "Behavior Management", credits: 3 },
];

const GRADES = {
  "A+": 4.0,
  "A": 3.75,
  "B+": 3.4,
  "B": 3.1,
  "C+": 2.8,
  "C": 2.5,
  "D+": 2.25,
  "D": 2.0,
  "F": 0.0
};

function getOverallGrade(gpa: number) {
  if (gpa >= 3.4) return "امتياز";
  if (gpa >= 2.8) return "جيد جدًا";
  if (gpa >= 2.4) return "جيد";
  if (gpa >= 2.0) return "مقبول";
  return "ضعيف";
}

export default function GPAHelwanBIS() {
  const [grades, setGrades] = useState<{ [key: string]: string }>({});
  const [gpa, setGpa] = useState<number | null>(null);

  const handleGradeChange = (courseCode: string, grade: string) => {
    setGrades(prev => ({ ...prev, [courseCode]: grade }));
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    for (const course of COURSES) {
      const grade = grades[course.code];
      if (grade && GRADES[grade] !== undefined) {
        totalPoints += GRADES[grade] * course.credits;
        totalCredits += course.credits;
      }
    }
    if (totalCredits > 0) {
      const result = totalPoints / totalCredits;
      setGpa(Number(result.toFixed(2)));
    } else {
      setGpa(null);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto grid gap-6">
      <h1 className="text-3xl font-bold text-center">BIS Helwan - GPA Calculator (Level 1)</h1>

      {COURSES.map(course => (
        <Card key={course.code} className="shadow-xl">
          <CardContent className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div>
              <h2 className="font-semibold">{course.name}</h2>
              <p className="text-sm text-muted-foreground">{course.credits} Credit Hours</p>
            </div>
            <Select onValueChange={value => handleGradeChange(course.code, value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Grade" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(GRADES).map(g => (
                  <SelectItem key={g} value={g}>{g}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      ))}

      <Button className="w-full md:w-1/2 mx-auto" onClick={calculateGPA}>Calculate GPA</Button>

      {gpa !== null && (
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold">Your GPA: {gpa}</h2>
          <p className="text-lg mt-2">التقدير العام: {getOverallGrade(gpa)}</p>
        </div>
      )}
    </div>
  );
}
