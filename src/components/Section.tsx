import styled from "styled-components";

const StyledSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    text-align: center;
    padding: 2rem 0;
`;

interface SectionProps {
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({children}) => (
    <StyledSection>
        {children}
    </StyledSection>
);

export default Section;