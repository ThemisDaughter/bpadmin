import { useState, useContext } from 'react';
import FormPersonalI from '../components/formComponents/FormPersonalI';
import FormSocialI from '../components/formComponents/FormSocialI';
import FormContactI from '../components/formComponents/FormContactI';
import FormConfirm from '../components/formComponents/FormConfirm';
import CreatorContext from '../context/FormContext/CreatorContext';
import { StyledPaper } from '../styles/styledPaper';
import { StyledFormBackground, StyledButtonsContainer } from '../styles/styledFormComponents';
import { contactValidator, creatorPersonalValidator, socialMediaValidator } from 'helpers/formValidation/validators'
import { validateOnNext } from 'helpers/formValidation/validate';
const AnmeldungPage = () => {

  const { submitForm, isSuccess, social, personal, contact } = useContext(CreatorContext);
  const [stage, setStage] = useState(0);


  //  button click, the form stage changes and the user is directed to the next part
  const handleClickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(stage > 0) setStage(now => now-=1);
  }
  const handleClickForward = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validators = [creatorPersonalValidator, socialMediaValidator, contactValidator];
    const fields = [personal, social, contact];
    console.log(stage)
    // checks inputs agains validators
    if (!validateOnNext(fields[stage], validators[stage])) {
      console.log('validator returned false')
    } else {
      console.log('validator returned true')
      if(stage < 3) setStage(current => current += 1)
    }
  }
  

  return (
    <StyledFormBackground >
      {
        isSuccess ? (
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
            <button className='left' onClick={handleClickBack}>zurück</button>
                {
              stage === 3
              ? <input type='submit' value='bestätigen' className={`form-btn-right`} />
                    : <button className={`form-btn-right`} onClick={handleClickForward}>weiter</button>
            }
        </StyledButtonsContainer>
        </form>
      </StyledPaper>)
      }
      
      </StyledFormBackground>
  )
}

export default AnmeldungPage;