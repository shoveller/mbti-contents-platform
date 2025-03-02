export type QuizScore = {
    E: number;
    I: number;
    S: number;
    N: number;
    T: number;
    F: number;
    J: number;
    P: number;
};

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

// 배열을 받아서 순서를 무작위로 변경한 새로운 배열을 반환하는 함수
export const getRandomizedArray = <T>(array: T[]): T[] => {
    return [...array.sort(() => Math.random() - 0.5)];
}

/**
 * QuizScore 객체를 받아 MBTI 유형 문자열을 반환하는 함수
 * @param score MBTI 각 지표별 점수
 * @returns MBTI 유형 문자열 (예: 'INTJ', 'ESFP')
 */
export function calculateMBTI(score: QuizScore): string {
    // 입력 검증
    if (!score) {
        return 'XXXX';
    }

    // 각 지표별로 비교하여 문자 결정
    const energyType = getEnergyType(score);
    const perceptionType = getPerceptionType(score);
    const judgmentType = getJudgmentType(score);
    const lifestyleType = getLifestyleType(score);

    // 최종 MBTI 문자열 반환
    return energyType + perceptionType + judgmentType + lifestyleType;
}

// 에너지 방향: 외향(E) vs 내향(I)
function getEnergyType(score: QuizScore): string {
    if (score.E > score.I) {
        return 'E';
    }
    if (score.E < score.I) {
        return 'I';
    }
    return 'X';
}

// 인식 기능: 감각(S) vs 직관(N)
function getPerceptionType(score: QuizScore): string {
    if (score.S > score.N) {
        return 'S';
    }
    if (score.S < score.N) {
        return 'N';
    }
    return 'X';
}

// 판단 기능: 사고(T) vs 감정(F)
function getJudgmentType(score: QuizScore): string {
    if (score.T > score.F) {
        return 'T';
    }
    if (score.T < score.F) {
        return 'F';
    }
    return 'X';
}

// 생활 양식: 판단(J) vs 인식(P)
function getLifestyleType(score: QuizScore): string {
    if (score.J > score.P) {
        return 'J';
    }
    if (score.J < score.P) {
        return 'P';
    }
    return 'X';
}

/**
 * 함수형 프로그래밍 접근 방식 - let과 else 없이 구현
 */
export function getMBTIType(score: QuizScore): string {
    // 입력 검증
    if (!score) {
        return 'XXXX';
    }

    // 두 점수를 비교하여 해당하는 문자 반환
    const compareScores = (a: number, b: number, typeA: string, typeB: string): string => {
        if (a > b) return typeA;
        if (a < b) return typeB;
        return 'X';
    };

    // 각 지표별 비교 및 결과 생성
    const pairs = [
        { values: [score.E, score.I], types: ['E', 'I'] },
        { values: [score.S, score.N], types: ['S', 'N'] },
        { values: [score.T, score.F], types: ['T', 'F'] },
        { values: [score.J, score.P], types: ['J', 'P'] }
    ];

    // 배열 메서드를 사용하여 최종 결과 생성
    return pairs
        .map(pair => compareScores(pair.values[0], pair.values[1], pair.types[0], pair.types[1]))
        .join('');
}
