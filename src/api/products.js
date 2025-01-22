import axios from 'axios';

const API_URL = 'http://localhost:8080/api/products/search';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzM3NTQ4NzU0LCJleHAiOjE3Mzc1ODQ3NTR9.u8XoFIXx0SfVI_m1sfIkOsNC69sqyybVT43k_uoWZmY';

export const fetchProducts = async (filters) => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const response = await axios.get(`${API_URL}?${queryParams}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
