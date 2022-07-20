import axios from "axios";
import CreatorT from "types/creatorTypes";
const baseUrl = process.env.REACT_APP_BASE_URL
// TODO:
const creatorApi: any = {};

creatorApi.postCreator = async (creatorData: CreatorT) => {
  try {
    const response = await axios.post(`${baseUrl}/creators`, creatorData);
    response && console.log(response)
    return response;
  } catch(err) {
    console.error(err)
  }
}

// post creator route is separate on creatorform page. since it's a publicly accessible part, it seemed misplaced here.
creatorApi.getCreators  = async () => {
  const response = await axios.get(`${baseUrl}/admin/creators`, { withCredentials: true });
  return response
}

export default creatorApi;