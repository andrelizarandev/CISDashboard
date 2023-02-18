// Modules
import { IconButton, Stack, Typography } from '@mui/material';

// Data
import { visibleRoutes } from '../../router/index';

// Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Style
import FlexStyle from '../../styles/flex';
import SidebarContainerStyle from './style';

// Types
import { RouteData } from '../../router/types';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SidebarContainer ({ children, title }:any) {
  return (
    <Stack sx={SidebarContainerStyle.MainContainer}>
      <TopBar title={title}/>
      <SidebarMenu/>
      <Stack sx={SidebarContainerStyle.PageContentContainer}>
        <Stack sx={SidebarContainerStyle.PageContentPaddingContainer}>
          {children}
        </Stack>
      </Stack>
    </Stack>
  )
}

function TopBar ({ title }:any) {
  return (
    <Stack sx={SidebarContainerStyle.TopBarContainer}>
      <Stack sx={SidebarContainerStyle.TopBarPaddingContainer}>
        <Typography variant='subtitle2' textTransform='uppercase'>{title}</Typography>
        <Stack sx={FlexStyle.RowAlignCenterColumnGap2}>
          <Typography variant='subtitle2' textTransform='uppercase'>Usuario</Typography>
          <IconButton>
            <AccountCircleIcon  sx={{ color:'white' }}/>
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  )
}

function SidebarMenu () {
  return (
    <Stack sx={SidebarContainerStyle.SidebarMenuContainer}>
      <Stack sx={SidebarContainerStyle.SidebarMenuPaddingContainer}>
        {visibleRoutes.map((data, key) => <MenuOption {...data} key={key}/>)}
      </Stack>
    </Stack>
  )
}

function MenuOption (props:RouteData) {

  const { route, title, icon } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isSelected = pathname === route;

  return (
    <Stack 
      onClick={() => navigate(route)}
      sx={SidebarContainerStyle.MenuOptionContainer(isSelected)}
    >
      <Stack sx={SidebarContainerStyle.MenuOptionPaddingContainer}>
        <Typography variant='subtitle2' textTransform='uppercase'>{title}</Typography>
        {icon}
      </Stack>
    </Stack>
  )
}