import React from 'react';
import { StyledCreatorPortraitComponent } from 'styles/styledAdminComponents';

interface Props {
  firstName?: string;
  lastName?: string;
  imageUrl: string;
  size: number;
}

const CreatorPortraitComponent = ({ firstName, lastName, imageUrl, size }: Props) => {
  return (
    <StyledCreatorPortraitComponent size={size}>
        <div className='img-container'>
         <img src={imageUrl} alt={`${firstName} ${lastName}`}></img>
      </div>
      {
        firstName && lastName && <h3 className='title'>{ `${firstName} ${lastName}`}</h3>
      }
      </StyledCreatorPortraitComponent>
     
  )
}

export default CreatorPortraitComponent