import { Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import styled from 'styled-components';
import ProfilePicture from './ProfilePicture';
import { StyledText } from '@/styles/common-styles';

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
            <StyledText variant='h1'>
                Hi, I&apos;m Khan.
            </StyledText>
            <StyledText variant='h2'>
                I&apos;m a full-stack engineer.
            </StyledText>
        <StyledButton variant='outlined'>
            <StyledText>See my work &nbsp;</StyledText><ArrowDownwardIcon/>
        </StyledButton>
    </StyledDiv>
);

export default Welcome;