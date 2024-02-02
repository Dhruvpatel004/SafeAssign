import axios from 'axios';


export const logout = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/logout`, {
            withCredentials: true,
          });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const isUserLoggedIn = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/check-login`, {
            withCredentials: true,
          });
        return response.data; // Return the data indicating user login status
    } catch (error) {
        throw error;
    }
};

export const getUserDetails = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/user-details`);
      return response.data; // Return the user details from the response
    } catch (error) {
      throw error;
    }
  };