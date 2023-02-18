// Components
import ActionHeader from './components/action-header';
import SidebarContainer from '../../containers/sidebar-container';
import AnnouncementsTable from './components/announcements-table';
import SubmitAnnouncementDialog from './dialogs/submit-announcement-dialog';

export default function AnnouncementsScreens () {
  return (
    <SidebarContainer title='Anuncios'>
      <ActionHeader/>
      <AnnouncementsTable/>
      <SubmitAnnouncementDialog/>
    </SidebarContainer>
  )
}
