import React from 'react'
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { StyledSocialMediaList } from 'styles/styledSharedComponents';
import CreatorT from 'types/creatorTypes';


interface Props {
 creator: CreatorT
}

const SocialMediaList = ({ creator }: Props) => {
  return (
    <StyledSocialMediaList>
      {
        creator.creator_insta
          ? <li><FaInstagram className='icon' /><p>{ creator.creator_insta_name}</p></li>
          : null
      }
       {
        creator.creator_tiktok
          ? <li><FaTiktok className='icon' /><p>{ creator.creator_tiktok_name}</p></li>
          : null
      }
       {
        creator.creator_youtube
          ? <li><FaYoutube className='icon' /><p>{ creator.creator_youtube_name}</p></li>
          : null
      }
       {
        creator.creator_linkedin
          ? <li><FaLinkedin className='icon' /><p>{ creator.creator_linkedin_name}</p></li>
          : null
      }
    </StyledSocialMediaList>
  )
}

export default SocialMediaList