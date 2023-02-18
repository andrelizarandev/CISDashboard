export type PostSpeaker = {
  name:string;
  lastname:string;
  shortDescription:string;
  longDescription:string;
  profilePhoto:string;
}

export type GetSpeaker = { id:number } & PostSpeaker;