export type TestInfo = {
  mainTitle: string;
  subTitle: string;
  mainUrl: string;
  scoreType: string;
  mainImage: string;
  thumbImage: string;
  lang: string;
  category: string;
};

export type MBTITypes = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export type Answer = {
  type: MBTITypes;
  content: string;
};

export type Question = {
  which: string;
  question: string;
  answers: Answer[];
};

export type Result = {
  type: string;
  query: string;
  img_src: string;
};

export type TestData = {
  info: TestInfo;
  questions: Question[];
  results: Result[];
  resultInfo: ResultInfo;
};

export type ResultInfo = {
  mainTitle: string;
  shareTitle: string;
  copyTitle: string;
  retryTitle: string;
  gotoHomeTitle: string;
}

export const TESTS: TestData[] = [
  // personalColor
  {
    resultInfo: {
      mainTitle: "결과는...",
      shareTitle: "친구와 공유하기",
      copyTitle: "링크 복사",
      retryTitle: "다시 하기",
      gotoHomeTitle: "다른 테스트 하러 가기",
    },
    info: {
      mainTitle: "퍼스널 컬러 테스트를 시작해 보세요!",
      subTitle: "나에게 어울리는 컬러는 무엇일까?",
      mainUrl: "personalColor",
      scoreType: "MBTI",
      mainImage:
        "/images/ko/personalColor-intro.png",
      thumbImage:
        "/images/ko/personalColor-thumb.png",
      lang: "ko",
      category: "characteristic",
    },
    questions: [
      {
        which: "EI",
        question: "처음 보는 친구들에게 나는?",
        answers: [
          {
            type: "E",
            content: "내가 먼저 말을 건낸다.",
          },
          {
            type: "I",
            content: "대부분 다른 친구가 먼저 말을 건낸다.",
          },
        ],
      },
      {
        which: "EI",
        question: "주말에 난?",
        answers: [
          {
            type: "E",
            content: "사람들과 만나는 것을 즐긴다.",
          },
          {
            type: "I",
            content: "혼자 있는 게 싫지 않은 편이다.",
          },
        ],
      },
      {
        which: "EI",
        question: "친구들과 놀 때 나는?",
        answers: [
          {
            type: "E",
            content: "왁자지껄한 신나는 분위기를 좋아한다.",
          },
          {
            type: "I",
            content: "소수의 친구들과 소소하게 대화하는 것을 좋아한다. ",
          },
        ],
      },
      {
        which: "SN",
        question: "내가 더 중요하게 생각하는 것은?",
        answers: [
          {
            type: "S",
            content: "현재가 없으면 미래도 없다.",
          },
          {
            type: "N",
            content: "미래를 생각하지 않으면 발전이 없다.",
          },
        ],
      },
      {
        which: "SN",
        question: "일할 때 나는?",
        answers: [
          {
            type: "S",
            content: "남들이 하는 대로 따라 가는 것이 좋다.",
          },
          {
            type: "N",
            content: "스스로 나만의 방법을 만드는 게 좋다. ",
          },
        ],
      },
      {
        which: "SN",
        question: "주변 사람들이 나에게 하는 말은?",
        answers: [
          {
            type: "S",
            content: "꾸준하고 참을성이 있다는 말을 자주한다.",
          },
          {
            type: "N",
            content: "창의적이고 독창적이라는 말을 자주한다.",
          },
        ],
      },
      {
        which: "TF",
        question: "거절해야 하는 상황이 오면 나는?",
        answers: [
          {
            type: "T",
            content: "강력하게 할 수 없다고 말한다.",
          },
          {
            type: "F",
            content: "고민하다가 대부분 들어주는 편이다.",
          },
        ],
      },
      {
        which: "TF",
        question: "화났을 때 나는?",
        answers: [
          {
            type: "T",
            content: "논리적으로 잘 말하면서 따진다. ",
          },
          {
            type: "F",
            content: "할말이 많지만 너무 분해서 눈물부터 난다.",
          },
        ],
      },
      {
        which: "TF",
        question:
          "고민을 얘기하는 친구, 듣다 보니 친구의 잘못인 것 같다. 그럴 때 나는?",
        answers: [
          {
            type: "T",
            content: "친구의 잘못된 점을 말해준다.",
          },
          {
            type: "F",
            content: "직접적으로 말하면 친구가 그래 할까봐 돌려 말한다.",
          },
        ],
      },
      {
        which: "JP",
        question: "준비물을 준비할 때 나는?",
        answers: [
          {
            type: "J",
            content: "하루 전 날 미리 준비한다.",
          },
          {
            type: "P",
            content: "‘내일 챙겨야지’ 하다가 까먹고 놓고 오는 일이 많다.",
          },
        ],
      },
      {
        which: "JP",
        question:
          "끝나고 집에 가서 공부하려 했는데, 친구들이 놀자고 붙잡는다. 나는?",
        answers: [
          {
            type: "J",
            content: "계획에 없던 일인데…매우 당황스럽다.",
          },
          {
            type: "P",
            content: "오케이! 역시 계획대로 안 되는 것이 인생! 놀자!!!!",
          },
        ],
      },
      {
        which: "JP",
        question: "내가 가고싶은 여행지 스타일은?",
        answers: [
          {
            type: "J",
            content:
              "내가 계획한대로! 계획적으로 일의 순서대로 진행하는 것을 좋아해!",
          },
          {
            type: "P",
            content:
              "그때그때 생각나는 대로 일 처리! 융통성 있게 하는 것을 좋아해!",
          },
        ],
      },
    ],
    results: [
      {
        type: "ESTJ",
        query: "ESTJ",
        img_src:
          "/images/ko/ESTJ.png",
      },
      {
        type: "ESTP",
        query: "ESTP",
        img_src:
          "/images/ko/ESTP.png",
      },
      {
        type: "ESFJ",
        query: "ESFJ",
        img_src:
          "/images/ko/ESFJ.png",
      },
      {
        type: "ESFP",
        query: "ESFP",
        img_src:
          "/images/ko/ESFP.png",
      },
      {
        type: "ENTJ",
        query: "ENTJ",
        img_src:
          "/images/ko/ENTJ.png",
      },
      {
        type: "ENTP",
        query: "ENTP",
        img_src:
          "/images/ko/ENTP.png",
      },
      {
        type: "ENFJ",
        query: "ENFJ",
        img_src:
          "/images/ko/ENFJ.png",
      },
      {
        type: "ENFP",
        query: "ENFP",
        img_src:
          "/images/ko/ENFP.png",
      },
      {
        type: "ISTJ",
        query: "ISTJ",
        img_src:
          "/images/ko/ISTJ.png",
      },
      {
        type: "ISTP",
        query: "ISTP",
        img_src:
          "/images/ko/ISTP.png",
      },
      {
        type: "ISFJ",
        query: "ISFJ",
        img_src:
          "/images/ko/ISFJ.png",
      },
      {
        type: "ISFP",
        query: "ISFP",
        img_src:
          "/images/ko/ISFP.png",
      },
      {
        type: "INTJ",
        query: "INTJ",
        img_src:
          "/images/ko/INTJ.png",
      },
      {
        type: "INTP",
        query: "INTP",
        img_src:
          "/images/ko/INTP.png",
      },
      {
        type: "INFJ",
        query: "INFJ",
        img_src:
          "/images/ko/INFJ.png",
      },
      {
        type: "INFP",
        query: "INFP",
        img_src:
          "/images/ko/INFP.png",
      },
    ],
  },
  // personalColorEng
  {
    resultInfo: {
      mainTitle: "Your Result is...",
      shareTitle: "Share with Friends",
      copyTitle: "Copy Link",
      retryTitle: "Try Again",
      gotoHomeTitle: "Try Other Tests",
    },
    info: {
      mainTitle: "Start Your Personal Color Test!",
      subTitle: "What is the color that suits me?",
      mainUrl: "personalColorEng",
      scoreType: "MBTI",
      mainImage:
        "/images/en/personalColorEng-intro.png",
      thumbImage:
        "/images/en/personalColorEng-thumb.png",
      lang: "en",
      category: "characteristic",
    },
    questions: [
      {
        which: "EI",
        question: "How do I act when meeting new people?",
        answers: [
          {
            type: "E",
            content: "I initiate conversations first.",
          },
          {
            type: "I",
            content: "Usually others start talking to me first.",
          },
        ],
      },
      {
        which: "EI",
        question: "On weekends, I...",
        answers: [
          {
            type: "E",
            content: "Enjoy meeting people.",
          },
          {
            type: "I",
            content: "Don't mind being alone.",
          },
        ],
      },
      {
        which: "EI",
        question: "When hanging out with friends, I...",
        answers: [
          {
            type: "E",
            content: "Prefer a lively and exciting atmosphere.",
          },
          {
            type: "I",
            content: "Prefer having casual conversations with a small group of friends.",
          },
        ],
      },
      {
        which: "SN",
        question: "What do I consider more important?",
        answers: [
          {
            type: "S",
            content: "Without the present, there is no future.",
          },
          {
            type: "N",
            content: "Without thinking about the future, there is no progress.",
          },
        ],
      },
      {
        which: "SN",
        question: "When working, I...",
        answers: [
          {
            type: "S",
            content: "Prefer following established methods.",
          },
          {
            type: "N",
            content: "Like creating my own methods.",
          },
        ],
      },
      {
        which: "SN",
        question: "People around me often say that I am...",
        answers: [
          {
            type: "S",
            content: "Consistent and patient.",
          },
          {
            type: "N",
            content: "Creative and original.",
          },
        ],
      },
      {
        which: "TF",
        question: "When I need to reject something, I...",
        answers: [
          {
            type: "T",
            content: "Firmly say that I cannot do it.",
          },
          {
            type: "F",
            content: "Usually end up agreeing after worrying about it.",
          },
        ],
      },
      {
        which: "TF",
        question: "When I'm angry, I...",
        answers: [
          {
            type: "T",
            content: "Argue logically and articulate my points well.",
          },
          {
            type: "F",
            content: "Have a lot to say but tear up first because I'm so upset.",
          },
        ],
      },
      {
        which: "TF",
        question: "If a friend is sharing their problem but I think it's their fault, I...",
        answers: [
          {
            type: "T",
            content: "Point out where they went wrong.",
          },
          {
            type: "F",
            content: "Try to be indirect because I'm afraid they'll feel bad if I'm too direct.",
          },
        ],
      },
      {
        which: "JP",
        question: "When preparing supplies, I...",
        answers: [
          {
            type: "J",
            content: "Prepare everything the day before.",
          },
          {
            type: "P",
            content: "Often think 'I'll pack tomorrow' but end up forgetting things.",
          },
        ],
      },
      {
        which: "JP",
        question: "I planned to study at home, but friends want me to hang out. I...",
        answers: [
          {
            type: "J",
            content: "Feel very uncomfortable because this wasn't in my plans.",
          },
          {
            type: "P",
            content: "Okay! Life never goes as planned anyway! Let's have fun!",
          },
        ],
      },
      {
        which: "JP",
        question: "My preferred travel style is...",
        answers: [
          {
            type: "J",
            content: "Following my plan! I like proceeding in order according to a schedule.",
          },
          {
            type: "P",
            content: "Going with the flow! I prefer being flexible and adaptable.",
          },
        ],
      },
    ],
    results: [
      {
        type: "ESTJ",
        query: "ESTJ",
        img_src:
          "/images/en/ESTJ.png",
      },
      {
        type: "ESTP",
        query: "ESTP",
        img_src:
          "/images/en/ESTP.png",
      },
      {
        type: "ESFJ",
        query: "ESFJ",
        img_src:
          "/images/en/ESFJ.png",
      },
      {
        type: "ESFP",
        query: "ESFP",
        img_src:
          "/images/en/ESFJ.png",
      },
      {
        type: "ENTJ",
        query: "ENTJ",
        img_src:
          "/images/en/ENTJ.png",
      },
      {
        type: "ENTP",
        query: "ENTP",
        img_src:
          "/images/en/ENTP.png",
      },
      {
        type: "ENFJ",
        query: "ENFJ",
        img_src:
          "/images/en/ENFJ.png",
      },
      {
        type: "ENFP",
        query: "ENFP",
        img_src:
          "/images/en/ENFP.png",
      },
      {
        type: "ISTJ",
        query: "ISTJ",
        img_src:
          "/images/en/ISTJ.png",
      },
      {
        type: "ISTP",
        query: "ISTP",
        img_src:
          "/images/en/ISTP.png",
      },
      {
        type: "ISFJ",
        query: "ISFJ",
        img_src:
          "/images/en/ISFJ.png",
      },
      {
        type: "ISFP",
        query: "ISFP",
        img_src:
          "/images/en/ISFP.png",
      },
      {
        type: "INTJ",
        query: "INTJ",
        img_src:
          "/images/en/INTJ.png",
      },
      {
        type: "INTP",
        query: "INTP",
        img_src:
          "/images/en/INTP.png",
      },
      {
        type: "INFJ",
        query: "INFJ",
        img_src:
          "/images/en/INFJ.png",
      },
      {
        type: "INFP",
        query: "INFP",
        img_src:
          "/images/en/INFP.png",
      },
    ],
  },
  // personalColorJP
  {
    resultInfo: {
      mainTitle: "結果は...",
      shareTitle: "友達とシェアする",
      copyTitle: "リンクをコピー",
      retryTitle: "もう一度やる",
      gotoHomeTitle: "他のテストをする",
    },
    info: {
      mainTitle: "パーソナルカラー診断_性格編を始めてみましょう！",
      subTitle: "自分に似合う色は何だろう？ パーソナルカラーテスト",
      mainUrl: "personalColorJP",
      scoreType: "MBTI",
      mainImage:
        "/images/jp/personalColorJP-intro.png",
      thumbImage:
        "/images/jp/personalColorJP-thumb.png",
      lang: "jp",
      category: "characteristic",
    },
    questions: [
      {
        which: "EI",
        question: "初めて会う友達に対して私は？",
        answers: [
          {
            type: "E",
            content: "自分から話しかける。",
          },
          {
            type: "I",
            content: "ほとんどの場合、相手から話しかけられる。",
          },
        ],
      },
      {
        which: "EI",
        question: "週末の私は？",
        answers: [
          {
            type: "E",
            content: "人と会うのを楽しむ。",
          },
          {
            type: "I",
            content: "一人でいるのも悪くない。",
          },
        ],
      },
      {
        which: "EI",
        question: "友達と遊ぶとき、私は？",
        answers: [
          {
            type: "E",
            content: "にぎやかで楽しい雰囲気が好き。",
          },
          {
            type: "I",
            content: "少人数の友達とささやかに会話するのが好き。",
          },
        ],
      },
      {
        which: "SN",
        question: "私がより重要だと考えるのは？",
        answers: [
          {
            type: "S",
            content: "現在がなければ未来もない。",
          },
          {
            type: "N",
            content: "未来を考えなければ発展はない。",
          },
        ],
      },
      {
        which: "SN",
        question: "仕事をするとき、私は？",
        answers: [
          {
            type: "S",
            content: "他の人がするようにやるのが良い。",
          },
          {
            type: "N",
            content: "自分なりのやり方を作るのが良い。",
          },
        ],
      },
      {
        which: "SN",
        question: "周りの人が私によく言うのは？",
        answers: [
          {
            type: "S",
            content: "粘り強くて忍耐力があるとよく言われる。",
          },
          {
            type: "N",
            content: "創造的でオリジナリティがあるとよく言われる。",
          },
        ],
      },
      {
        which: "TF",
        question: "断らなければならない状況になったとき、私は？",
        answers: [
          {
            type: "T",
            content: "はっきりとできないと伝える。",
          },
          {
            type: "F",
            content: "悩んだ末、たいていは受け入れてしまう。",
          },
        ],
      },
      {
        which: "TF",
        question: "怒ったとき、私は？",
        answers: [
          {
            type: "T",
            content: "論理的に話して相手を問い詰める。",
          },
          {
            type: "F",
            content: "言いたいことはたくさんあるけど、悔しくて涙が先に出てくる。",
          },
        ],
      },
      {
        which: "TF",
        question: "悩みを話す友達の話を聞いていたら、友達に非があるように思える。そんなとき私は？",
        answers: [
          {
            type: "T",
            content: "友達の間違っている点を指摘する。",
          },
          {
            type: "F",
            content: "直接言うと友達が傷つくかもしれないので、遠回しに伝える。",
          },
        ],
      },
      {
        which: "JP",
        question: "準備物を用意するとき、私は？",
        answers: [
          {
            type: "J",
            content: "前日に準備しておく。",
          },
          {
            type: "P",
            content: "「明日用意しよう」と思いながら、忘れて持っていかないことが多い。",
          },
        ],
      },
      {
        which: "JP",
        question: "終わった後に家で勉強しようと思っていたのに、友達が遊ぼうと誘ってきた。私は？",
        answers: [
          {
            type: "J",
            content: "予定にないことで...とても戸惑う。",
          },
          {
            type: "P",
            content: "オッケー！やっぱり計画通りにいかないのが人生！遊ぼう！！！！",
          },
        ],
      },
      {
        which: "JP",
        question: "私が行きたい旅行先のスタイルは？",
        answers: [
          {
            type: "J",
            content: "自分の計画通りに！計画的に順序よく進めるのが好き！",
          },
          {
            type: "P",
            content: "その場その場で思いついたように対応！臨機応変にするのが好き！",
          },
        ],
      },
    ],
    results: [
      {
        type: "ESTJ",
        query: "ESTJ",
        img_src:
          "/images/jp/ESTJ.png",
      },
      {
        type: "ESTP",
        query: "ESTP",
        img_src:
          "/images/jp/ESTP.png",
      },
      {
        type: "ESFJ",
        query: "ESFJ",
        img_src:
          "/images/jp/ESFJ.png",
      },
      {
        type: "ESFP",
        query: "ESFP",
        img_src:
          "/images/jp/ESFP.png",
      },
      {
        type: "ENTJ",
        query: "ENTJ",
        img_src:
          "/images/jp/ENTJ.png",
      },
      {
        type: "ENTP",
        query: "ENTP",
        img_src:
          "/images/jp/ENTP.png",
      },
      {
        type: "ENFJ",
        query: "ENFJ",
        img_src:
          "/images/jp/ENFJ.png",
      },
      {
        type: "ENFP",
        query: "ENFP",
        img_src:
          "/images/jp/ENFP.png",
      },
      {
        type: "ISTJ",
        query: "ISTJ",
        img_src:
          "/images/jp/ISTJ.png",
      },
      {
        type: "ISTP",
        query: "ISTP",
        img_src:
          "/images/jp/ISTP.png",
      },
      {
        type: "ISFJ",
        query: "ISFJ",
        img_src:
          "/images/jp/ISFJ.png",
      },
      {
        type: "ISFP",
        query: "ISFP",
        img_src:
          "/images/jp/ISFP.png",
      },
      {
        type: "INTJ",
        query: "INTJ",
        img_src:
          "/images/jp/INTJ.png",
      },
      {
        type: "INTP",
        query: "INTP",
        img_src:
          "/images/jp/INTP.png",
      },
      {
        type: "INFJ",
        query: "INFJ",
        img_src:
          "/images/jp/INFJ.png",
      },
      {
        type: "INFP",
        query: "INFP",
        img_src:
          "/images/jp/INFP.png",
      },
    ],
  },
];

// mbti.com
// images.mbti.com
