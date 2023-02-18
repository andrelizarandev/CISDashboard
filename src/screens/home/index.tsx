// Modules
import { useNavigate } from 'react-router-dom';
import { Grid, Stack, Typography } from '@mui/material';

// Components
import GridXS6MD4 from '../../components/_grids/grid-xs6-md3';
import SidebarContainer from '../../containers/sidebar-container';

// Icons
import GroupIcon from '@mui/icons-material/Group';
import StadiumIcon from '@mui/icons-material/Stadium';
import CampaignIcon from '@mui/icons-material/Campaign';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

// Style
import HomeStyle from './style';

// Types
import { OptionData } from './types';

export default function HomeScreen () {
  return (
    <SidebarContainer title='Inicio'>
      <Typography variant='subtitle2' textTransform='uppercase'>Bienvenido Usuario ¿Qué harás hoy?</Typography>
      <Grid container spacing={2}>
        {options.map((data, key) => <MenuOption {...data} key={key}/>)}
      </Grid>
    </SidebarContainer>
  )
}

function MenuOption (props:OptionData) {
  const { icon, title, route } = props;
  const navigate = useNavigate();
  const redirectTo = () => navigate(route);
  return (
    <GridXS6MD4>
      <Stack sx={HomeStyle.MenuOptionContainer} onClick={redirectTo}>
        <Stack sx={HomeStyle.MenuOptionPaddingContainer}>
          <Typography variant='subtitle2' textTransform='uppercase'>{title}</Typography>
          {icon}
        </Stack>
      </Stack>
    </GridXS6MD4>
  )
}

const options:OptionData[] = [
  { icon:<GroupIcon/>, title:'Agregar Ponentes', route:'/speakers' },
  { icon:<StadiumIcon/>, title:'Agregar Eventos', route:'/events' },
  { icon:<ConfirmationNumberIcon/>, title:'Agregar Subeventos', route:'/subevents' },
  { icon:<CampaignIcon/>, title:'Agregar un Anuncio', route:'/announcements' },
]
