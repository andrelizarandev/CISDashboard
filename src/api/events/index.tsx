// Axios
import { axiosInstance } from "../../utils/axios";

// Types
import { GetEvent, PostEvent } from "./types";

export function getEventsApi () {
  return axiosInstance.get<GetEvent[]>('/events');
}

export function getEventByIdApi (id:number) {
  return axiosInstance.get<GetEvent>(`/events/${id}`);
}

export function submitEventApi (data:PostEvent) {
  return axiosInstance.post('/events', data);
}

export function editEventApi (data:PostEvent) {
  return axiosInstance.put('/events', data);
}

export function deleteEventApi (id:number) {
  return axiosInstance.delete(`/events/${id}`);

}
