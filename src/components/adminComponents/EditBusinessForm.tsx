import React, { useState } from 'react'
import { StyledFormGrid, StyledFormField } from 'styles/styledFormComponents';
import { BsPencilSquare } from 'react-icons/bs';
import BusinessT from 'types/businessTypes'
import { convertToTextInput } from 'helpers/apiService/convertActions';
import businessApi from 'helpers/apiService/business.service';

interface Props {
  business: BusinessT
}

const EditBusinessForm = ({ business }: Props) => {
  // convert the values to values that work for 
  const normalisedBusiness = convertToTextInput(business);

 
  // changing values
  const [businessName, setBusinessName] = useState(normalisedBusiness!.business_name)
  const [contact, setContact] = useState(normalisedBusiness!.business_contact)
  const [email, setEmail] = useState(normalisedBusiness!.business_mail)
  const [phone, setPhone] = useState(normalisedBusiness!.business_phone)
  const [info, setInfo] = useState(normalisedBusiness!.business_info_private)
  
  // saving updated values
  const [updates, setUpdates] = useState<any>({})

  // fields are disabled if disabled is true
  const [nameDisabled, setNameDisabled] = useState({ disabled: true })
  const [contactDisabled, setContactDisabled] = useState({ disabled: true })
  const [emailDisabled, setEmailDisabled] = useState({ disabled: true })
  const [phoneDisabled, setPhoneDisabled] = useState({ disabled: true })
  const [infoDisabled, setInfoDisabled] = useState({ disabled: true })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, valueSetter: React.Dispatch<React.SetStateAction<string>>) => {
    e.preventDefault();

    setUpdates({...updates, [e.target.id]: e.target.value});

    valueSetter(e.target.value)
  }

  // on editField, saves the original value in defaults state and changes the input to editable
  const editField = (e: React.MouseEvent<HTMLButtonElement>, disableSetter: React.Dispatch<React.SetStateAction<{
    disabled: boolean;
  }>>) => {
    e.preventDefault();
    disableSetter({ disabled: false });
  }
  // removes the property from updates, sets the field to disabled again
  const cancelChange = (e: React.MouseEvent<HTMLButtonElement>, disableSetter: React.Dispatch<React.SetStateAction<{
    disabled: boolean;
  }>>, valueSetter: React.Dispatch<React.SetStateAction<string>>, key: string) => {
    e.preventDefault();

    // filter out the value from the updates
    setUpdates((prev: { [x: string]: string; }) => {
      delete prev[key]
      return prev
    });
    // set value back to defaults[key]
    // @ts-ignore
    valueSetter(normalisedBusiness[key])
    console.log(updates)
    disableSetter({ disabled: true })
  }
  // if this is the only change, updateCounter will be set to 0 and the submit field is disabled
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('sending updates: ', updates)
    const result = await businessApi.updateBusiness(business.id, updates);
    result && console.log(result)
    // send the business Id and the updates to the backend
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
    <StyledFormGrid >
{/* business name field  */}
      <StyledFormField span='1'>Unternehmen</StyledFormField>
      <StyledFormField span='3'>
        <input type='text' value={businessName} {...nameDisabled} id='business_name' onChange={e => handleChange(e, setBusinessName)} />
        {/* button to enable text edit */}
        {
          nameDisabled.disabled
            ? <button onClick={e => editField(e, setNameDisabled)} ><BsPencilSquare></BsPencilSquare></button>
            : <button onClick={e => cancelChange(e, setNameDisabled, setBusinessName, 'business_name')}>Änderung abbrechen</button>
        }
      </StyledFormField>
      {/* business contact name */}
      <StyledFormField span='1'>Kontaktperson</StyledFormField>
      <StyledFormField span='3'>
        <input type='text' value={contact} {...contactDisabled} id='business_contact' onChange={e => handleChange(e, setContact)} />
        {
          contactDisabled.disabled
            ? <button onClick={e => editField(e, setContactDisabled)} ><BsPencilSquare></BsPencilSquare></button>
            : <button onClick={e => cancelChange(e, setContactDisabled, setContact, 'business_contact')}>Änderung abbrechen</button>
        }
      </StyledFormField>
      {/* business email field */}
      <StyledFormField span='1'>E-Mail</StyledFormField>
      <StyledFormField span='3'>
        <input type='text' value={email} {...emailDisabled} id='business_mail' onChange={e => handleChange(e, setEmail)} />
        {/* button to enable text edit */}
        {
          emailDisabled.disabled
            ? <button onClick={e => editField(e, setEmailDisabled)} ><BsPencilSquare></BsPencilSquare></button>
            : <button onClick={e => cancelChange(e, setEmailDisabled, setEmail, 'business_mail')}>Änderung abbrechen</button>
        }
      </StyledFormField>
      {/* business phone field */}
      <StyledFormField span='1'>Tel./Handy</StyledFormField>
      <StyledFormField span='3'>
        <input type='text' value={phone} {...phoneDisabled} id='business_phone' onChange={e => handleChange(e, setPhone)} />
        {/* button to enable text edit */}
        {
          phoneDisabled.disabled
            ? <button onClick={e => editField(e, setPhoneDisabled)} ><BsPencilSquare></BsPencilSquare></button>
            : <button onClick={e => cancelChange(e, setPhoneDisabled, setPhone, 'business_phone')}>Änderung abbrechen</button>
        }
      </StyledFormField>
      {/* business info field */}
      <StyledFormField span='1'>Info</StyledFormField>
      <StyledFormField span='3'>
        <input type='text' value={info} {...infoDisabled} id='business_info_private' onChange={e => handleChange(e, setInfo)} />
        {/* button to enable text edit */}
        {
          infoDisabled.disabled
            ? <button onClick={e => editField(e, setInfoDisabled)} ><BsPencilSquare></BsPencilSquare></button>
            : <button onClick={e => cancelChange(e, setInfoDisabled, setBusinessName, 'business_info_private')}>Änderung abbrechen</button>
        }
      </StyledFormField>
      {/* phew, finally done! */}

      <input type='submit' value='Änderungen speichern'></input>
    </StyledFormGrid>
    </form>
  )
}

export default EditBusinessForm