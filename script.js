document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('greetBtn');
  const result = document.getElementById('greetResult');

  // 定义一个计数器函数，从42开始
  let count = 1;
  function increaseCount() {
    count++;
    return count;
  }

  btn.addEventListener('click', function() {
    const currentCount = increaseCount(); // 每次调用都会 +1
    result.textContent = `我也想你了x ${currentCount} 嘻嘻！ (˃͈ દ ˂͈ ༶ ) `;
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('greetBtn2');
  const result = document.getElementById('greetResult');

  // 定义一个计数器函数，从42开始
  let count = 1;
  function increaseCount() {
    count++;
    return count;
  }

  btn.addEventListener('click', function() {
    const currentCount = increaseCount(); // 每次调用都会 +1
    result.textContent = `那我也不要想你了 呜呜！大坏蛋x ${currentCount} `;
  });
});