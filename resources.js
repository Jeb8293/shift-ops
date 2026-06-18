function renderResources(){
  const box = document.getElementById("resourceContainer");
  box.innerHTML = RESOURCES.map(r => `
    <div class="resource">
      <button onclick="this.parentElement.classList.toggle('open')">
        <span>${esc(r[0])}</span><span>⌄</span>
      </button>
      <div class="resource-content">${esc(r[1])}</div>
    </div>
  `).join("");
}

renderResources();
