// Modules
import { useEffect } from 'react';

// Hooks
import useGet from '../get'

export default function useOnCreate () {
  
  const { isLoading, startGetSpeakers } = useGet();

  function onCreate () {
    startGetSpeakers();
  }

  useEffect(onCreate, []);

  return {
    isLoading
  }

}
