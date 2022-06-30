import axios from "axios";
import BusinessT from "types/businessTypes";

const businessApi:any = {};

businessApi.postBusiness = async (newBusiness: BusinessT) => {
  const response = await axios.post(`https://brand-placement-admin.herokuapp.com/admin/businesses`, newBusiness, { withCredentials: true });
  return response;
}
businessApi.getBusinesses = async () => {
  const response = await axios.get(`https://brand-placement-admin.herokuapp.com/admin/businesses`, { withCredentials: true });
  return response
}
businessApi.updateBusiness = async (businessId: string, patch: {[key: string]: string}) => {
  const response = await axios.patch(`https://brand-placement-admin.herokuapp.com/admin/business/${businessId}`, patch, { withCredentials: true });
  return response
}

export default businessApi;