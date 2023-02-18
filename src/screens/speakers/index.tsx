// Components
import ActionHeader from './components/action-header';
import SpeakersTable from './components/speaker-table';
import SidebarContainer from '../../containers/sidebar-container';

// Dialogs
import CreateSpeakerDialog from './dialogs/create-speaker-dialog';

// Hooks
import useOnCreate from './functions/onCreate';

export default function SpeakersScreen () {
  const { isLoading } = useOnCreate();
  return (
    <SidebarContainer title='Ponentes'>
      <ActionHeader/>
      <SpeakersTable isLoading={isLoading}/>
      <CreateSpeakerDialog/>
    </SidebarContainer>
  )
}
