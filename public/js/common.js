// 출금 리스트 박스
document.addEventListener('DOMContentLoaded', function () {
  const withdrawList = document.querySelector('.withdraw-list');
  const itemHeight = 32; // li 한 줄 높이(px)
  const boxHeight = 170; // 보여줄 영역 높이(px)
  const visibleCount = Math.floor(boxHeight / itemHeight);

  // 예시 데이터 (3개~10개)
  const dummyData = [
    { id: 'corn****', amount: '340,000원', status: '[처리]', date: '25.07.13' },
    { id: 'ocea****', amount: '742,446원', status: '[처리]', date: '25.07.19' },
    { id: 'naiv****', amount: '742,446원', status: '[진행]', date: '25.07.18' },
    { id: 'corn****', amount: '340,000원', status: '[처리]', date: '25.07.13' },
    { id: 'ocea****', amount: '742,446원', status: '[처리]', date: '25.07.19' },
    { id: 'naiv****', amount: '742,446원', status: '[진행]', date: '25.07.18' },
    { id: 'corn****', amount: '340,000원', status: '[처리]', date: '25.07.13' },
    { id: 'ocea****', amount: '742,446원', status: '[처리]', date: '25.07.19' },
    { id: 'naiv****', amount: '742,446원', status: '[진행]', date: '25.07.18' },
    { id: 'corn****', amount: '340,000원', status: '[처리]', date: '25.07.13' },
    { id: 'ocea****', amount: '742,446원', status: '[처리]', date: '25.07.19' },
    { id: 'naiv****', amount: '742,446원', status: '[진행]', date: '25.07.18' },
    { id: 'corn****', amount: '340,000원', status: '[처리]', date: '25.07.13' },
    { id: 'ocea****', amount: '742,446원', status: '[처리]', date: '25.07.19' },
    { id: 'naiv****', amount: '742,446원', status: '[진행]', date: '25.07.18' },
    // 필요한 만큼 더 추가
  ];

  function renderWithdrawList(data) {
    withdrawList.innerHTML = '';
    data.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="id">${item.id}</span>
        <span class="amount">${item.amount}</span>
        <span class="status">${item.status}</span>
        <span class="date">${item.date}</span>
      `;
      li.classList.add('d-flex', 'justify-content-center', 'align-items-center');
      withdrawList.appendChild(li);
    });

    // 롤링 복제: 보여지는 줄수 이상일 때만 앞부분 li를 복제해 붙여줌
    if (data.length > visibleCount) {
      for (let i = 0; i < visibleCount; i++) {
        const clone = withdrawList.children[i].cloneNode(true);
        withdrawList.appendChild(clone);
      }
    }
  }

  renderWithdrawList(dummyData);

  // 롤링: 데이터가 visibleCount 초과일 때만 setInterval 사용
  if (dummyData.length > visibleCount) {
    let current = 0;
    let isAnimating = false;
    withdrawList.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
    setInterval(() => {
      if (isAnimating) return;
      isAnimating = true;
      current++;
      withdrawList.style.transform = `translateY(-${itemHeight * current}px)`;

      // 롤링 종료 시점: (원본 데이터 + 복제 visibleCount개)
      if (current === dummyData.length) {
        setTimeout(() => {
          withdrawList.style.transition = 'none';
          withdrawList.style.transform = 'translateY(0)';
          current = 0;
          setTimeout(() => {
            withdrawList.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
            isAnimating = false;
          }, 20);
        }, 500);
      } else {
        setTimeout(() => {
          isAnimating = false;
        }, 500);
      }
    }, 2000);
  } else {
    withdrawList.style.transform = 'translateY(0)';
  }
});

(function () {
  const pool = [
    '龍','虎','鳳','龜','麒','麟','玄','靈','神','仙','瑞','祥','福','禄','壽','財','富',
    '光','幻','紫','夢','星','月','雲','霞','雨','雷','虹','風','火','炎','霊',
    '蓮','華','禧','吉','慶','喜','慈','善','靜','影','鏡','琉','璃','玉','珠','金',
    '梵','禪','寶','般','若','摩','訶','薩','菩','提',
    '符','祈','魂','幽','術','道','命','氣','祭','印'
  ];
  

  const container = document.getElementById('sxgCharms');
  const count = 48;

  // 성능: 한 번에 붙이기
  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const s = document.createElement('span');
    s.textContent = pool[Math.floor(Math.random() * pool.length)];

    // 수평 위치
    s.style.setProperty('--x', Math.floor(Math.random() * 100) + '%');

    // 속도: 제각각 (느리게~빠르게)
    const minDur = 12, maxDur = 50;
    const durNum = minDur + Math.random() * (maxDur - minDur);
    const dur = durNum.toFixed(2) + 's';
    s.style.setProperty('--dur', dur);

    // 🔑 로딩 즉시 보이게: 음수 delay로 중간 프레임부터 시작
    const delay = -(Math.random() * durNum).toFixed(2) + 's';
    s.style.setProperty('--delay', delay);

    // 미세 회전
    const minRot = -6, maxRot = 6;
    s.style.setProperty('--rotStart', (Math.random() * (maxRot - minRot) + minRot).toFixed(2) + 'deg');
    s.style.setProperty('--rotEnd',   (Math.random() * (maxRot - minRot) + minRot).toFixed(2) + 'deg');

    // 크기 랜덤
    const isMobile = window.innerWidth <= 767;
    const minSize = isMobile ? 8 : 16;
    const maxSize = isMobile ? 25 : 40;
    s.style.fontSize = (Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize) + 'px';

    frag.appendChild(s);
  }

  container.appendChild(frag);
})();


// 잭팟팟 관련
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
