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
  updateContact: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  updateCategories: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  const [creatorCategories, setCreatorCategories] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  
  const updatePersonal = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPersonal({...personal, [e.target.id]: e.target.value})
  }

  const updateSocial = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSocial({...social, [e.target.id]: e.target.value})
  }

  const updateCategories = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.currentTarget;
    if (!checked) {
      setCreatorCategories(creatorCategories.filter(cat => cat !== value))
    } else {
      setCreatorCategories([...creatorCategories, value])
    }
  }

  const updateContact = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setContact( {...contact, [e.target.id]: e.target.value})
  }


    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      personal.creatorCategories = creatorCategories;
      console.log('result: ' + JSON.stringify({ ...personal, ...social, ...contact }))
    }
  
  return (
    <CreatorContext.Provider value={{ personal, updatePersonal, social, updateSocial, contact, updateContact, updateCategories, submitForm, isLoading, setIsLoading}} >
     { children }
    </CreatorContext.Provider>
    )
}
