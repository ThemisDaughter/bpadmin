import axios from 'axios';

export const getCategoriesOnly = async () => {
  try {
    const { data } = await axios.get(`https://brand-placement-admin.herokuapp.com/categories`);
    return data;
 } catch (err) {
   console.error(err);
  }
}