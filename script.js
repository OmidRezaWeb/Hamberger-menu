window.onload = function(){
  let btn = document.getElementById('btn');
  let side = document.getElementById('side');
  btn.addEventListener('click',function(){
    btn.classList.toggle('active');
    side.classList.toggle('active');
  });
}