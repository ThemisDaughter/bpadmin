import { createContext, useState, ReactNode } from 'react';
import { PersonalT, SocialT, ContactT } from './creatorContextTypes';


const personalInfo:PersonalT = {
  creator_first_name: '',
  creator_last_name: '',
  creator_address: '',
  creator_postcode: '',
  creator_city: '',
  creator_birthday: '2000-01-01'
}
const socialInfo:SocialT = {
  creatorCategories: [],
  creator_insta: false,
  creator_insta_name: '',
  creator_twitter: false,
  creator_twitter_name: '',
  creator_facebook: false,
  creator_facebook_name: '',
  creator_tiktok: false,
  creator_tiktok_name: '',
  creator_youtube: false,
  creator_youtube_name: '',
  creator_linkedin: false,
  creator_linkedin_name: ''
}
const contactInfo:ContactT = {
  creator_email: '',
  creator_phone: '',
  creator_message: ''
}


type ContextValue = {
  personal: PersonalT;
  updatePersonal: (e:React.ChangeEvent<HTMLInputElement>) => void;
  social: SocialT;
  updateSocial: (e:React.ChangeEvent<HTMLInputElement>) => void;
  contact: ContactT;
  updateContact: (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: Boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  // update = () => {}
}


const CreatorContext = createContext<ContextValue>(null!);
export default CreatorContext;

export const CreatorProvider= ({ children }: { children: ReactNode }) => {
  
  const [personal, setPersonal] = useState(personalInfo);
  const [social, setSocial] = useState(socialInfo);
  const [contact, setContact] = useState(contactInfo);
  const [isLoading, setIsLoading] = useState(false);
  
  const updatePersonal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonal(prev => {
      const newPersonal = {...prev, [e.target.id]: e.target.value}
      return newPersonal
    })
  }

  const updateSocial = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSocial(prev => {
      const newSocial = {...prev, [e.target.id]: e.target.value}
      return newSocial
    })
  }
  const updateContact = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setContact(prev => {
      const newContact = {...prev, [e.target.id]: e.target.value}
      return newContact
    })
  }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      console.log('result: ' + { ...personal, ...social, ...contact })
      // have personal['key'] listed in an array for all the items that are required, 
      // check that none of them are empty, if there are still empty strings, highlight the form fields and
      // let the user click on them to modify by looking for the formfield byId.
      // also, find a method to link the submission fields to the input fields
    }
  
  return (
    <CreatorContext.Provider value={{ personal, updatePersonal, social, updateSocial, contact, updateContact, submitForm, isLoading, setIsLoading}} >
     { children }
    </CreatorContext.Provider>
    )
}
