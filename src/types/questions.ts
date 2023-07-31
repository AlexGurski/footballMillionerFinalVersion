export type QuestionDefault = {
  _id?: number;
  vopros: string;
  vB: string;
  vC: string;
  vD: string;
  trues: string;
};

export type QuestionsForGame = {
  vopros: string,
  true: string,
  choise: string[],
}