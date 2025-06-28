const API_BASE_URL = 'http://localhost:5001/api';

export const fetchAthletes = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/athletes`);
    if (!response.ok) {
      throw new Error('Failed to fetch athletes');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching athletes:', error);
    throw error;
  }
};