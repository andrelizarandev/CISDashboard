export type PostEvent = {
  title:string;
  initDate:string;
  endDate:string;
  poster:string;
}

export type GetEvent = { id:number } & PostEvent;