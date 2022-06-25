import ModalComponent from 'components/ModalComponent';
import EditBusinessForm from 'components/adminComponents/EditBusinessForm';
import { useState } from 'react';
import { StyledGridField, StyledOverviewGrid, } from 'styles/styledAdminComponents';
import { StyledStack } from 'styles/styledSharedComponents';
import BusinessT from 'types/businessTypes';

interface Props {
  business: BusinessT
}

const BusinessField = ({ business }: Props) => {

  const [showBusinessEditModal, setShowBusinessEditModal] = useState(false);

  const handleEditBusiness = () => {
    setShowBusinessEditModal(true);
  }
  const handleCloseEditBusiness = () => {
    setShowBusinessEditModal(false);
  }


  
  return (
    <StyledOverviewGrid className='full-w'>
    <StyledGridField xstart={1} xend={4} ystart={1} yend={2}>
      <h3 className='remove-padding'>{ business.business_name }</h3>
    </StyledGridField>
      <StyledGridField xstart={1} xend={4} ystart={2} yend={3}>
        <p className='remove-padding'>{ business.business_info_private}</p>
    </StyledGridField>
      <StyledGridField xstart={1} xend={4}>
        <>
        {
          business.campaigns && business.campaigns.map((campaign) => { return <p>{`campaign one ${campaign.campaign_name}`}</p> })
        }
        </>
    </StyledGridField>
      <StyledGridField xstart={4} xend={5} ystart={1} yend={4}>
        <StyledStack direction='column'>
          <button>Kampagne hinzufügen</button>
          <button onClick={handleEditBusiness}>bearbeiten</button>
          {
            showBusinessEditModal === true
              ? <ModalComponent show={showBusinessEditModal} onClose={handleCloseEditBusiness}>
                <EditBusinessForm business={ business } />
              </ModalComponent>
              : null
          }
        </StyledStack>
    </StyledGridField>
  </StyledOverviewGrid>
  )
}

export default BusinessField