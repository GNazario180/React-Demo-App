export function validatePhone(p) {
  if (!p) return "Phone is required";
  if (!p.startsWith("+254")) return "Must start with country code +254.";
  if (p !== "+254712345678") return "Invalid phone for this mock login.";
  return "";
}