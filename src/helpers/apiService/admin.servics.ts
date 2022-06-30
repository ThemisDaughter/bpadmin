import axios from "axios"

export const adminLogin = async (userData: { username: string, password: string }) => {
  const { data } = await axios.post(`http://localhost:5000/admin/login`, userData, { withCredentials: true })
  if (data) sessionStorage.setItem("user role", data.userRole);
  return data;
}