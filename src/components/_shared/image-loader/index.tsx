// Modules
import { useRef } from 'react';
import { Stack, Typography } from '@mui/material';

// Hooks
import useHandleImages from '../../../hooks/use-handle-images';

// Icons
import ImageIcon from '@mui/icons-material/Image';

// Style
import ImageLoaderStyle from './style';

type Props = {
  title:string;
}

export default function ImageLoader (props:Props) {

  const { title } = props;
  const { fileToBase64 } = useHandleImages(() => {});
  const fileInput = useRef() as any;

  return (
    <>
      <Stack sx={ImageLoaderStyle.MainContainer} onClick={()=>fileInput.current.click()}>
        <Stack sx={ImageLoaderStyle.MainPaddingContainer}>
          <Typography variant='caption' textTransform='uppercase'fontWeight='bold'>{title}</Typography>
          <ImageIcon/>
        </Stack>
      </Stack>

      <input 
        type="file" 
        name="myImage" 
        onChange={fileToBase64} 
        ref={fileInput}
        style={{ display:'none' }}
        accept="image/png"
      />
    </>
  )
}
