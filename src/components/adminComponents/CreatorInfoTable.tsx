import CreatorT from 'types/creatorTypes';
import {StyledCreatorInfoTable} from 'styles/styledAdminComponents'

interface Props {
  creator: CreatorT;
}
const CreatorInfoTable = ({ creator }: Props) => {
  return (
    <StyledCreatorInfoTable>
      <div className='title'><h4>Allgemeine Infos</h4></div>
      <div className='name'>Beigetreten am:</div><div className='property'>{creator.createdAt}</div>
      <div className='name'>Adresse:</div><div className='property'>{`${creator.creator_address} \n${creator.creator_postcode} ${creator.creator_city}`}</div>
      <div className='name'>Geburtsdatum:</div><div className='property'>{ creator.creator_birthday }</div>
      <div className='name'>E-mail:</div><div className='property'>{ creator.creator_email }</div>
      <div className='name'>Telefon</div><div className='property'>{ creator.creator_phone }</div>
      <div className='name'></div><div className='property'></div>
    </StyledCreatorInfoTable>
  )
}

export default CreatorInfoTable