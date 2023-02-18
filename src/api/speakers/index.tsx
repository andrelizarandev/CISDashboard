// Axios
import { axiosInstance } from "../../utils/axios";

export function getSpeakersApi () {
  return axiosInstance.get('/speakers');
}

export function getSpeakerByIdApi (id:number) {
  return axiosInstance.get(`/speakers/${id}`);
}

export function submitSpeakerApi (data:any) {
  return axiosInstance.post('/speakers', data);
}

export function editSpeakerApi () {
  return axiosInstance.put('/speakers');
}

export function deleteSpeakerApi (id:number) {
  return axiosInstance.delete(`/speakers/${id}`);
  
}