import { useContext } from 'react';
import CreatorContext from 'context/FormContext/CreatorContext';
import {
  StyledFormGrid,
  StyledFormHeading
} from '../../styles/styledFormComponents';
import {StyledConfirmationSection} from 'styles/styledFormComponents/styledConfirmationSection';


const FormConfirm = () => {
  const { personal, contact } = useContext(CreatorContext);

  return (
    <StyledFormGrid>

      <StyledFormHeading>Übersicht</StyledFormHeading>
      <StyledConfirmationSection>
      <h3 className='title'>Persönlich</h3>
        <div className='field'>
          <span className='key'>Name: </span><span className='value'>{ `${personal.creator_first_name} ${personal.creator_last_name}` }</span>
        </div>
        <div className='field'>
          <span className='key'>Adresse: </span><span className='value'>{ `${personal.creator_address}` }</span>
        </div>
        <div className='field'>
          <span className='key'>Wohnort: </span><span className='value'>{ `${personal.creator_postcode} ${personal.creator_city}` }</span>
        </div>
        <div className='field'>
          <span className='key'>Geburtstag: </span><span className='value'>{ `${personal.creator_birthday}` }</span>
        </div>
        <h3 className='title'>Soziale Medien</h3>
        <div className='field'>
         <span className='key'>hier kommt eine Liste der Medien: </span><span className='value'>{  }</span>
        </div>
        <div className='field'>
          <span className='key'>und der Rubriken: </span><span className='value'>{  }</span>
        </div>
        <h3 className='title'>Kontaktangaben</h3>
        <div className='field'>
          <span>E-Mail</span><span>{ `${contact.creator_email}` }</span>
        </div>
        <div className='field'>
          <span>Telefon</span><span>{ `${contact.creator_phone}` }</span>
        </div>
        <div>
          <span>Nachricht</span><div className='field'>{ `${contact.creator_message}` }</div>
        </div>
        
      </StyledConfirmationSection>
      
    </StyledFormGrid>
  )
}

export default FormConfirm