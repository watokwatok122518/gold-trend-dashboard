function updateTime() {
  const now = new Date();
  document.getElementById('last-updated').textContent = now.toLocaleString();
}
setInterval(() => {
  updateTime();
  console.log('Updated every 5 mins...');
}, 300000);
updateTime();
