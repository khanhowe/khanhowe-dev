import Image from 'next/image';
import styled from 'styled-components';

const StyledPicture = styled(Image)`
  background-color: ${(props) => props.theme.palette.primary.main};
  border-radius: 50%;
  margin-bottom: 12px;
  padding: 0.5% 0.5%;
`;

const ProfilePicture: React.FC = () => (
  <StyledPicture src="/khan-howe.jpg" alt="profile-picture" width={300} height={300} />
);

export default ProfilePicture;