// Axios
import { axiosInstance } from "../../utils/axios";

// Types
import { GetSpeaker, PostSpeaker } from "./types";

export function getSpeakersApi () {
  return axiosInstance.get<GetSpeaker[]>('/speakers');
}

export function getSpeakerByIdApi (id:number) {
  return axiosInstance.get<GetSpeaker>(`/speakers/${id}`);
}

export function submitSpeakerApi (data:PostSpeaker) {
  return axiosInstance.post('/speakers', data);
}

export function editSpeakerApi (data:PostSpeaker) {
  return axiosInstance.put('/speakers', data);
}

export function deleteSpeakerApi (id:number) {
  return axiosInstance.delete(`/speakers/${id}`);
  
}