document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('greetBtn');
  const result = document.getElementById('greetResult');

  btn.addEventListener('click', function() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString();
    result.textContent = `王昱娇你在干嘛呀！有没有想我 — 当前时间 ${timeStr}，祝你今天愉快！`;
  });
});
