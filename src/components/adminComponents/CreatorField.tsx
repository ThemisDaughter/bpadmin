import CreatorT from "types/creatorTypes";
import { useState } from 'react';
import { StyledOverviewGrid, StyledGridField } from 'styles/styledAdminComponents';
import CreatorPortraitComponent from 'components/adminComponents/reuseableGridComponents/creatorPortraitComponent';
import CategoryListComponent from 'components/adminComponents/reuseableGridComponents/categoryListComponent';
import SocialMediaList from 'components/SocialMediaList';
import CreatorDashboardButtons from "./creatorDashboardButtons";

interface Props {
  creator: CreatorT;
  accept: (creatorId: string) => void;
  onRemove: (creatorId: string) => void;
}

const CreatorField = ({ creator, accept, onRemove }: Props) => {

  const [status, setStatus] = useState('new')
  
  const onAccept = async () => {
    try {
      const success = creator.id && await accept(creator.id);
      success && setStatus('accepted');
    } catch (err) {
      console.log('error in client when accepting new creator')
    }
  }

  return (
    <StyledOverviewGrid className='full-w'>
      <StyledGridField xstart={1} xend={5} ystart={1} yend={2}>
        <h3 className='remove-padding'>{ `${creator.creator_first_name} ${creator.creator_last_name} ${status==='accepted' ? '- bestätigt' : ''}` }</h3>
      </StyledGridField>
      <StyledGridField xstart={1} xend={2} ystart={1} yend={3}>
        <CreatorPortraitComponent imageUrl='https://bglaw.com/wp-content/uploads/2020/05/avatar-placeholder-570x570.png' size={ 4 } />
      </StyledGridField>
      <StyledGridField xstart={2} xend={3} className='left-align'>
        <SocialMediaList creator={creator} />
      </StyledGridField>
      <StyledGridField xstart={3} xend={4} className='left-align' >

      {/* //////////// needs work ////////////// */}
        <CategoryListComponent creator={creator} />
      </StyledGridField>
      <CreatorDashboardButtons onAccept={onAccept} onRemove={onRemove} creator={creator} status={status} />
    </StyledOverviewGrid>
  )
}

export default CreatorField