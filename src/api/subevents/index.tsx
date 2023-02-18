// Axios
import { axiosInstance } from "../../utils/axios";

export function getSubeventsApi () {
  return axiosInstance.get('/subevents');
}

export function getSubeventByIdApi (id:number) {
  return axiosInstance.get(`/subevents/${id}`);
}

export function submitSubeventApi (data:any) {
  return axiosInstance.post('/subevents', data);
}

export function editSubeventApi (data:any) {
  return axiosInstance.put('/subevents', data);
}

export function deleteSubeventApi (id:number) {
  return axiosInstance.delete(`/subevents/${id}`);
}