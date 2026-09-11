import { userData } from "@/types";

export const setUser = (user: userData) => {
  sessionStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  if (typeof window === "undefined") return {};
  return JSON.parse(sessionStorage.getItem("user") || "{}");
};

export const clearUser = () => {
  sessionStorage.removeItem("user");
};
