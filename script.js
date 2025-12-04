(function(){
  const KEY = 'starlightIntroSeen';
  const overlay = document.getElementById('intro-overlay');
  const explosion = document.getElementById('explosion');
  const unity = document.getElementById('unity-loading');

  // Skip intro if already seen
  if(localStorage.getItem(KEY) === '1'){
    overlay.classList.add('hidden');
    return;
  }

  // 50/50 chance
  const showExplosion = Math.random() < 0.5;

  if(showExplosion){
    explosion.classList.remove('hidden');
    setTimeout(() => {
      overlay.classList.add('hidden');
      localStorage.setItem(KEY, '1');
    }, 1500);
  } else {
    unity.classList.remove('hidden');
    setTimeout(() => {
      overlay.classList.add('hidden');
      localStorage.setItem(KEY, '1');
    }, 4000);
  }
})();