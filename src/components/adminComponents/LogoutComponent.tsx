import { adminLogout } from 'helpers/apiService/admin.service';
import { StyledLinkBtn } from 'styles/styledSharedComponents/styledButtons';
import StyledLogout from 'styles/styledAdminComponents/StyledLogout';

const LogoutComponent = () => {

  const onLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    adminLogout()
  }
  return (
    <StyledLogout>
      <StyledLinkBtn onClick={ onLogout }>logout</StyledLinkBtn>
    </StyledLogout>
  )
}

export default LogoutComponent