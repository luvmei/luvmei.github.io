document.addEventListener('DOMContentLoaded', function () {
  // 당첨 리스트용
  const winningList = document.querySelector('.winning-list');
  // 출금 리스트용
  const withdrawList = document.querySelector('.withdraw-list');
  const visibleCount = 20;
  const itemHeight = 45;

  // 가상 데이터 생성
  function createWinner() {
    const names = ['홍길동', '이순신', '김연아', '손흥민', '장원영'];
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
    const amount = Math.floor(Math.random() * 900000 + 10000);
    const name = names[Math.floor(Math.random() * names.length)];
    const game = games[Math.floor(Math.random() * games.length)];
    const time = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false });
    return `
    <div class="d-flex justify-content-between align-items-center">
      <span>${game} ${time}</span>
      <span>${name}</span>
      <span>${amount.toLocaleString()}원</span>
    </div>
    `;
  }
  function createWithdraw() {
    const names = ['홍길동', '이순신', '김연아', '손흥민', '장원영'];
    const banks = ['출금신청', '출금완료', '출금대기'];
    const amount = Math.floor(Math.random() * 900000 + 10000);
    const name = names[Math.floor(Math.random() * names.length)];
    const bank = banks[Math.floor(Math.random() * banks.length)];
    const date = new Date().toLocaleDateString('ko-KR', { year: '2-digit', month: '2-digit', day: '2-digit' });
    const time = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
    return `
      <div class="d-flex justify-content-between align-items-center">
          <span>${date}</span>
          <span>${name}</span>
          <span>${amount.toLocaleString()}원</span>
      </div>
    </div>
    <div class="d-flex justify-content-round align-items-center" style="margin-top: -22px">
      
    `;
  }

  // 초기 데이터
  let winners = [];
  let withdraws = [];
  for (let i = 0; i < 10; i++) {
    winners.push(createWinner());
    withdraws.push(createWithdraw());
  }

  // 렌더 함수
  function render(listEl, arr) {
    listEl.innerHTML = '';
    arr.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = item;
      listEl.appendChild(li);
    });
  }

  // 클론 추가
  function appendClones(listEl) {
    // 기존 클론 삭제
    while (listEl.children.length > 10) listEl.removeChild(listEl.lastChild);
    for (let i = 0; i < visibleCount; i++) {
      const clone = listEl.children[i].cloneNode(true);
      listEl.appendChild(clone);
    }
  }

  // 롤링 함수
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

  // 초기 렌더링 및 클론 추가
  render(winningList, winners);
  appendClones(winningList);
  render(withdrawList, withdraws);
  appendClones(withdrawList);

  // 각각 롤링 시작
  startRolling(winningList, winners, 4500);
  startRolling(withdrawList, withdraws, 9000);

  // 주기적 데이터 추가
  setInterval(() => {
    winners.push(createWinner());
    if (winners.length > 20) winners.shift();
    render(winningList, winners);
    appendClones(winningList);
  }, 8000);

  setInterval(() => {
    withdraws.push(createWithdraw());
    if (withdraws.length > 20) withdraws.shift();
    render(withdrawList, withdraws);
    appendClones(withdrawList);
  }, 9500);
});
