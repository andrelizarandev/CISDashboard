export type PostSubevent = {
  title:string;
  initDate:string;
  endDate:string;
  eventId:number;
  speakersId:number[];
  poster:string;
}

export type GetSubevent = { id:number } & PostSubevent;