import { Button, Icon } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import styled from 'styled-components';
import ProfilePicture from './ProfilePicture';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    text-align: center;
    padding: 2rem 0;
`;

const StyledButton = styled(Button)`
    margin-top: 12px;
    text-transform: none;
`;

const Welcome: React.FC = () => (
    <StyledDiv>
        <ProfilePicture/>
        <h1>Hi, I&apos;m Khan.</h1>
        <h2>I&apos;m a full-stack engineer.</h2>
        <StyledButton variant='outlined'>
            See my work &nbsp;<ArrowDownwardIcon/>
        </StyledButton>
    </StyledDiv>
);

export default Welcome;