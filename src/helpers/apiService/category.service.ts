import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL

export const getCategoriesOnly = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/categories`);
    return data;
 } catch (err) {
   console.error(err);
  }
}