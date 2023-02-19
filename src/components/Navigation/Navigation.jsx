import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-left: 30px;

  &.active {
    padding: 8px 20px;
    text-decoration: none;
    background-color: orangered;
    font-weight: 700;
  }
`;

const Navigation = () => {
  return (
    <nav>
      <StyledLink to="/"> Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </nav>
  );
};
export default Navigation;
