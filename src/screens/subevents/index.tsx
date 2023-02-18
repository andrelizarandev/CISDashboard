// Components
import ActionHeader from './components/action-header';
import SubeventsTable from './components/subevents-table';
import SidebarContainer from '../../containers/sidebar-container';

export default function SubeventsScreen () {
  return (
    <SidebarContainer title='Eventos'>
      <ActionHeader/>
      <SubeventsTable/>
    </SidebarContainer>
  )
}
