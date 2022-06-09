import { useEffect, useState } from 'react';
import CreatorT from 'types/creatorTypes';


const AdminCreators = () => {

  const [creators, setCreators] = useState<CreatorT[]>(null!);

  useEffect(() => {
    const getCreators = async () => {
      const crs = await fetch(`${process.env.REACT_APP_BASE_URL}/creators`)
      const res = await crs.json();
      setCreators(res)
    }
    getCreators();
  }, [])

  return (
    <div>
      {
       creators && creators.map(cr => <div>{ cr.creator_first_name }</div>)
      }
    </div>
  )
}

export default AdminCreators