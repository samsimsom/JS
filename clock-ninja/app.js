console.log("--- Clock ---");

const clock = document.getElementById("clock");

const tick = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = (now.getSeconds() < 10 ? "0" : "") + now.getSeconds();

  const html = `
    <span>${h}</span> :
    <span>${m}</span> : 
    <span>${s}</span>
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
