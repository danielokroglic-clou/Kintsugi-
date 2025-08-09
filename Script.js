function pad(n){return String(n).padStart(2,'0')}
function countdown(){
  const target = new Date('2025-10-01T00:00:00');
  const now = new Date();
  const delta = Math.max(0, target.getTime() - now.getTime());
  const s = Math.floor(delta/1000)%60;
  const m = Math.floor(delta/60000)%60;
  const h = Math.floor(delta/3600000)%24;
  const d = Math.floor(delta/86400000);
  document.getElementById('d').textContent = pad(d);
  document.getElementById('h').textContent = pad(h);
  document.getElementById('m').textContent = pad(m);
  document.getElementById('s').textContent = pad(s);
}
setInterval(countdown, 1000); countdown();
document.getElementById('year').textContent = new Date().getFullYear();

function newsletterSubmit(e){
  e.preventDefault();
  alert('Merci ! Votre inscription est notée (démonstration).');
  e.target.reset();
}
function contactSubmit(e){
  e.preventDefault();
  alert('Message envoyé (démonstration).');
  e.target.reset();
}
