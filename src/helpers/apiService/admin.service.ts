import { AxiosError } from "axios";
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL

export const adminLogin = async (userData: { username: string, password: string }) => {
  try { 
    const { data } = await axios.post(`${baseUrl}/admin/login`, userData, { withCredentials: true })
    return data;
  } catch (err) {
    if((err as AxiosError).response) return err;
  }
}
export const adminLogout = async () => {
  const { data } = await axios.delete(`${baseUrl}/admin/logout`, { withCredentials: true });
  console.log(data)
  return data
}