function createShell(title){
  document.body.insertAdjacentHTML("afterbegin", `
    <div style="
      position:fixed;
      top:0;left:0;right:0;
      height:55px;
      background:#0f172a;
      border-bottom:1px solid #1f2937;
      display:flex;
      align-items:center;
      padding:0 12px;
      gap:10px;
      z-index:99999;
    ">
      <button onclick="location.href='/'">🏠 Home</button>
      <button onclick="location.href='/games/index.html'">🎮 Games</button>
      <button onclick="location.href='/marketplace/index.html'">🛒 Market</button>
      <button onclick="location.href='/tools/index.html'">🛠 Tools</button>
      <button onclick="location.href='/ai.html'">🧠 AI</button>

      <div style="margin-left:auto;color:#3b82f6;font-weight:700;">
        ${title}
      </div>
    </div>

    <div style="height:65px"></div>
  `);
}
