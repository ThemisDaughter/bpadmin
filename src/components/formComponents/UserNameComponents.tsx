import { useContext } from 'react';
import CreatorContext from 'context/FormContext/CreatorContext';
import { StyledFormField, StyledInputLabel, StyledTextInput } from 'styles/styledFormComponents';


export const InstaComponent = () => {
  const { updateSocial, social } = useContext(CreatorContext);
  return (
    <StyledFormField>
    <StyledInputLabel>Instagram Link</StyledInputLabel>
    <StyledTextInput type='text' required value={social.creator_insta_name} id="creator_insta_name" onChange={ e => updateSocial(e) }></StyledTextInput>
  </StyledFormField>
  )
}
export const TiktokComponent = () => {
  const { updateSocial, social } = useContext(CreatorContext);
  return (
    <StyledFormField>
    <StyledInputLabel>Tiktok Link</StyledInputLabel>
    <StyledTextInput type='text' required value={social.creator_tiktok_name} id="creator_tiktok_name" onChange={ e => updateSocial(e) }></StyledTextInput>
  </StyledFormField>
  )
}
export const YoutubeComponent = () => {
  const { updateSocial, social } = useContext(CreatorContext);
  return (
    <StyledFormField>
    <StyledInputLabel>Youtube Link</StyledInputLabel>
    <StyledTextInput type='text' required value={social.creator_youtube_name} id="creator_youtube_name" onChange={ e => updateSocial(e) }></StyledTextInput>
  </StyledFormField>
  )
}
export const LinkedinComponent = () => {
  const { updateSocial, social } = useContext(CreatorContext);
  return (
    <StyledFormField>
    <StyledInputLabel>Linkedin Link</StyledInputLabel>
    <StyledTextInput type='text' required value={social.creator_linkedin_name} id="creator_linkedin_name" onChange={ e => updateSocial(e) }></StyledTextInput>
  </StyledFormField>
  )
}