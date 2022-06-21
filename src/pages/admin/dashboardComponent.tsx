import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledDashboardGrid } from 'styles/styledAdminComponents';
import CreatorField from 'components/adminComponents/CreatorField';
import CreatorT from 'types/creatorTypes';

const DashboardComponent = () => {

  const [newCreators, setNewCreators] = useState<CreatorT[]>([]);

  useEffect(() => {
    const getCreators = async () => {
      const response = await fetch(`http://localhost:5000/admin/creators/new`);
      const data = await response.json();
      console.log('thats where the data should be displayed >>>>>>>>>>>>>>>>>>>>>>>>>>><<', data)
      setNewCreators(data)
    }
    getCreators()
  }, []);

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
      <div className='heading full-w'>
        <h2>New Creators</h2>
      </div>

    {
        newCreators.map(cr => <CreatorField creator={cr} accept={acceptCreator} onRemove={ handleRemove } key={`${cr.id}`} />)
    }
    </StyledDashboardGrid>
  )
}

export default DashboardComponent