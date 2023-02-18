// Modules
import { useMutation } from "react-query";

// Api
import { getSpeakerByIdApi, getSpeakersApi, submitSpeakerApi } from "../../api/speakers"

export default function useSpeakersQueries () {
  
  function useSubmitSpeaker (onSuccess: () => void) {
    return useMutation(submitSpeakerApi, { onSuccess });
  }

  function useGetSpeakers (onSuccess: () => void) {
    return useMutation(getSpeakersApi, {
      onSuccess: ({ data }) => console.log(data)
    })
  }

  function useGetSpeakerById (onSuccess: () => void) {
    return useMutation(getSpeakerByIdApi, {
      onSuccess: ({ data }) => console.log(data)
    })
  }

  return {
    useSubmitSpeaker,
    useGetSpeakers,
    useGetSpeakerById
  }

}
