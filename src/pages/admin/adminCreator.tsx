import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { StyledAdminWindow, StyledGridField, StyledDashboardGrid } from '../../styles/styledAdminComponents';
import CreatorPortraitComponent from 'components/adminComponents/reuseableGridComponents/creatorPortraitComponent';
import CategoryListComponent from 'components/adminComponents/reuseableGridComponents/categoryListComponent';
import SocialMediaList from 'components/SocialMediaList';
import CreatorInfoTable from 'components/adminComponents/CreatorInfoTable';
import CreatorT from 'types/creatorTypes';

const AdminCreatorComponent = () => {

  const { creatorId } = useParams();

// get the creator (again) from the database - caching would be helpful later...
// if the creator is new, the only option is to look at the images (zoom in) and see some
  // more details
  const [activeCreator, setActiveCreator] = useState<CreatorT | null>(null);

  useEffect(() => {
    const getCreator = async () => {
      console.log('function running')
      
      console.log('going to fetch http://localhost:5000/creator/' + creatorId)
      const cr = await fetch(`http://localhost:5000/creator/${creatorId}`);
      // const cr = await fetch(`${process.env.BASE_URL}/creator/${creatorId}`);
      const creator = await cr.json();
      setActiveCreator(creator);
    }
    getCreator();
  }, [creatorId]);


  return (
    <StyledAdminWindow>
      <StyledDashboardGrid>
        <StyledGridField xstart={6} xend={7} ystart={1} yend={2}>bearbeiten</StyledGridField>
        <StyledGridField xstart={3} xend={5} ystart={1} yend={2}>
          <CreatorPortraitComponent imageUrl='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' firstName={activeCreator?.creator_first_name} lastName={activeCreator?.creator_last_name} size={8}></CreatorPortraitComponent>
        </StyledGridField>
        <StyledGridField xstart={1} xend={5} ystart={2} yend={4}>
          {
            activeCreator &&  <CreatorInfoTable creator={activeCreator}></CreatorInfoTable>

          }
        </StyledGridField>
        <StyledGridField xstart={5} xend={7} ystart={2} yend={3} className='left-align'>
          {
            activeCreator && (
              <div>
              <h4>kategorien</h4>
              <CategoryListComponent creator={activeCreator} />
              </div>
            )
          }
        </StyledGridField>
       <StyledGridField xstart={5} xend={7} ystart={3} yend={4} className='left-align'>
          {
            activeCreator && (
              <div>
                <h4>soziale Medien</h4>
              <SocialMediaList creator={activeCreator} />
              </div>
            )
          }
        </StyledGridField>
      </StyledDashboardGrid>
      
    </StyledAdminWindow>
  )
}

export default AdminCreatorComponent