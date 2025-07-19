document.addEventListener('DOMContentLoaded', function () {
  const winningList = document.querySelector('.winning-list');
  const withdrawList = document.querySelector('.withdraw-list');
  const visibleCount = 100;
  const itemHeight = 48;

  const idWords = [
    'apple',
    'angel',
    'arrow',
    'aqua',
    'ant',
    'autumn',
    'axe',
    'atom',
    'audio',
    'artist',
    'bear',
    'bee',
    'berry',
    'bird',
    'blade',
    'blue',
    'bolt',
    'book',
    'boy',
    'boss',
    'brave',
    'brick',
    'breeze',
    'bubble',
    'buddy',
    'bug',
    'bunny',
    'butter',
    'button',
    'buzz',
    'cake',
    'calm',
    'camera',
    'can',
    'candy',
    'car',
    'cat',
    'charm',
    'cheese',
    'chief',
    'chip',
    'cloud',
    'clover',
    'cobra',
    'coin',
    'color',
    'comet',
    'cookie',
    'cool',
    'core',
    'corn',
    'cosmos',
    'craft',
    'crane',
    'crash',
    'cube',
    'cute',
    'cycle',
    'cyber',
    'daisy',
    'dark',
    'dash',
    'date',
    'dawn',
    'deer',
    'delta',
    'devil',
    'dice',
    'dino',
    'disk',
    'diva',
    'dog',
    'doll',
    'donut',
    'door',
    'dream',
    'duck',
    'dust',
    'duty',
    'eagle',
    'earth',
    'echo',
    'elf',
    'ember',
    'emerald',
    'fairy',
    'faith',
    'falcon',
    'fancy',
    'fang',
    'fear',
    'feather',
    'feline',
    'fern',
    'fiber',
    'field',
    'fire',
    'fish',
    'flame',
    'flash',
    'flower',
    'fluffy',
    'fog',
    'fox',
    'frame',
    'frog',
    'frost',
    'fruit',
    'fun',
    'fury',
    'gale',
    'game',
    'gap',
    'gem',
    'ghost',
    'giant',
    'gift',
    'globe',
    'glow',
    'goal',
    'gold',
    'grace',
    'grain',
    'grape',
    'grass',
    'green',
    'grin',
    'guard',
    'guest',
    'guide',
    'guitar',
    'hawk',
    'haze',
    'heart',
    'hero',
    'hill',
    'honey',
    'hope',
    'horn',
    'horse',
    'ice',
    'icon',
    'idea',
    'image',
    'jade',
    'jelly',
    'jewel',
    'joy',
    'judge',
    'jungle',
    'junior',
    'kite',
    'kitty',
    'knight',
    'lake',
    'lamb',
    'laser',
    'leaf',
    'lemon',
    'light',
    'lion',
    'lucky',
    'luna',
    'magic',
    'magnet',
    'mango',
    'maple',
    'marble',
    'mask',
    'mate',
    'meadow',
    'melon',
    'mercy',
    'metal',
    'mint',
    'mist',
    'mole',
    'moon',
    'mouse',
    'music',
    'nemo',
    'nerd',
    'night',
    'ninja',
    'noon',
    'nova',
    'nut',
    'oak',
    'ocean',
    'omega',
    'onyx',
    'opal',
    'orange',
    'orbit',
    'owl',
    'ox',
    'panda',
    'panther',
    'parrot',
    'peach',
    'pearl',
    'pebble',
    'pegasus',
    'penguin',
    'petal',
    'phantom',
    'phoenix',
    'pine',
    'pink',
    'pixel',
    'planet',
    'plum',
    'poet',
    'poker',
    'polar',
    'pony',
    'pop',
    'portal',
    'pose',
    'power',
    'prince',
    'prize',
    'puma',
    'pulse',
    'pupil',
    'puppy',
    'pure',
    'quest',
    'quick',
    'quill',
    'rabbit',
    'raccoon',
    'rain',
    'raven',
    'ray',
    'reef',
    'relic',
    'rider',
    'ring',
    'river',
    'robot',
    'rock',
    'rose',
    'ruby',
    'rush',
    'sable',
    'sage',
    'sail',
    'salmon',
    'salt',
    'samurai',
    'sand',
    'scar',
    'scout',
    'sea',
    'shadow',
    'shark',
    'sheep',
    'shell',
    'shine',
    'ship',
    'shy',
    'silver',
    'sky',
    'slime',
    'smile',
    'smoke',
    'snake',
    'snow',
    'solar',
    'sonic',
    'soul',
    'space',
    'spark',
    'spell',
    'spice',
    'spider',
    'spike',
    'spirit',
    'spring',
    'spy',
    'star',
    'steel',
    'stone',
    'storm',
    'story',
    'stream',
    'sugar',
    'sun',
    'sunny',
    'surf',
    'swift',
    'switch',
    'taco',
    'tale',
    'tank',
    'teddy',
    'terra',
    'thunder',
    'tiger',
    'time',
    'toast',
    'toffee',
    'tomato',
    'tooth',
    'topaz',
    'torch',
    'tornado',
    'tree',
    'trick',
    'tulip',
    'turtle',
    'twig',
    'twist',
    'unicorn',
    'unity',
    'vapor',
    'venus',
    'violet',
    'vision',
    'void',
    'volt',
    'vortex',
    'walnut',
    'wave',
    'web',
    'whale',
    'whisper',
    'wild',
    'willow',
    'wind',
    'wing',
    'wizard',
    'wolf',
    'wonder',
    'wood',
    'world',
    'xeno',
    'xerox',
    'yarn',
    'yellow',
    'yeti',
    'youth',
    'zeal',
    'zebra',
    'zen',
    'zero',
    'zone',
    'zoom',
    'ace',
    'alpha',
    'amigo',
    'blaze',
    'boar',
    'breeze',
    'cable',
    'card',
    'cave',
    'chief',
    'clash',
    'cloak',
    'clue',
    'dash',
    'dove',
    'drake',
    'dream',
    'echo',
    'ember',
    'fable',
    'flint',
    'frost',
    'gale',
    'gamma',
    'giant',
    'glider',
    'goblin',
    'groove',
    'harp',
    'hazel',
    'hiker',
    'honey',
    'jade',
    'jazz',
    'jewel',
    'kilo',
    'lance',
    'legend',
    'loop',
    'marble',
    'matrix',
    'maze',
    'mirage',
    'mystic',
    'nebula',
    'nova',
    'onyx',
    'oracle',
    'pebble',
    'phase',
    'pilot',
    'pixel',
    'plume',
    'quest',
    'quill',
    'racer',
    'riddle',
    'ripple',
    'rune',
    'saber',
    'sage',
    'shade',
    'shard',
    'sheen',
    'shock',
    'shy',
    'silk',
    'siren',
    'sketch',
    'sleek',
    'smash',
    'soar',
    'sol',
    'sonic',
    'sparkle',
    'specter',
    'spell',
    'spire',
    'sprite',
    'starlight',
    'steel',
    'steed',
    'stitch',
    'stride',
    'swirl',
    'talon',
    'tempo',
    'tidal',
    'token',
    'topaz',
    'trick',
    'troll',
    'trunk',
    'twirl',
    'valor',
    'vibe',
    'vine',
    'violet',
    'vivid',
    'warp',
    'whiz',
    'wisdom',
    'wisp',
    'wisp',
    'witty',
    'zenith',
    'zest',
    'zip',
    'zippy',
    'zone',
    'zuma',
  ];

  function generateDistributedTimes(count, minMinutes, maxMinutes) {
    const now = Date.now();
    const minTime = now - maxMinutes * 60 * 1000;
    const maxTime = now - minMinutes * 60 * 1000;
    const timeGap = maxTime - minTime;
    const result = [];
    for (let i = 0; i < count; i++) {
      const start = minTime + (timeGap / count) * i;
      const end = minTime + (timeGap / count) * (i + 1);
      const t = Math.floor(Math.random() * (end - start)) + start;
      result.push(new Date(t));
    }
    // 랜덤하게 섞어서 더욱 자연스럽게
    return result.sort(() => Math.random() - 0.5);
  }

  function generateId() {
    const word = idWords[Math.floor(Math.random() * idWords.length)];
    const maxLen = 7;
    const minLen = 4;
    const remain = Math.max(1, maxLen - word.length);
    const numStr = String(Math.floor(Math.random() * Math.pow(10, remain))).padStart(remain, '0');
    let id = (word + numStr).slice(0, maxLen);
    if (id.length < minLen) return generateId();
    if (id.length > 3) {
      id = id.slice(0, -3) + '***';
    } else {
      id = id[0] + '***';
    }
    return id;
  }

  function createWinner(dateObj) {
    const games = [
      '[8종]',
      '[6종]',
      '[야2]',
      '[온천]',
      '[야3]',
      '[에바]',
      '[해물]',
      '[창공]',
      '[대공]',
      '[루팡]',
      '[바다]',
      '[신천지]',
      '[알라딘]',
      '[오션]',
      '[손오공]',
      '[백경]',
    ];
    const game = games[Math.floor(Math.random() * games.length)];

    // 당첨금 최소값, 최대값
    const min = 100000;
    const max = 10000000;

    const step = 10000;
    const range = Math.floor((max - min) / step) + 1;
    const amount = min + Math.floor(Math.random() * range) * step;
    const id = generateId();
    return {
      game,
      id,
      amount,
      dateObj,
    };
  }

  const lastNames = [
    '김',
    '이',
    '박',
    '최',
    '정',
    '강',
    '조',
    '윤',
    '장',
    '임',
    '오',
    '한',
    '신',
    '서',
    '권',
    '황',
    '안',
    '송',
    '류',
    '홍',
    '전',
    '고',
    '문',
    '양',
    '손',
    '배',
    '백',
    '허',
    '유',
    '남',
  ];

  const firstNames = [
    '민수',
    '지훈',
    '지은',
    '서연',
    '현우',
    '수빈',
    '지현',
    '유진',
    '은우',
    '예린',
    '하늘',
    '진우',
    '지원',
    '예진',
    '지아',
    '서윤',
    '다은',
    '주원',
    '민준',
    '서현',
    '윤서',
    '서준',
    '연우',
    '지후',
    '가은',
    '지효',
    '도윤',
    '세은',
    '예원',
    '은서',
    '다현',
    '수현',
    '지유',
    '지민',
    '수아',
    '준서',
    '하은',
    '시우',
    '민지',
    '예준',
    '현서',
    '우진',
    '채원',
    '서진',
    '태윤',
    '민혁',
    '윤호',
    '채은',
    '예지',
    '예서',
    '소연',
    '지섭',
    '재원',
    '다솜',
    '지오',
    '수연',
    '혜원',
    '정우',
    '소민',
    '시윤',
    '다연',
    '하람',
    '주은',
    '가온',
    '재민',
    '도현',
    '시현',
    '지수',
    '성민',
    '시온',
    '예림',
    '은비',
    '재윤',
    '나연',
    '성현',
    '태민',
    '연서',
    '승우',
    '나현',
    '채윤',
    '예나',
    '은정',
    '은찬',
    '혜진',
    '정민',
    '정현',
    '재희',
    '진서',
    '수민',
    '서우',
    '서율',
    '연진',
    '동현',
    '예빈',
    '윤재',
    '주현',
    '소희',
    '예율',
    '준우',
    '지현',
    '채린',
    '은별',
    '준혁',
    '윤지',
    '우주',
    '시현',
    '아린',
    '가희',
    '준희',
    '민아',
    '서영',
    '유나',
    '수빈',
    '시원',
    '예지',
    '유빈',
    '시은',
    '유정',
    '지윤',
    '선우',
    '지원',
    '지안',
    '채아',
    '준영',
    '태희',
    '지율',
    '혜린',
    '하윤',
    '서하',
    '세린',
    '예린',
    '도연',
    '지효',
    '도현',
    '다예',
    '태은',
    '혜림',
    '서연',
    '승현',
    '승민',
    '주아',
    '예원',
    '서진',
    '세아',
    '이안',
    '하진',
    '아연',
    '민서',
    '지안',
    '지수',
    '현빈',
    '다빈',
    '은율',
    '예린',
    '나윤',
    '소율',
    '민채',
    '아윤',
    '예빈',
    '서현',
    '도경',
    '승아',
    '소율',
    '지우',
    '지후',
    '진아',
    '하율',
    '유림',
    '이준',
    '주영',
    '유리',
    '나은',
    '예주',
    '채율',
    '세진',
    '다빈',
    '다영',
    '은별',
    '현아',
    '민재',
    '주원',
    '하영',
    '은지',
    '세영',
    '정원',
    '예슬',
    '수빈',
    '하린',
    '예진',
    '예지',
    '나희',
    '윤하',
    '성은',
    '시아',
    '연우',
    '민서',
    '채린',
    '예은',
    '다영',
    '지민',
    '지율',
    '민율',
    '하랑',
    '유경',
    '지원',
    '채원',
    '채민',
    '하빈',
    '세윤',
    '시후',
    '수진',
    '성현',
    '승현',
    '지유',
    '서연',
    '하윤',
    '주희',
    '이연',
    '지영',
    '서연',
    '민지',
    '예서',
    '연주',
    '연아',
    '윤수',
    '지인',
    '윤진',
    '지혜',
    '은율',
    '예진',
    '재윤',
    '수아',
    '지유',
    '정은',
    '유빈',
    '예린',
    '서은',
    '혜주',
    '정아',
    '서원',
    '윤아',
    '예성',
    '정윤',
    '윤하',
    '유나',
    '서진',
    '현우',
    '도영',
    '유찬',
    '윤채',
    '예준',
    '채린',
    '채연',
    '하음',
    '수연',
    '해린',
    '소희',
    '예담',
    '은채',
    '승주',
    '하경',
    '윤채',
    '현정',
    '현서',
    '아현',
    '하린',
    '지연',
    '재현',
    '하준',
    '정훈',
    '다온',
    '다현',
    '다원',
    '가현',
    '채영',
    '유현',
    '예린',
    '윤서',
    '주연',
    '현정',
    '세연',
    '태양',
    '현지',
    '현주',
    '민영',
    '연진',
    '민정',
    '지서',
    '승찬',
    '지선',
    '지완',
    '재민',
    '시원',
    '예린',
    '도원',
    '성원',
    '승우',
    '준영',
    '우성',
    '태연',
    '민혁',
    '준하',
    '동건',
    '지용',
    '성주',
    '도영',
    '성진',
    '성윤',
    '재훈',
    '태호',
    '찬호',
    '현호',
    '은지',
    '채은',
    '현욱',
    '건우',
    '동욱',
    '태희',
    '지환',
    '지운',
  ];

  function generateMaskedKoreanName() {
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];

    if (firstName.length === 2) {
      return lastName + '*' + firstName[0];
    }
    if (firstName.length === 3) {
      return lastName + firstName[0] + '*' + firstName[2];
    }
    return lastName + firstName[0] + '*';
  }

  function createWithdraw(dateObj) {
    // 출금금액 최소값, 최대값
    const min = 10000;
    const max = 3000000;
    const step = 10000;

    const range = Math.floor((max - min) / step) + 1;
    const amount = min + Math.floor(Math.random() * range) * step;

    const name = generateMaskedKoreanName();
    const bank = amount;
    return {
      name,
      bank,
      amount,
      dateObj,
    };
  }

  function renderWinners(listEl, arr) {
    arr.sort((a, b) => b.dateObj - a.dateObj);
    listEl.innerHTML = '';
    arr.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
          <span>${item.game} ${item.dateObj.toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })}</span>
          <span>${item.id}</span>
          <span>${item.amount.toLocaleString()}원</span>
        </div>
      `;
      listEl.appendChild(li);
    });
  }

  function renderWithdraws(listEl, arr) {
    arr.sort((a, b) => b.dateObj - a.dateObj);
    listEl.innerHTML = '';
    arr.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
          <span>${item.dateObj.toLocaleDateString('ko-KR', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
          })}</span>
          <span>${item.name}</span>
          <span>${item.amount.toLocaleString()}원</span>
        </div>
      `;
      listEl.appendChild(li);
    });
  }

  function appendClones(listEl) {
    while (listEl.children.length > 10) listEl.removeChild(listEl.lastChild);
    for (let i = 0; i < visibleCount; i++) {
      const clone = listEl.children[i].cloneNode(true);
      listEl.appendChild(clone);
    }
  }

  function startRolling(listEl, dataArr, interval) {
    let current = 0;
    let isAnimating = false;
    setInterval(() => {
      if (isAnimating) return;
      isAnimating = true;
      listEl.style.transform = `translateY(-${itemHeight * ++current}px)`;
      if (current === dataArr.length) {
        setTimeout(() => {
          listEl.style.transition = 'none';
          listEl.style.transform = 'translateY(0)';
          current = 0;
          setTimeout(() => {
            listEl.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
            isAnimating = false;
          }, 20);
        }, 600);
      } else {
        setTimeout(() => {
          isAnimating = false;
        }, 600);
      }
    }, interval);
  }

  let winners = [];
  let withdraws = [];
  const winnerTimes = generateDistributedTimes(100, 5, 1200);
  const withdrawTimes = generateDistributedTimes(100, 10, 1200);

  for (let i = 0; i < 100; i++) {
    winners.push(createWinner(winnerTimes[i]));
    withdraws.push(createWithdraw(withdrawTimes[i]));
  }

  renderWinners(winningList, winners);
  appendClones(winningList);
  renderWithdraws(withdrawList, withdraws);
  appendClones(withdrawList);

  startRolling(winningList, winners, 7000);
  startRolling(withdrawList, withdraws, 15000);

  setInterval(() => {
    winners.push(createWinner(new Date()));
    if (winners.length > 100) winners.shift();
    renderWinners(winningList, winners);
    appendClones(winningList);
  }, 8000);

  setInterval(() => {
    withdraws.push(createWithdraw(new Date()));
    if (withdraws.length > 100) withdraws.shift();
    renderWithdraws(withdrawList, withdraws);
    appendClones(withdrawList);
  }, 9500);
});

