// Axios
import { axiosInstance } from "../../utils/axios";

// Types
import { GetSubevent, PostSubevent } from "./types";

export function getSubeventsApi () {
  return axiosInstance.get<GetSubevent[]>('/subevents');
}

export function getSubeventByIdApi (id:number) {
  return axiosInstance.get<GetSubevent>(`/subevents/${id}`);
}

export function submitSubeventApi (data:PostSubevent) {
  return axiosInstance.post('/subevents', data);
}

export function editSubeventApi (data:PostSubevent) {
  return axiosInstance.put('/subevents', data);
}

export function deleteSubeventApi (id:number) {
  return axiosInstance.delete(`/subevents/${id}`);
}