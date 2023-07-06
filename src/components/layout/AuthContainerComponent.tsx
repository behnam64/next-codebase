import { Paper, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { AuthContainerStyled } from '../styled/AuthContainerStyled';

type PropsType = {
  children: ReactNode;
}

export const AuthContainerComponent = (props: PropsType) => {
  return (
    <AuthContainerStyled>
      <Paper>
        <Typography variant='h5' component='h5' color='inherit' sx={{ flexGrow: 1 }}>
          Welcome to Flow!
        </Typography>
        {props.children}
      </Paper>
    </AuthContainerStyled>
  );
};
