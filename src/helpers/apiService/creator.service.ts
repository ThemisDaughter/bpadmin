import axios from "axios";
import CreatorT from "types/creatorTypes";

const creatorApi: any = {};

creatorApi.postCreator = async (creatorData: CreatorT) => {
  const response = await axios.post(`http://localhost:5000/admin/creators`, creatorData);
}

// post creator route is separate on creatorform page. since it's a publicly accessible part, it seemed misplaced here.
creatorApi.getCreators  = async () => {
  const response = await axios.get(`http://localhost:5000/admin/creators`, { withCredentials: true });
  return response
}

export default creatorApi;