import React from 'react';
import { Link } from 'react-router-dom';
import { StyledAdminButton, StyledAcceptButton, StyledGridButtons } from 'styles/styledAdminComponents';
import CreatorT from 'types/creatorTypes';

interface Props {
  onAccept: () => void;
  onRemove: (creatorId: string) => void;
  creator: CreatorT;
  status: string;
}


const CreatorDashboardButtons = ({ onAccept, onRemove, creator, status }: Props) => {
  return (
    <StyledGridButtons xstart={1} xend={5}>
    <StyledAdminButton>
      <Link to={`creator/${creator.id}`}>
        {
          status === 'new' ? 'anschauen' : 'bearbeiten'
        }
      </Link>
    </StyledAdminButton>
    {
      status === 'new'
        ? (<StyledAcceptButton onClick={onAccept}>
               bestätigen
           </StyledAcceptButton>) 
        : (<StyledAdminButton onClick={() => { creator.id && onRemove(creator.id) }}>
          später ansehen
        </StyledAdminButton>)
    }
  </StyledGridButtons>

  )
}

export default CreatorDashboardButtons