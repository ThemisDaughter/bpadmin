import React, { useEffect, useState } from 'react'
import { StyledDashboardGrid } from 'styles/styledAdminComponents';
import StyledStack from 'styles/styledSharedComponents/styledStack'
import ModalComponent from 'components/ModalComponent';
import BusinessForm from 'components/adminComponents/BusinessForm';
import BusinessT from 'types/businessTypes';
import { businessValidator } from 'helpers/formValidation/validators';
import { validateOnSubmit } from 'helpers/formValidation/validate';
import businessApi from 'helpers/apiService/business.service';
import BusinessField from 'components/adminComponents/BusinessField';


const AdminBusinessesComponent = () => {

  const defaults: BusinessT = {
    business_name: '',
    business_contact: '',
    business_email: '',
    business_phone: '',
    business_info_private: ''
  }

  const [renderModal, setRenderModal] = useState(false);
  const [business, setBusiness] = useState<BusinessT>(defaults)
  const [allBusinesses, setAllBusinesses] = useState<BusinessT[]>([]);
 
 
  // gets all the businesses from the db
  useEffect(() => {
    (async function () {
      const response = await businessApi.getBusinesses();
      response && !response.message && setAllBusinesses(response.data);
      if (response.message) console.log(response.message)
    })();
  }, [])

  // submit Business to DB and closes modal
  const handleSubmitBusiness = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let { isValid, errorMessage, formField } = validateOnSubmit(business, businessValidator);
    if (isValid) {
      const response = await businessApi.postBusiness(business);
      response && response.status === 201
        ? setTimeout(() => setBusiness(defaults), 500)
        : console.log(response.statusText);

      // console.log(response)
    } else {
      console.log(errorMessage, formField)
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault()
    // @ts-ignore
    setBusiness(prev => { return { ...prev, [e.target.id]: e.target.value } });
  }

  
  // open / close Modal
  const openBusinessModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setRenderModal(true);
  }
  const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setRenderModal(false);
    setBusiness(defaults)
  }

  return (
    <StyledDashboardGrid >
      {/* conditionally rendered modal component */}
      <>
        <ModalComponent show={renderModal} onClose={closeModal}>
          <BusinessForm business={business} onSubmitBusiness={handleSubmitBusiness} onChange={handleChange} />
        </ModalComponent>
        {/* business list */}
        <StyledStack justify='space-between' className='heading full-w'>
          <h2>Unternehmen</h2><button onClick={(e) => openBusinessModal(e)}>Unternehmen hinzufügen</button>
        </StyledStack>
        {/* Business Fields mapped */}
        {
          allBusinesses && allBusinesses.map((b, i) => {
            return <BusinessField business={b} key={`${b.id}${i}`} />
          })
        }
      </>
    </StyledDashboardGrid>
  )
}

export default AdminBusinessesComponent