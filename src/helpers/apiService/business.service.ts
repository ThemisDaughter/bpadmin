import axios from "axios";
import BusinessT from "types/businessTypes";
const baseUrl = process.env.REACT_APP_BASE_URL

const businessApi:any = {};

businessApi.postBusiness = async (newBusiness: BusinessT) => {
  try {
    const response = await axios.post(`${baseUrl}/admin/businesses`, newBusiness, { withCredentials: true });
    return response;
  } catch (err) {
    return err;
  }
}
businessApi.getBusinesses = async () => {
  const response = await axios.get(`${baseUrl}/admin/businesses`, { withCredentials: true });
  return response
}
businessApi.updateBusiness = async (businessId: string, patch: {[key: string]: string}) => {
  const response = await axios.patch(`${baseUrl}/admin/business/${businessId}`, patch, { withCredentials: true });
  return response
}

export default businessApi;