import StyledStack from 'styles/styledSharedComponents/styledStack';
import BusinessT from 'types/businessTypes';
interface Props {
  business: BusinessT; 
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmitBusiness: (e: React.FormEvent<HTMLFormElement>) => void;
}

const BusinessForm = ({ business, onChange, onSubmitBusiness }: Props) => {

  return (
    <div>
      <h4>new business</h4>

      <form onSubmit={e => onSubmitBusiness(e)}>
        <StyledStack direction='column'>
          
        <label htmlFor='business-name'>Name:</label>
        <input id='business_name' type='text' value={business.business_name} onChange={ (e) => onChange(e) }></input>
        <label htmlFor='business-constact'>Kontaktperson:</label>
        <input id='business_contact' type='text' value={business.business_contact} onChange={ (e) => onChange(e) }></input>
        <label htmlFor='business_email'>Email:</label>
        <input id='business_email' type='text' value={business.business_email} onChange={ (e) => onChange(e) }></input>
        <label htmlFor='business_phone'>Tel. / Mobile:</label>
        <input id='business_phone' type='text' value={business.business_phone} onChange={ (e) => onChange(e) }></input>
        <label htmlFor='business_info_private'>Notizen:</label>
          <textarea name='business_info_private' id='business_info_private' onChange={ e => onChange(e)} value={ business.business_info_private }></textarea>
        </StyledStack>
        <input type='submit' value='submit' />
    </form>
    </div>
  )
}

export default BusinessForm