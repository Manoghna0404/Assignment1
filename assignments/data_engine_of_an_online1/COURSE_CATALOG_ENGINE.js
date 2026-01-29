const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

// 1. Get published courses
const publishedCourses = courses.filter(course => course.published);

// 2. Sort courses by price (high → low)
const sortedByPriceDesc = [...publishedCourses].sort(
  (a, b) => b.price - a.price
);

// 3. Extract { title, price }
const courseSummaries = sortedByPriceDesc.map(({ title, price }) => ({
  title,
  price
}));

// 4. Calculate total value
const totalValue = publishedCourses.reduce(
  (sum, course) => sum + course.price,
  0
);

// 5. Add a new course immutably
const newCourse = {
  id: 104,
  title: "TypeScript",
  price: 1599,
  published: true
};

const updatedCourses = [...courses, newCourse];

console.log(courseSummaries);
console.log(totalValue);
console.log(updatedCourses);