import { questionEasy } from "../base/questions/easy";
import { questionsMiddle } from "../base/questions/medium";
import { questionsHard } from "../base/questions/hard";
import { generateUniqueRandomNumbers } from "../functions/random";
import { shuffleArray } from "../functions/shuffleArray";
import { GameList } from "../base/game/gameList";

let easy:any = [];
let medium:any  = [];
let hard:any  = [];
export const getQuestions:any = (gameName:string) => {
  
  
    const GameParam = GameList['millioner'];
    const questionArrayEasy: any[] = generateUniqueRandomNumbers(
      GameParam.easy,
      1,
      questionEasy.length - 1
    );
    const questionArrayMedium: any[] = generateUniqueRandomNumbers(
      GameParam.medium,
      1,
      questionsMiddle.length - 1
    );
    const questionArrayHard: any[] = generateUniqueRandomNumbers(
      GameParam.hard,
      1,
      questionsHard.length - 1
    );

    if (questionArrayEasy && questionArrayEasy.length > 0) {
      easy = 
      questionArrayEasy.map((el: number) => {
          return {
            vopros: questionEasy[el].vopros,
            true: questionEasy[el].trues,
            choise: shuffleArray([
              questionEasy[el].vB,
              questionEasy[el].vC,
              questionEasy[el].vD,
              questionEasy[el].trues,
            ]),
          };
        })
    }
    if (questionArrayMedium && questionArrayMedium.length > 0) {
      medium = 
      questionArrayMedium.map((el: number) => {
          return {
            vopros: questionsMiddle[el].vopros,
            true: questionsMiddle[el].trues,
            choise: shuffleArray([
              questionsMiddle[el].vB,
              questionsMiddle[el].vC,
              questionsMiddle[el].vD,
              questionsMiddle[el].trues,
            ]),
          };
        })
    }
    if (questionArrayHard && questionArrayHard.length > 0) {
      hard = 
      questionArrayHard.map((el: number) => {
          return {
            vopros: questionsHard[el].vopros,
            true: questionsHard[el].trues,
            choise: shuffleArray([
              questionsHard[el].vB,
              questionsHard[el].vC,
              questionsHard[el].vD,
              questionsHard[el].trues,
            ]),
          };
        })
    }
    if (easy.length > 0 && medium.length > 0 && hard.length > 0 ){
      return [...easy, ...medium, ...hard];
    }
}
    