import { useEffect, useState } from 'react';
import { StyledDashboardGrid } from 'styles/styledAdminComponents';
import CreatorField from 'components/adminComponents/CreatorField';
import CreatorT from 'types/creatorTypes';
import axios from 'axios';

const DashboardComponent = () => {

  const [newCreators, setNewCreators] = useState<CreatorT[]>([]);
  const [activeCampaigns, setActiveCampaigns] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {

    const getCreators = async () => {
      const res = await axios.get(`http://localhost:5000/admin/creators/new`, {withCredentials: true});
      console.log('thats where the data should be displayed >>>>>>>>>>>>>>>>>>>>>>>>>>><<',res.data)
      if (res.data.message) setErrorMessage(res.data.message)
      res && setNewCreators(res.data)
    }
    const getActiveCampaigns = async () => {
      const res = await axios.get(`http://localhost:5000/admin/campaigns/active`, { withCredentials: true });
      if (res.data.message) setErrorMessage(res.data.message)
      res && setActiveCampaigns(res.data)
    }

    getCreators();
    getActiveCampaigns();

  }, []);

  //hook has its problems (console logging fetchCreators but outputting blank screen of death)
  // const fetchCreators = useAxios({ url: `http://localhost:5000/admin/creators/new`, method: 'get' })
  // const fetchActiveCampaigns = useAxios({ url: 'http://localhost5000/admin/campaigns/active', method: 'get' })


  const acceptCreator = async (creatorId: string) => {
    // const success = await fetch(`${process.env.BASE_URL}/creator/${creator}/accept`)
    const success = await fetch(`https://brand-placement-admin.herokuapp.com/admin/creator/${creatorId}/accept`,
      { method: 'PATCH' });
    return success;
  }
  const handleRemove = (crId: string) => {
    setNewCreators(newCreators.filter(cr => cr.id !== crId))
  }

  console.log(activeCampaigns)
  return (

    <StyledDashboardGrid>
      <div className='heading full-w' >
        <h2>New Creators</h2>
        {
          errorMessage && <p>{ errorMessage }</p>
        }
      </div>

    {
       newCreators && newCreators.map(cr => <CreatorField creator={cr} accept={acceptCreator} onRemove={ handleRemove } key={`cr_${cr.id}`} />)
    }
    </StyledDashboardGrid>
  )
}

export default DashboardComponent