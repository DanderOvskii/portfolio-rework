import { SignUpFormData,ProjectFormData } from "@/types";


export const invalidEmail = "Invalid email format";
export const invalidPassword =
  "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
export const invalidCredentials = "Invalid credentials";
export const unauthorized = "Unauthorized";
export const tokenExpiry = "1h";
export const tokenAlgorithm = "HS256";
export const sessionNotFound = "Session not found";
export const feedNotFound = "Feed not found";
export const emailIsTaken = "Email is already taken";
export const genericErrors = {
  loginFailed: "Login failed. Please check your credentials and try again.",
  signupFailed: "Sign-up failed. Please try again.",
  logoutFailed: "Logout failed. Please try again.",
};
export const initialFormData: SignUpFormData = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  dateOfBirth: "",
};
export const initialProjectData: ProjectFormData = {
  name: "",
  description: "",
  projectDate: "",
  languages: "",
  image: "",
  website: "",
};
