import styled from 'styled-components';

const HeaderDiv = styled.header`
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 100;
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 1rem;
`;

const StyledAnchor = styled.a`
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
        text-decoration: none;
        color: red;
        transition: color 0.2s;
        cursor: pointer;
    }
`;

const Header = () => (
    <HeaderDiv>
        <StyledNav>
            <StyledAnchor>Home</StyledAnchor>
            <StyledAnchor>About</StyledAnchor>
            <StyledAnchor>Experience</StyledAnchor>
            <StyledAnchor>Projects</StyledAnchor>
            <StyledAnchor>Contact</StyledAnchor>
        </StyledNav>
    </HeaderDiv>
);

export default Header;