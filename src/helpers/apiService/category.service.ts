import axios from 'axios';

export const getCategoriesOnly = async () => {
  try {
    const { data } = await axios.get(`http://localhost:5000/categories`);
    return data;
 } catch (err) {
   console.error(err);
  }
}