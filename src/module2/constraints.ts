{
  // constraints
  const addCourseStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return { ...student, course };
  };

  interface Student {
    id: number;
    name: string;
    email: string;
  }
  const result1 = addCourseStudent({
    id: 12712,
    name: "Sweet",
    email: "sweetali0520@gmail.com",
    devType: "Frontend with Next Level Developer",
  });
}
