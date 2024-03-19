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

export type Quiz = {
  quiz_content: string;
  quiz_type: string;
  quiz_primary_topic: string;
  quiz_secondary_topic: string;
};

export type MultipleChoice = Quiz & {
  example_1: string;
  example_2: string;
  example_3: string;
  example_4: string;
  answer_numbers: number[];
};

export type ShortAnswer = Quiz & {
  answers: string[];
};

export type Message = {
  id: number;
  username: string;
  text: string;
};
