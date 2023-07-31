type GameSettings = {
  name:string
  question: number,
  easy: number,
  medium: number,
  hard: number,
}

type GameListType = {
  millioner:GameSettings,
  survivor:GameSettings
}
export const GameList:GameListType = {
  millioner: {
    name:'Millioner',
    question: 15,
    easy: 5,
    medium: 5,
    hard: 5,
  },
  survivor: {
    name:'Survivor',
    question: 115,
    easy: 10,
    medium: 15,
    hard: 90,
  },
};
