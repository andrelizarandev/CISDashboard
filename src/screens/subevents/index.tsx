// Components
import ActionHeader from './components/action-header';
import SubeventsTable from './components/subevents-table';
import SidebarContainer from '../../containers/sidebar-container';

// Dialogs
import SubmitSubeventDialog from './dialogs/submit-subevent-dialog';

export default function SubeventsScreen () {
  return (
    <SidebarContainer title='Eventos'>
      <ActionHeader/>
      <SubeventsTable/>
      <SubmitSubeventDialog/>
    </SidebarContainer>
  )
}
