// Modules
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Contexts
import MainContextContainer from '../containers/context-container';

// Icons 
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import StadiumIcon from '@mui/icons-material/Stadium';
import CampaignIcon from '@mui/icons-material/Campaign';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

// Screens
import HomeScreen from '../screens/home';
import LogInScreen from '../screens/log-in';
import EventsScreen from '../screens/events';
import SpeakersScreen from '../screens/speakers';
import SubeventsScreen from '../screens/subevents';
import AnnouncementsScreens from '../screens/announcements';

// Types
import { RouteData } from './types';

export default function Router () {
  return (
    <MainContextContainer>
      <BrowserRouter>
        <Routes>
          {visibleRoutes.map(({ element, route }, key) => <Route element={element} path={route} key={key}/>)}
          {noVisibleRoutes.map(({ element, route }, key) => <Route element={element} path={route} key={key}/>)}
        </Routes>
      </BrowserRouter>
    </MainContextContainer>
  )
}

export const visibleRoutes:RouteData[] = [
  { title:'Inicio', element:<HomeScreen/>, route:'/home', icon:<HomeIcon/> },
  { title:'Ponentes', element:<SpeakersScreen/>, route:'/speakers', icon:<GroupIcon/> },
  { title:'Eventos', element:<EventsScreen/>, route:'/events', icon:<StadiumIcon/> },
  { title:'Subeventos', element:<SubeventsScreen/>, route:'/subevents', icon:<ConfirmationNumberIcon/> },
  { title:'Anuncios', element:<AnnouncementsScreens/>, route:'/announcements', icon:<CampaignIcon/> },
]

const noVisibleRoutes:RouteData[] = [
  { title:'Log In', element:<LogInScreen/>, route:'/' },
  { title:'Redirect', element:<Navigate to='/home'/>, route:'*' },
] 