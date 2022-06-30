import axios from "axios";
import CreatorT from "types/creatorTypes";

const creatorApi: any = {};

creatorApi.postCreator = async (creatorData: CreatorT) => {
  try {
    const response = await axios.post(`https://brand-placement-admin.herokuapp.com/creators`, creatorData);
    response && console.log(response)
    return response;
  } catch(err) {
    console.error(err)
  }
}

// post creator route is separate on creatorform page. since it's a publicly accessible part, it seemed misplaced here.
creatorApi.getCreators  = async () => {
  const response = await axios.get(`https://brand-placement-admin.herokuapp.com/admin/creators`, { withCredentials: true });
  return response
}

export default creatorApi;