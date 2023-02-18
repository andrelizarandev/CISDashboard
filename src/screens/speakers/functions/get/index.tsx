// Modules
import useSpeakersQueries from '../../../../queries/use-speakers-queries';

export default function useGet () {

  const { useGetSpeakers } = useSpeakersQueries();

  const {
    mutate:mutateGetSpeakers,
    isLoading:isLoadingGetSpeakers
  } = useGetSpeakers(onSucccessGetSpeakers);

  const isLoading = isLoadingGetSpeakers;

  // Start
  function startGetSpeakers () {
    mutateGetSpeakers();
  }

  // On Success 
  function onSucccessGetSpeakers () {

  }

  return {
    startGetSpeakers,
    isLoading
  }

}
