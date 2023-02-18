// Modules
import { 
  Dialog, 
  Stack, 
  Typography 
} from '@mui/material';
import { ReactNode } from 'react';

// Type 
export type DialogStackProps = {
  title:string;
  isOpen:boolean;
  onClose?: () => void;
  size: 'sm' | 'md' | 'lg';
  children:ReactNode;
  onSubmit:any;
  fullWidth?:boolean;
}

export default function DialogStack (props:DialogStackProps) {

  const { isOpen, onClose = () => {}, title, size, children, onSubmit, fullWidth = true } = props;

  function startOnSubmit (e:any) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth={size} fullWidth={fullWidth}>
      <Stack sx={{ padding:2, rowGap:2 }} component='form' onSubmit={startOnSubmit}>
        <Typography variant='subtitle2' textTransform='uppercase'>
          <b>{title}</b>
        </Typography>
        {children}
      </Stack>
    </Dialog>
  )
}