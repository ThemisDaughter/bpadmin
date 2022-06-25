import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledDashboardGrid } from 'styles/styledAdminComponents';
import CreatorField from 'components/adminComponents/CreatorField';
import CreatorT from 'types/creatorTypes';
import useAxios from 'hooks/useAxios';
import axios from 'axios';

const DashboardComponent = () => {

  const navigate = useNavigate();
  const [newCreators, setNewCreators] = useState<CreatorT[]>([]);
  const [activeCampaigns, setActiveCampaigns] = useState<any[]>([]);

  useEffect(() => {

    const getCreators = async () => {
      const res = await axios.get(`http://localhost:5000/admin/creators/new`, {withCredentials: true});
      console.log('thats where the data should be displayed >>>>>>>>>>>>>>>>>>>>>>>>>>><<',res.data)
      if (res.data.message) navigate('/admin/unauthorised')
      setNewCreators(res.data)
    }
    const getActiveCampaigns = async () => {
      const res = await axios.get(`http://localhost:5000/admin/campaigns/active`, { withCredentials: true });
      if (res.data.message) navigate('/admin/unauthorised')
      console.log('this is where the active campaigns should be', res.data)
      setActiveCampaigns(res.data)
    }

    getCreators();
    getActiveCampaigns();

  }, []);

  //hook has its problems (console logging fetchCreators but outputting blank screen of death)
  // const fetchCreators = useAxios({ url: `http://localhost:5000/admin/creators/new`, method: 'get' })
  // const fetchActiveCampaigns = useAxios({ url: 'http://localhost5000/admin/campaigns/active', method: 'get' })
  
  // fetchCreators && console.log(fetchCreators.response)
  // @ts-ignore
  // fetchCreators && setNewCreators(fetchCreators.response);

  const acceptCreator = async (creator: string) => {
    // const success = await fetch(`${process.env.BASE_URL}/creator/${creator}/accept`)
    const success = await fetch(`http://localhost:5000/admin/creator/${creator}/accept`,
      { method: 'PATCH' });
    return success;
  }
  const handleRemove = (crId: string) => {
    setNewCreators(newCreators.filter(cr => cr.id !== crId))
  }


  return (

    <StyledDashboardGrid>
      <div className='heading full-w' >
        <h2>New Creators</h2>
      </div>

    {
        newCreators.map(cr => <CreatorField creator={cr} accept={acceptCreator} onRemove={ handleRemove } key={`cr_${cr.id}`} />)
    }
    </StyledDashboardGrid>
  )
}

export default DashboardComponent