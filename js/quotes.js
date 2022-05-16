const quotes = [
    {
        quote: "인터넷에 도는 유명인들의 어록의 단점은 진위를 알기 어렵다는 점이다",
        author: "에이브러햄 링컨"
    },{
        quote: "개에게 물린 상처는 개를 죽인다고 아물지 않는다",
        author: "에이브러햄 링컨"
    },{
        quote: "과학에는 국경이 없다, 왜냐하면 지식은 인류의 것이고 세상을 밝히는 횃불이기 때문이다",
        author: "루이 파스퇴르"
    },{
        quote: "관찰하는데 있어서는 준비된 자에게만 기회가 온다",
        author: "루이 파스퇴르"
    },{
        quote: "괴물과 싸우는 사람은 그 싸움 속에서 스스로도 괴물이 되지 않도록 조심해야 한다. 우리가 괴물의 심연을 오래동안 들여다 본다면, 그 심연 또한 우리를 들여다 보게될 것이다",
        author: "프리드리히 니체"
    },{
        quote: "나는 길을 찾든지 만들든지 하겠다",
        author: "한니발 바르카"
    },{
        quote: "나로 말하자면, 나는 내가 아무것도 모른다는 것만을 알 뿐이다",
        author: "소크라테스"
    },{
        quote: "네가 좋아하지 않는 사람들을 생각하는데는 단 1분도 허비하지 마라",
        author: "드와이트 D. 아이젠하워"
    },{
        quote: "늘 갈망하고 우직하게 나아가라",
        author: "스티브 잡스"
    },{
        quote: "만약 당신이 누군가의 인격을 시험해 보고 싶다면, 그에게 권력을 줘 보라",
        author: "에이브러햄 링컨"
    },{
        quote: "말할 수 없는 것에 대해서는 침묵해야 한다",
        author: "루드비히 비트겐슈타인"
    },{
        quote: "모든 국가는 그에 걸맞은 정부를 가진다",
        author: "조제프 드 메스트르"
    },{
        quote: "모든 세대는 스스로를 이전 세대보다 똑똑하고, 다음 세대보다 현명하다고 생각한다",
        author: "조지 오웰"
    },{
        quote: "반성되지 않는 삶은 인간으로서 살 가치가 없다",
        author: "소크라테스"
    },{
        quote: "삶도 모르는데 어찌 죽음을 알겠는가?",
        author: "공자"
    },{
        quote: "상상력은 지식보다 중요하다. 지식은 제한되어 있지만 상상력은 온 세상을 아우르고, 진보를 촉진하며, 진화의 시발점이 되기 때문이다",
        author: "알베르트 아인슈타인"
    },{
        quote: "세상이 널 버렸다고 생각하지마라. 세상은 널 가진 적이 없다",
        author: "에르빈 롬멜"
    },{
        quote: "악인의 무관심은 선행이 되지만 선인의 무관심은 악행이 된다",
        author: "이오시프 스탈린"
    },{
        quote: "용감한 사람은 적뿐 아니라 쾌락까지 극복하는 사람이다",
        author: "데모크리토스"
    },{
        quote: "죽음은 아무것도 아니다. 그러나 승리하지 못한 삶을 살 바엔 차라리 죽는게 낫다",
        author: "나폴레옹 보나파르트"
    },{
        quote: "지식에 대한 투자가 언제나 최고의 이윤을 낸다",
        author: "벤자민 프랭클린"
    },{
        quote: "평화적 수단으로밖에 평화를 실현할 수 없다고 생각하는 국가는, 머지않아 다른 국가에게 흡수될 것이다",
        author: "리처드 닉슨"
    },{
        quote: "피에 굶주리고 복수에 목마른 적에 맞서려면 무엇보다 한없는 증오를 활용해야 한다",
        author: "파울 요제프 괴벨스"
    },{
        quote: "하늘을 올려다보세요. 내려다보고만 있다면 절대 무지개를 찾지 못할 겁니다",
        author: "찰리 채플린"
    },{
        quote: "한 명의 죽음은 비극이지만, 백만 명의 죽음은 통계다",
        author: "이오시프 스탈린"
    },{
        quote: "행복은 최고의 선이자 미덕의 구현이며 완벽한 실행으로, 이를 성취하는 이들도 있지만 거의 또는 조금도 갖지 못한 이들도 있다",
        author: "아리스토텔레스"
    },{
        quote: "현명한 자는 보는 걸 믿고 겁쟁이는 믿는 걸 본다",
        author: "이오시프 스탈린"
    }]; // 27개 있음

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = ` - ${randomQuote.author}`;