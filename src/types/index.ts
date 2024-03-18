export type Room = {
  id: number;
  title: string;
  quiz_type: string;
  room_type: string;
  quiz_primary_topic: string;
  quiz_secondary_topic: string;
  current_personnel: number;
  maximum_personnel: number;
  room_status: string;
  disclosure_status: string;
  password: string;
};

export type Message = {
  id: number;
  username: string;
  text: string;
};
