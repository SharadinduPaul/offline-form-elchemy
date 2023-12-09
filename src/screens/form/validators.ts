export const isValidEmail = (email: string = ""): boolean => {
  if (!email) return true;
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
};
export function isValidUrl(url: string = ""): boolean {
  if (!url) return true;
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}
export const capitalizeInitials = (str: string) => {
  if (typeof str !== "string" || str.length === 0) {
    throw new Error("Input must be a non-empty string");
  }

  str = str.replace(/_/g, " "); // Replace underscores with spaces
  const words = str.split(" "); // Split the string into words
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalizedWords.join(" "); // Join the words with spaces
};
