import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL

export const adminLogin = async (userData: { username: string, password: string }) => {
  const { data } = await axios.post(`${baseUrl}/admin/login`, userData, { withCredentials: true })
  return data;
}
export const adminLogout = async () => {
  const { data } = await axios.delete(`${baseUrl}/admin/logout`)
  console.log(data)
  return data
}