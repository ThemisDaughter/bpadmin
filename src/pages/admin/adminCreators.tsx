import { useEffect, useState } from 'react';
import CreatorT from 'types/creatorTypes';
import creatorApi from 'helpers/apiService/creator.service';

const AdminCreators = () => {

  const [creators, setCreators] = useState<CreatorT[]>(null!);

  useEffect(() => {
    (async() => {
      const response = await creatorApi.getCreators();
      response && !response.message && setCreators(response.data)
      if(response.message) console.log(response.message)
    })();
  }, []);

  return (
    <div>
      <h4>creeators shoold be hyre</h4>
      {
       creators && creators.map(cr => <div>{ cr.creator_first_name }</div>)
      }
    </div>
  )
}

export default AdminCreators