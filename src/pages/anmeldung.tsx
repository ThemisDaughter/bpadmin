import { useState, useContext } from 'react';
import FormPersonalI from '../components/formComponents/FormPersonalI';
import FormSocialI from '../components/formComponents/FormSocialI';
import FormContactI from '../components/formComponents/FormContactI';
import FormConfirm from '../components/formComponents/FormConfirm';
import CreatorContext from '../context/FormContext/CreatorContext';
import { StyledPaper } from '../styles/styledPaper';
import { StyledFormBackground, StyledButtonsContainer, StyledFormBtn } from '../styles/styledFormComponents';

const AnmeldungPage = () => {

  const { personal, submitForm, isLoading } = useContext(CreatorContext);
  const [stage, setStage] = useState(0);

  const handleClickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(stage > 0) setStage(now => now-=1);
  }
  const handleClickForward = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(stage < 3) setStage(current => current += 1)
  }
  
  

  return (
    <StyledFormBackground>
      {
        isLoading ? (
          <div>
            <h2>vielen Dank!</h2>
          </div>
        ) :
          (<StyledPaper>
            <form onSubmit={submitForm}>
        {
          {
            0: <FormPersonalI />,
            1: <FormSocialI />,
            2: <FormContactI />,
            3: <FormConfirm />,
          }[stage]
            }
          
        <StyledButtonsContainer>
            <StyledFormBtn className='left' onClick={handleClickBack}>zurück</StyledFormBtn>
            {
              stage === 3
              ? <StyledFormBtn><input type='submit' value='bestätigen' /></StyledFormBtn>
              : <StyledFormBtn className='right' onClick={ handleClickForward }>weiter</StyledFormBtn>
            }
        </StyledButtonsContainer>
        </form>
      </StyledPaper>)
      }
      
      </StyledFormBackground>
  )
}

export default AnmeldungPage;