import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AuthContainerStyled = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > div {
    border-radius: 1rem;
    width: calc(100% - 2rem);
    padding: 1rem;
    margin: 1rem;
    @media screen and (min-width: 440px) {
      width: 25rem;
    }
    & > .MuiTypography-h5 {
      margin-bottom: 1rem;
      text-align: center;
    }
    & > div {
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 1rem;
      & > p {
        margin: 0;
        opacity: 0.5;
      }
    }
  }
`;
