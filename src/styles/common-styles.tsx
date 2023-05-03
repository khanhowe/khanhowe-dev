import { Typography } from "@mui/material";
import styled from "styled-components";


export const StyledText = styled(Typography)`
  color: ${(props) => props.theme.palette.text.primary};
`