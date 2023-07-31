import { QuestionsForGame } from "./../types/questions";
import { questionEasy } from "../base/questions/easy";
import { questionsMiddle } from "../base/questions/medium";
import { questionsHard } from "../base/questions/hard";
import { generateUniqueRandomNumbers } from "../functions/random";
import { shuffleArray } from "../functions/shuffleArray";
import { GameList } from "../base/game/gameList";

export const getQuestions: QuestionsForGame[] | any = (gameName: string) => {
  const easy: QuestionsForGame[] = [];
  const medium: QuestionsForGame[] = [];
  const hard: QuestionsForGame[] = [];

  const GameParam = GameList[gameName];
  const questionArrayEasy: number[] = generateUniqueRandomNumbers(
    GameParam.easy,
    questionEasy.length - 1
  );
  const questionArrayMedium: number[] = generateUniqueRandomNumbers(
    GameParam.medium,
    questionsMiddle.length - 1
  );
  const questionArrayHard: number[] = generateUniqueRandomNumbers(
    GameParam.hard,
    questionsHard.length - 1
  );

  if (questionArrayEasy && questionArrayEasy.length > 0) {
    questionArrayEasy.forEach((el: number) => {
      easy.push({
        vopros: questionEasy[el].vopros,
        true: questionEasy[el].trues,
        choise: shuffleArray([
          questionEasy[el].vB,
          questionEasy[el].vC,
          questionEasy[el].vD,
          questionEasy[el].trues,
        ]),
      });
    });
  }
  if (questionArrayMedium && questionArrayMedium.length > 0) {
    questionArrayMedium.map((el: number) => {
      medium.push({
        vopros: questionsMiddle[el].vopros,
        true: questionsMiddle[el].trues,
        choise: shuffleArray([
          questionsMiddle[el].vB,
          questionsMiddle[el].vC,
          questionsMiddle[el].vD,
          questionsMiddle[el].trues,
        ]),
      });
    });
  }
  if (questionArrayHard && questionArrayHard.length > 0) {
    questionArrayHard.map((el: number) => {
      hard.push({
        vopros: questionsHard[el].vopros,
        true: questionsHard[el].trues,
        choise: shuffleArray([
          questionsHard[el].vB,
          questionsHard[el].vC,
          questionsHard[el].vD,
          questionsHard[el].trues,
        ]),
      });
    });
  }
  if (easy.length > 0 && medium.length > 0 && hard.length > 0) {
    return [...easy, ...medium, ...hard];
  }
};
