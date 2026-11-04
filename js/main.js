/* EDWITT STUDIO 공통 스크립트 (PC·모바일 같이 사용) */
// 고정 메뉴 높이만큼 본문 띄우기
(function(){
  var tw=document.getElementById('topwrap');
  function setH(){document.documentElement.style.setProperty('--top-h',tw.offsetHeight+'px')}
  setH();window.addEventListener('resize',setH);window.addEventListener('load',setH);
  document.getElementById('toTop').onclick=function(){window.scrollTo({top:0,behavior:'smooth'})};
  document.getElementById('toBottom').onclick=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:'smooth'})};
})();
// 현재 보고 있는 섹션의 메뉴 표시
(function(){
  var links=[].slice.call(document.querySelectorAll('.nav a'));
  if(!('IntersectionObserver' in window))return;
  var map={};links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a});
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting){links.forEach(function(a){a.classList.remove('on')});var a=map[e.target.id];if(a)a.classList.add('on');}
    });
  },{rootMargin:'-45% 0px -50% 0px'});
  Object.keys(map).forEach(function(id){var s=document.getElementById(id);if(s)io.observe(s)});
})();

// 조금 내려가면 위/아래 버튼 보이기
(function(){var j=document.querySelector('.jump');function f(){j.classList.toggle('show',window.scrollY>300)}f();window.addEventListener('scroll',f,{passive:true})})();
