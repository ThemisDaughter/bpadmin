import { useContext, useState } from 'react'; 
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from 'react-icons/fa';
import {
  StyledFormField,
  StyledFormGrid,
  StyledFormHeading,
  StyledAccountNames,
  StyledAccountSelector
} from 'styles/styledFormComponents';
import CategoriesFormComponent from './CategoriesFormComponent';
import { CategoryProvider } from 'context/CategoryContext';
import { LayoutGroup, motion } from 'framer-motion';
import { StyledGridField } from 'styles/styledAdminComponents';
// social media components (they are repetitive, if I knew how to pass through the FaIcons only one component would be needed)
import {InstaComponent, TiktokComponent, YoutubeComponent, LinkedinComponent} from './UserNameComponents';
// import TiktokComponent from './userNameComponents/TiktokComponent';
// import YoutubeComponent from './userNameComponents/YoutubeComponent';
// import LinkedinComponent from './userNameComponents/LinkedinComponent';
// context
import CreatorContext from 'context/FormContext/CreatorContext';

const FormSocialI = () => {

  // imported 'social' object from context, contains social media channels, 
  // usernames and dynamic categories of interest
  const { social, updateSocial, updateCategories } = useContext(CreatorContext);
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
// select category ids in category component: 
 

  const toggleAccountName = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    // toggles the context element
    const idOfElement: string = e.target.id;
    //@ts-ignore
    console.log('before ', social[idOfElement])
    //@ts-ignore
    social[idOfElement] = !social[idOfElement];
    //@ts-ignore
    console.log('current ', social[idOfElement])
    //@ts-ignore
    social[idOfElement] === true 
    // if it has been turned to true, add the name to the array
    ? autoFocus([idOfElement, ...media], e.target.id)
    // if it has been turned to false, remove the name from the array
    : setMedia(media.filter(el => el !== idOfElement))
    // map through the array and show each mediaComponent element that has a key of '*whatsinthearray*'
  }

  async function autoFocus (array: string[], focusId: string) {
    const concatNameId = focusId + '_name';
    await setMedia(array);
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
          <label htmlFor='creator_insta'>
            <span className='hidden'>Instagram</span>
          <FaInstagram className='icon' />
            <input className='hidden' type='checkbox' id='creator_insta' onChange={e => toggleAccountName(e)} checked={social.creator_insta} value={`${social.creator_insta}`} />
          </label>
          <label htmlFor='creator_tiktok'>
            <span className='hidden'>TikTok</span>
          <FaTiktok className='icon' />
            <input className='hidden' type='checkbox' id='creator_tiktok' onChange={e => toggleAccountName(e)} checked={social.creator_tiktok} value={`${social.creator_tiktok}`} />
          </label>
          <label htmlFor='creator_youtube'>
            <span className='hidden'>Youtube</span>
          <FaYoutube className='icon' />
            <input className='hidden' type='checkbox' id='creator_youtube' onChange={e => toggleAccountName(e)} checked={social.creator_youtube} value={`${social.creator_youtube}`} />
          </label>
          <label htmlFor='creator_linkedin'>
            <span className='hidden'>Linkedin</span>
          <FaLinkedin className='icon' />
            <input className='hidden' type='checkbox' id='creator_linkedin' onChange={e => toggleAccountName(e)} checked={social.creator_linkedin} value={`${social.creator_linkedin}`} />
          </label>
        </StyledAccountSelector>
        <StyledAccountNames>
          {/* map through the media array and have the components indexed in an object, for each of the components,  */}
          {
            media.map(el => {
              return(
                <motion.div key={el} layoutId={el}>
                
                {
                  // @ts-ignore okok, there's something that can be done using keyof typeof as well. Not sure how though.
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
          <CategoriesFormComponent onUpdateSelected={ updateCategories }></CategoriesFormComponent>
      </StyledGridField>
      </CategoryProvider>
      {/* <StyledFormField>

      <input type='file'></input>
      <input type='file'></input>
      </StyledFormField> */}
  </StyledFormGrid>
  )
}

export default FormSocialI