// Jackpot 관련
const CountUp = window.countUp.CountUp;
const STORAGE_KEY = 'jackpotValue';
const jackpotAmount = document.querySelector('.jackpot-amount');

// 시작 값 설정(1400만원~1450만원)
let lastValue = parseInt(localStorage.getItem(STORAGE_KEY), 10);
if (isNaN(lastValue)) {
  lastValue = 14000000 + Math.floor(Math.random() * 500000); // 1400만원~1450만원
  localStorage.setItem(STORAGE_KEY, lastValue);
}

function animateJackpot(newValue) {
  const duration = 1.2 + Math.random() * 0.6;
  const countUp = new CountUp(jackpotAmount, newValue, {
    startVal: lastValue,
    duration: duration,
    separator: ',',
    suffix: ' 원',
  });
  if (!countUp.error) {
    countUp.start();
  } else {
    // jackpotAmount.textContent = `${newValue.toLocaleString()} 원`;
    jackpotAmount.textContent = newValue.toLocaleString();
  }
  lastValue = newValue;
  localStorage.setItem(STORAGE_KEY, newValue);
}

function increaseJackpot() {
  const min = 300,
    max = 2000,
    step = 1;
  const steps = Math.floor((max - min) / step) + 1;
  const inc = min + Math.floor(Math.random() * steps) * step;
  const next = lastValue + inc;
  animateJackpot(next);

  const nextDelay = 2000 + Math.random() * 3000; // 2000~5000ms
  setTimeout(increaseJackpot, nextDelay);
}

// 최초 표시
animateJackpot(lastValue);
setTimeout(increaseJackpot, 2000 + Math.random() * 3000);
