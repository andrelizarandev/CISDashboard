// Components
import ActionHeader from './components/action-header';
import SpeakersTable from './components/speaker-table';
import SidebarContainer from '../../containers/sidebar-container';

export default function SpeakersScreen () {
  return (
    <SidebarContainer title='Ponentes'>
      <ActionHeader/>
      <SpeakersTable/>
    </SidebarContainer>
  )
}
