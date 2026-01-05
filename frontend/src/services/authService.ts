import api from "./api.ts";

interface LoginCredentials {
  username: string;
  password: string;
}

interface SignUpCredentials {
  username: string;
  password: string;
  // Add other fields required for sign-up
}

const AuthService = {
  login: async (credentials: LoginCredentials) => {
    try {
      const response = await api.post("/login", credentials);
      console.log("Response:", response.data);
      return response.data; // Return the response data if needed
    } catch (error) {
      console.error("Error:", error);
      throw error; // Re-throw the error for handling in the component
    }
  },
  signUp: async (credentials: SignUpCredentials) => {
    try {
      const response = await api.post("/signup", credentials); // Update the endpoint if needed
      console.log("Response:", response.data);
      return response.data; // Return the response data if needed
    } catch (error) {
      console.error("Error:", error);
      throw error; // Re-throw the error for handling in the component
    }
  },
};

export default AuthService;