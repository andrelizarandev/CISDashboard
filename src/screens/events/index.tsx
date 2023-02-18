// Components
import EventsTable from './components/events-table';
import ActionHeader from './components/action-header';
import SidebarContainer from '../../containers/sidebar-container';

export default function EventsScreen () {
  return (
    <SidebarContainer title='Eventos'>
      <ActionHeader/>
      <EventsTable/>
    </SidebarContainer>
  )
}
