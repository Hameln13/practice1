const quize = [
  {
    question : 'チューリップの原産地はどこでしょうか？',
    answers : [
      'イラン',
      'オランダ',
      'フランス',
      '中国'
    ],
    correct : 'イラン'
  }, {
    question : 'いちごは何科のしょくぶつ？',
    answers : [
      'バラ科',
      'ウリ科',
      'イチゴ科',
      '野イチゴ科'
    ],
    correct : 'バラ科'
  }, {
    question : '1円玉の裏に書かれている木は何の木？',
    answers : [
      '桜の木',
      '銀杏の木',
      '栗の木',
      '架空の木'
    ],
    correct : '架空の木'//漠然としたイメージとして書かれたもので、特定のモデルはない。他の硬貨の裏には、実在するものが描かれている’
  },{
    question :'左利き選手を指す「サウスポー」の「サウス」とはどんな意味？',
    answers : [
      '珍しい',
      '家',
      '南',
      '特に意味はない'
    ],
    correct : '南'　//球場の設計上、左利きの投手は南側の手（左手）で投げたことから、こう呼ばれた。（諸説あり）
  }
];

const quizeLength = quize.length;
let quizeIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length; 
//クイズの問題文


const setupQuiz = (e) => {
document.getElementById('js-question').textContent = quize[quizeIndex].question;
let buttonIndex = 0;
let buttonLength = $button.length;
while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quize[quizeIndex].answers[buttonIndex];
  buttonIndex++;
  }
};
setupQuiz();
 const clickHandler = (e) =>{
  if(quize[quizeIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解');
  }

  quizeIndex++;

  if (quizeIndex < quizeLength){
    //問題数があればこちらを実行
    setupQuiz();
  }else{//問題数がなければこちらを実行
   window.alert('終了！！あなたの正解数は' + score + '/' + quizeLength + 'です！');
  }
 };




//ボタンをクリックしたら正誤判定
let handlerIndex = 0; 
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener ('click',(e) => {
    　clickHandler(e);
  });  
  handlerIndex++;
};