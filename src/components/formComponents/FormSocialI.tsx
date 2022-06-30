import { useContext, useState } from 'react'; 
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from 'react-icons/fa';
import {
  StyledFormField,
  StyledFormGrid,
  StyledFormHeading,
  StyledAccountNames,
  StyledAccountSelector,
  StyledSocialAccount,
} from 'styles/styledFormComponents';
import CategoriesFormComponent from './CategoriesFormComponent';
import { CategoryProvider } from 'context/CategoryContext';
import { LayoutGroup, motion } from 'framer-motion';
import { StyledGridField } from 'styles/styledAdminComponents';
// social media components (they are repetitive, if I knew how to pass through the FaIcons only one component would be needed)
import {InstaComponent, TiktokComponent, YoutubeComponent, LinkedinComponent} from './UserNameComponents';
import { validateOnNext } from 'helpers/formValidation/validate';
// context
import CreatorContext from 'context/FormContext/CreatorContext';

const FormSocialI = () => {

  // imported 'social' object from context, contains social media channels, 
  // usernames and dynamic categories of interest
  const { social, setSocial, updateCategories, creatorCategories } = useContext(CreatorContext);
  // media contains the ids for the channels selected which are also the 
  // keys to the social object
  const [media, setMedia] = useState<string[]>([]);
  // an object with the components for the social object keys
  const mediaComponents = {
    'creator_insta': <InstaComponent />,
    'creator_tiktok': <TiktokComponent />,
    'creator_youtube': <YoutubeComponent />,
    'creator_linkedin': <LinkedinComponent />
   }
 

  const toggleAccountName = (e: React.ChangeEvent<HTMLInputElement>) => {
    // toggles the context element
    const idOfElement: string = e.target.id;
    // set creator_media to true or false in the result object
    setSocial({ ...social, [idOfElement]: e.target.checked })
    e.target.checked === true 
    // if it has been turned to true, adds the name to the array for mapping through the textfield components
    ? autoFocus([idOfElement, ...media], e.target.id)
    // if it has been turned to false, remove the name from the array
    : setMedia(media.filter(el => el !== idOfElement))
    // map through the array and show each mediaComponent element that has a key of '*whatsinthearray*'
  }

  async function autoFocus (array: string[], focusId: string) {
    const concatNameId = focusId + '_name';
    setMedia(array);
    const element: HTMLElement | null = document.getElementById(concatNameId)
    element && element.focus();
  }
  
  console.log(media)

  return (
    <StyledFormGrid>
      <StyledFormHeading>Meine Medien:</StyledFormHeading>
      <StyledFormField>

          <LayoutGroup>
          <StyledAccountSelector layoutId='icons'>
            {/* StyledSocialAccount is the label, checked is added so the styled components can style the icon 'sibling' */}
          <StyledSocialAccount htmlFor='creator_insta' checked={social.creator_insta}>
            <span className='hidden'>Instagram</span>
          <FaInstagram className='icon' />
              <input className='hidden' type='checkbox' id='creator_insta' onChange={e => toggleAccountName(e)} checked={social.creator_insta} value={`${social.creator_insta}`} />
          </StyledSocialAccount>
          <StyledSocialAccount htmlFor='creator_tiktok' checked={social.creator_tiktok}>
            <span className='hidden'>TikTok</span>
          <FaTiktok className='icon' />
            <input className='hidden' type='checkbox' id='creator_tiktok' onChange={e => toggleAccountName(e)} checked={social.creator_tiktok} value={`${social.creator_tiktok}`} />
          </StyledSocialAccount>
          <StyledSocialAccount htmlFor='creator_youtube' checked={social.creator_youtube}>
            <span className='hidden'>Youtube</span>
          <FaYoutube className='icon' />
            <input className='hidden' type='checkbox' id='creator_youtube' onChange={e => toggleAccountName(e)} checked={social.creator_youtube} value={`${social.creator_youtube}`} />
          </StyledSocialAccount>
          <StyledSocialAccount htmlFor='creator_linkedin' checked={social.creator_linkedin}>
            <span className='hidden'>Linkedin</span>
          <FaLinkedin className='icon' />
            <input className='hidden' type='checkbox' id='creator_linkedin' onChange={e => toggleAccountName(e)} checked={social.creator_linkedin} value={`${social.creator_linkedin}`} />
          </StyledSocialAccount>
        </StyledAccountSelector>
        <StyledAccountNames>
          {
          // map through the media array and have the components indexed in an object, for each of the components, 
            media.map(el => {
              return(
                <motion.div key={el} layoutId={el}>
                {
                  // @ts-ignore okok, there's something that can be done using keyof typeof as well. Another day.
                  mediaComponents[el]
                }
              </motion.div>
              )
            }
            ) 
          }
        </StyledAccountNames>
          </LayoutGroup>
      </StyledFormField>
      <CategoryProvider>
        
      <StyledGridField xstart={1} xend={5} className='left-align'>
          <CategoriesFormComponent onUpdateSelected={updateCategories} checked={ creatorCategories } ></CategoriesFormComponent>
      </StyledGridField>
      </CategoryProvider>
      {/* <StyledFormField>
// TODO: for file upload
      <input type='file'></input>
      <input type='file'></input>
      </StyledFormField> */}
  </StyledFormGrid>
  )
}

export default FormSocialI