import axios from "axios"

export const adminLogin = async (userData: { username: string, password: string }) => {
  const { data } = await axios.post(`https://brand-placement-admin.herokuapp.com/admin/login`, userData, { withCredentials: true })
  return data;
}