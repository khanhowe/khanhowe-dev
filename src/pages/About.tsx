import Section from '@/components/Section';
import { StyledText } from '@/styles/common-styles';
import { Box, Grid } from '@mui/material';
import styled from 'styled-components';

const StyledAboutTextDiv = styled.div`

`;

const About: React.FC = () => (
    <Section>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <StyledText>
                        Passionate full stack developer with 8 years of experience in applications and product development, as well as scientific research. Proven ability to produce high-quality, intuitive code while adapting to different development practices and technologies in team-oriented tasks.
                    </StyledText>
                </Grid>
                <Grid item xs={7}>
                    <StyledText>
                        Passionate full stack developer with 8 years of experience in applications and product development, as well as scientific research. Proven ability to produce high-quality, intuitive code while adapting to different development practices and technologies in team-oriented tasks.
                    </StyledText>
                </Grid>
            </Grid>
        </Box>
    </Section>
);

export default About;