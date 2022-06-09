import styled from 'styled-components';

const StyledSocialMediaList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
li{
  display: flex;
  align-items: center;
  .icon {
    padding-right: 1rem;
    font-size: 1rem;
  }
  p {
    margin: 0.2rem 0;
    font-size: 0.8rem;
  }
}
`
export default StyledSocialMediaList;
