import { createContext, useState, ReactNode } from 'react';
import { PersonalT, SocialT, ContactT, ContextValue } from './creatorContextTypes';
import CategoryT from 'types/categoryTypes';
import creatorApi from 'helpers/apiService/creator.service';

const personalInfo:PersonalT = {
  creator_first_name: '',
  creator_last_name: '',
  creator_address: '',
  creator_postcode: '',
  creator_city: '',
  creator_birthday: ''
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



const CreatorContext = createContext<ContextValue>(null!);
export default CreatorContext;

export const CreatorProvider = ({ children }: { children: ReactNode }) => {
  
  
  const [personal, setPersonal] = useState(personalInfo);
  const [social, setSocial] = useState(socialInfo);
  const [contact, setContact] = useState(contactInfo);
  const [creatorCategories, setCreatorCategories] = useState<string[]>([]);

  const [isUserError, setIsUserError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  
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


    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      personal.creatorCategories = creatorCategories;
      const res = { ...personal, ...social, ...contact }
      const success = await creatorApi.postCreator(res);
      success ? setIsLoading(false)
        : setIsSuccess(true)
    }
  
  return (
    <CreatorContext.Provider value={{ personal, updatePersonal, social, updateSocial,  setSocial, contact, updateContact, updateCategories,creatorCategories, submitForm, isLoading, isSuccess, isUserError, setIsUserError}} >
     { children }
    </CreatorContext.Provider>
    )
}
