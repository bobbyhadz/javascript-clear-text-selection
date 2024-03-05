console.log('bobbyhadz.com');

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  // 👇️ log text selection
  console.log(window.getSelection()?.toString());

  // ✅ Clear text selection
  window.getSelection()?.removeAllRanges();
});
