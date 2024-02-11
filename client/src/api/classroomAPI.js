// src/api/classApi.js
import axios from 'axios';
axios.defaults.withCredentials = true;

export const getClassData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/dashboard/getJoinedClass`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching class data');
  }
};

export const addClass = async (classData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/class/add`, classData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error('Error adding class');
  }
};

export const updateClass = async (classData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/api/class/update`, classData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error('Error updating class');
  }
};
export const removeClass = async (classID) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/class/remove/${classID}`, {
        withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error('Error removing class');
    }
    };

export  const joinClass = async (classID) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/class/join/${classID}`, {
        withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error('Error joining class');
    }
    };

export  const leaveClass = async (classID) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/class/leave/${classID}`, {
        withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error('Error leaving class');
    }
    };





// You can define more API functions related to classes as needed
