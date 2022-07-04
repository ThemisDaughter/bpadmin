import React from 'react';
import StyledModal from 'styles/styledSharedComponents/styledModal'
import ReactDOM from 'react-dom';
import { StyledOutlineBtn } from 'styles/styledSharedComponents/styledButtons';
import { StyledPaper } from 'styles/styledPaper';

interface Props {
  children: React.ReactNode;
  show: boolean;
  onClose: (e: React.MouseEvent<HTMLButtonElement>)=>void
}

const ModalComponent = ({ children, show, onClose }: Props) => {
  let rootElement = document.getElementById('root')!;

  return show ? ReactDOM.createPortal(
    <StyledModal>
      {/* <div className='popup'> */}
      <StyledPaper>
        <div className='header'>
          <div></div>
        <StyledOutlineBtn onClick={ (e) => onClose(e) }>X</StyledOutlineBtn>
      </div>
        <div className='body'>
         {children}
        </div>
      </StyledPaper>
      {/* </div> */}
    </StyledModal>,
    rootElement
  ) : null
}

export default ModalComponent