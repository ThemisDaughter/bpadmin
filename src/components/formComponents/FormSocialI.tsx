import { useContext, useState } from 'react'; 
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from 'react-icons/fa';
import {
  StyledFormField,
  StyledFormGrid,
  StyledFormHeading,
  StyledAccountNames,
  StyledAccountSelector,
  StyledAccountNameIcon,
  StyledAccountNameInput
} from 'styles/styledFormComponents';

// social media components (they are repetitive, if I knew how to pass through the FaIcons only one component would be needed)
import InstaComponent from './userNameComponents/InstaComponent';
import TiktokComponent from './userNameComponents/TiktokComponent';
import YoutubeComponent from './userNameComponents/YoutubeComponent';
import LinkedinComponent from './userNameComponents/LinkedinComponent';
// context
import CreatorContext from 'context/FormContext/CreatorContext';

const FormSocialI = () => {

  // imported 'social' object from context, contains social media channels, 
  // usernames and dynamic categories of interest
  const { social, updateSocial } = useContext(CreatorContext);
  // media contains the ids for the channels selected which are also the 
  // keys to the social object
  const [media, setMedia] = useState<string[]>([]);
  // an object with the components for the social object keys
  const mediaComponents = {
    'creator_insta': <InstaComponent name={social.creator_insta_name} onUpdate={updateSocial} />,
    'creator_tiktok': <TiktokComponent name={social.creator_tiktok_name} onUpdate={updateSocial} />,
    'creator_youtube': <YoutubeComponent name={social.creator_youtube_name} onUpdate={updateSocial} />,
    'creator_linkedin': <LinkedinComponent name={social.creator_linkedin_name} onUpdate={updateSocial} />
   }
  //  watching media for changes

  
  const toggleAccountName = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    ? setMedia([idOfElement, ...media])
    // if it has been turned to false, remove the name from the array
    : setMedia(media.filter(el => el !== idOfElement))
    // map through the array and show each mediaComponent element that has a key of '*whatsinthearray*'
  }
  
  console.log(media)

  return (
    <StyledFormGrid>
      <StyledFormHeading>Soziale Medien</StyledFormHeading>
      <StyledFormField>

        <StyledAccountSelector>
          <label htmlFor='creator_insta'>
            <span className='hidden'>Instagram</span>
          <FaInstagram className='icon' />
            <input className='hidden' type='checkbox' id='creator_insta' onChange={toggleAccountName} checked={social.creator_insta} value={`${social.creator_insta}`} />
          </label>
          {/* maybe in the future */}
          {/* <FaTwitterSquare className='icon' /> */}
          {/* <FaFacebookSquare className='icon' /> */}
          <label htmlFor='creator_tiktok'>
            <span className='hidden'>TikTok</span>
          <FaTiktok className='icon' />
            <input className='hidden' type='checkbox' id='creator_tiktok' onChange={toggleAccountName} checked={social.creator_tiktok} value={`${social.creator_tiktok}`} />
          </label>
          <label htmlFor='creator_youtube'>
            <span className='hidden'>Youtube</span>
          <FaYoutube className='icon' />
            <input className='hidden' type='checkbox' id='creator_youtube' onChange={toggleAccountName} checked={social.creator_youtube} value={`${social.creator_youtube}`} />
          </label>
          <label htmlFor='creator_linkedin'>
            <span className='hidden'>Linkedin</span>
          <FaLinkedin className='icon' />
            <input className='hidden' type='checkbox' id='creator_linkedin' onChange={toggleAccountName} checked={social.creator_linkedin} value={`${social.creator_linkedin}`} />
          </label>
        </StyledAccountSelector>
        <StyledAccountNames>
          {/* put an animate presence here */}
          {/* map through the media array and have the components indexed in an object, for each of the components,  */}
          {
            media.map(el => {
              return <div key={el}>
                {
                // @ts-ignore okok, there's something that can be done using keyof typeof as well. Not sure how though. Classes?
                  mediaComponents[el]
                }
              </div>
            }
            ) 
          }
        </StyledAccountNames>
      </StyledFormField>

      <StyledAccountNames>

      </StyledAccountNames>
      <StyledFormField >
        Rubriken
      </StyledFormField>
      <StyledFormField>

      <input type='file'></input>
      <input type='file'></input>
      </StyledFormField>
  </StyledFormGrid>
  )
}

export default FormSocialI