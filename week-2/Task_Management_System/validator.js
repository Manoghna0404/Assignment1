// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
  if (typeof title !== "string") return false;
  return title.trim().length >= 3;
}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
  const allowedPriorities = ["low", "medium", "high"];
  return allowedPriorities.includes(priority);
}

// 3. Validate due date (must be future date)
function validateDueDate(date) {
  const dueDate = new Date(date);
  const today = new Date();
  return dueDate > today;
}

// Export validation functions
export {
  validateTitle,
  validatePriority,
  validateDueDate
};
