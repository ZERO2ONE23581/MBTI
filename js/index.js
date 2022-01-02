/* FIND HTML */
const startPage = document.querySelector('#start-page');
const questionPage = document.querySelector('#question-page');
const question = document.querySelector('.question');
const qContent = document.querySelector('.q-content');
//BUTTON
const startBtn = startPage.querySelector('button');
const btnA = document.querySelector('#btn-A');
const btnB = document.querySelector('#btn-B');
//PROGRESS BAR
const pBar = document.querySelector('.progress-bar');

//OBJECT
let num = 1; //시작하는 숫자
const qObj = {
  // E VS I
  1: { "title": "QUESTION #1", 'content': '인터넷을 하다가 재미있는 글을 보았다. 다음중 당신이 할 반응으로 적절한것은?', "type": "EI", "A": "주변의 지인들에게 공유한다.", "B": "본인의 핸드폰에 저장하고 두고 돌려본다." },
  2: { "title": "QUESTION #2", 'content': '부트캠프를 참여한뒤로 부쩍 바빠진 당신. 당신의 반응으로 적절한것은?', "type": "EI", "A": "이렇게 바쁜게 오히려 좋아. 힘든만큼 성장하는법 사람도 만나고 듣길 잘했어.", "B": "나에게는 too much information..소화하기 힘든데 혼자만의 코딩시간이 필요해.." },
  3: { "title": "QUESTION #3", 'content': '스터디 모임을 처음으로 갖게된 당신. 당신이 보인 반응으로 적절한것은?', "type": "EI", "A": "서로 어색한 분위기를 풀며 빠르게 친해져야 원할한 스터디모임이 되겠지? 빨리 친해지고 싶다", "B": "어떤 사람들인지 모르니 일단 거리를 두며 스터디를 하며 천천히 서로를 알아가는 시간을 가져야 겠다." },
  // S VS N
  4: { "title": "QUESTION #4", 'content': '넷플릭스에서 드라마를 보는 당신. 당신의 드라마 스타일은?', "type": "SN", "A": "배우 인물 스토리에 집중하는 편. 끝까지 한번에 보는 편", "B": "감동적이거나 자극적인 부분이 나오면 잠시멈추고 되새김질. 상상력 풀가동" },
  5: { "title": "QUESTION #5", 'content': '노래들을때 상황으로 당신과 비슷한것은?', "type": "SN", "A": "멜로디가 좋으면 일단 저장함", "B": "멜로디 좋아도 가사가 매칭안되면 탈락. 이해 안가는 부분있으면 곱씹어봄" },
  6: { "title": "QUESTION #6", 'content': '여행가기 전날이다. 당신으 반응은?', "type": "SN", "A": "설레이는 마음으로 빨리 잠듬. 숙소예약한번 확인하고 바로 취침", "B": "어떻게 놀지 시뮬레이션 하다 잠듬. 일어나지도 않을 걱정하다 잠듬" },
  //T VS F
  7: { "title": "QUESTION #7", 'content': '친구: 오늘기분안좋아서 매운음식 먹었어 당신:?', "type": "TF", "A": "갑자기? 무슨 음식 먹었는데?", "B": "무슨일 있었어? 기분이 왜?" },
  8: { "title": "QUESTION #8", 'content': '코딩테스트에 떨어진 친구를 만났다. 당신의 반응은?', "type": "TF", "A": "시험 유형이 어떻게 나왔어? 점수는?", "B": "이번 코테가 어려웠데..다음엔 꼭 붙을거야!" },
  9: { "title": "QUESTION #9", 'content': '안좋은 일이 있어 퇴사했다는 당신의 친구에게 당신이 보인 반응은?', "type": "TF", "A": "퇴사했다고? 이직계획은 있어? 퇴직금은?", "B": "왜 결국 상사랑 싸웠어? 아니면 프로젝트 때문에?" },
  //J VS P
  10: { "title": "QUESTION #10", 'content': '친구와 단둘이 여행을 가게된 당신. 당신의 여행스타일로 적절한것은?', "type": "EI", "A": "A부터Z까지 하나하나 꼼꼼히 계획을 세워서 가는 타입", "B": "즉흥여행을 선호하는 타입. 큰 틀만 잡고 그때그때 가서정함" },
  11: { "title": "QUESTION #11", 'content': '지인을 집으로 초대하게 된 당신의 반응으로 적절한것은?', "type": "EI", "A": "음식이 모자라지 않을까 지난번에 모자랐을때 몇명왔더라", "B": "뭐 모자라면 그때 치킨 시켜먹지 뭐" },
  12: { "title": "QUESTION #12", 'content': '운전해서 식당갈때 당신반응은?', "type": "EI", "A": "식당리뷰, 거리, 평점등을 확인하고 주차할 장소있는지 미리 체킹", "B": "일단 가보고 괜찮다 싶으면 들어가보자" },
}
//MBTI RESULT
const resultPage = document.querySelector('#result-page');
const resultImg = resultPage.querySelector('img');
const resultTit = resultPage.querySelector('#result-title');
const resultExp = resultPage.querySelector('#result-explain');

