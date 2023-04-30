import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import styled from "styled-components";

const StyledPicture = styled(Image)`
    background-color: #CBE4DE;
    border-radius: 50%;
    margin-bottom: 12px;
    padding: 0.5% 0.5%;
`;

const ProfilePicture: React.FC = () => {
    const { width } = useWindowSize();
    const imageSize = width <= 480 ? 150 : width <= 768 ? 200 : 300;
    return (
        <StyledPicture
            src='/khan-howe.jpg'
            alt='profile-picture'
            width={imageSize}
            height={imageSize}
        />
    );
};

export default ProfilePicture;