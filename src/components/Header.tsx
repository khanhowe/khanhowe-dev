import { StyledText } from '@/styles/common-styles';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import styled from 'styled-components';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeChoices } from '@/types/utils';
import { useThemeContext } from '@/context/ThemeContext';

const HeaderDiv = styled.header`
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 100;
    background-color: ${(props) => props.theme.palette.secondary.main};
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 1rem;
    margin-left: auto;
`;

const StyledAnchor = styled.a`
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
        text-decoration: none;
        transition: color 0.2s;
        cursor: pointer;
    }
`;

interface NavItemProps {
    text: string;
}

const NavItem: React.FC<NavItemProps> = ({text}) => {
    return (
        <StyledAnchor>
            <StyledText color='primary'>
                {text}
            </StyledText>
        </StyledAnchor>
    )
}

const Header: React.FC = () => {
    const { themeMode, toggleTheme } = useThemeContext();

    const handleThemeChange = (
      event: React.MouseEvent<HTMLElement>,
      newThemeMode: ThemeChoices
    ) => {
      if (newThemeMode !== null) {
        toggleTheme();
      }
    };

    return (
        <HeaderDiv>
            <ToggleButtonGroup value={themeMode} onChange={handleThemeChange}>
                <ToggleButton value="light"><LightModeIcon/></ToggleButton>
                <ToggleButton value="dark"><DarkModeIcon/></ToggleButton>
            </ToggleButtonGroup>
            <StyledNav>
                <NavItem text='Home'/>
                <NavItem text='About'/>
                <NavItem text='Experience'/>
                <NavItem text='Projects'/>
                <NavItem text='Contact'/>
            </StyledNav>
        </HeaderDiv>
    );
}

export default Header;