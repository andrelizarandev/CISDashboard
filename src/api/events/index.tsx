// Axios
import { axiosInstance } from "../../utils/axios";

export function getEventsApi () {
  return axiosInstance.get('/events');
}

export function getEventByIdApi (id:number) {
  return axiosInstance.get(`/events/${id}`);
}

export function submitEventApi (data:any) {
  return axiosInstance.post('/events', data);
}

export function editEventApi (data:any) {
  return axiosInstance.put('/events', data);
}

export function deleteEventApi (id:number) {
  return axiosInstance.delete(`/events/${id}`);

}