let resultObj = {
  "ESTJ": { "result-title": "시바견", "result-explain": "당신은 사랑스러운 시바견 18!", "img": "img/001.jpg" },
  "ESTP": { "result-title": "Elon Musk", "result-explain": "당신은 일론머스크 dodge to the moon~!", "img": "img/002.jpg" },
  "ESFJ": { "result-title": "Spiderman", "result-explain": "당신은 우리들의 이웃 거미인간", "img": "img/003.jpg" },
  "ESFP": { "result-title": "피카츄", "result-explain": "당신은 사랑스러운 피카츄", "img": "img/004.jpg" },
  "ENTJ": { "result-title": "핑구", "result-explain": "당신은 귀여운 핑구", "img": "img/005.jpg" },
  "ENTP": { "result-title": "루피", "result-explain": "당신은 군침이 사악돈 루피", "img": "img/006.jpg" },
  "ENFJ": { "result-title": "궁예", "result-explain": "기침소리를 싫어하는 당신은 궁예", "img": "img/007.jpg" },
  "ENFP": { "result-title": "Drake", "result-explain": "당신은 쌉인싸 드레이크", "img": "img/008.jpg" },
  "ISTJ": { "result-title": "Happy pepe", "result-explain": "당신은 옳게된 페페", "img": "img/009.jpg" },
  "ISTP": { "result-title": "Laughing Yao-Ming", "result-explain": "언제나 긍정적인 당신은 야오밍", "img": "img/010.jpg" },
  "ISFJ": { "result-title": "Jerry", "result-explain": "당신은 어딘가 이상한 제리", "img": "img/011.jpg" },
  "ISFP": { "result-title": "memeMan", "result-explain": "어디서나 포커페이스인 그저 밈맨", "img": "img/012.jpg" },
  "INTJ": { "result-title": "Sad pepe", "result-explain": "기운내요 새드페페!", "img": "img/013.jpg" },
  "INTP": { "result-title": "Tony Stark", "result-explain": "고구마 10개 먹은듯한 기분!", "img": "img/014.jpg" },
  "INFJ": { "result-title": "스폰지밥", "result-explain": "눈치는 없지만 착한 친구인 당신 스폰지밥!", "img": "img/015.jpg" },
  "INFP": { "result-title": "Be Smart!", "result-explain": "누구보다 똑똑한 당신! 증말 똑똑하다", "img": "img/016.jpg" },
}
//NEXT 함수
function next() {
  if (num == 13) {
    questionPage.hidden = true;
    resultPage.hidden = false; //result page로 이동
    //final logic
    let mbti = '';
    ($('#EI').val() < 2) ? mbti += "I" : mbti += "E";
    ($('#SN').val() < 2) ? mbti += "N" : mbti += "S";
    ($('#TF').val() < 2) ? mbti += "F" : mbti += "T";
    ($('#JP').val() < 2) ? mbti += "P" : mbti += "J";
    alert(mbti);
    //result html
    resultImg.setAttribute('src', resultObj[mbti]['img']);
    resultTit.innerText = resultObj[mbti]['result-title'];
    resultExp.innerText = resultObj[mbti]['result-explain'];
    console.log(resultObj[mbti]['img']);
  } else {
    pBar.setAttribute('style', 'width: calc(100/12*' + num + '%)');
    question.innerText = qObj[num]['title']; //문제제목 변경
    qContent.innerText = qObj[num]['content']; //문제내용 변경
    $('#question-input').val(qObj[num]['type']);
    btnA.innerText = qObj[num]['A']; //E -> S -> T -> J
    btnB.innerText = qObj[num]['B']; //I -> N -> F -> P
    num = num + 1;
  }
}
/* 초기화면 */
questionPage.hidden = true;
resultPage.hidden = true;
startBtn.addEventListener('click', function hideNshow() {
  startPage.hidden = true; //hiden속성
  questionPage.hidden = false;
  next();
});
///BUTTON A
btnA.addEventListener('click',
  function clickA() {
    let qInpV = $('#question-input').val(); //'EI'
    let preInpV = $('#' + qInpV).val(); //'0'
    $('#' + qInpV).val(parseInt(preInpV) + 1); // '0' -> 1 -> 2 -> 3..
    next();
  }
);
///BUTTON B
btnB.addEventListener('click',
  function clickB() {
    next();
  }
);
