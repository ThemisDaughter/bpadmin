
interface BusinessT {
  id?: string;
  business_name: string;
  business_contact: string;
  business_email: string;
  business_phone?: string;
  business_info_private?: string;
  campaigns?: any[];
  createdAt?: string;
  updatedAt?: string;
}
export default BusinessT;
