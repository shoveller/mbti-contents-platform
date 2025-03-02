import { MBTITypes } from "@/data/TESTS";

export type QuizScore = Record<MBTITypes, number>;

export const getInitialQuizScore = (): QuizScore => {
    return {
        E: 0,
        I: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0,
    }
}

export const updateQuizScore = (score: QuizScore, type?: keyof QuizScore) => {
    if (!type) {
        return score;
    }

    return {
        ...score,
        [type]: score[type] + 1,
    };
}

const getQuizScore = (answers: Answer[]) => {
    return answers.reduce((acc, answer) => {
        acc[answer.type] += 1;
        return acc;
    }, getInitialQuizScore());
}