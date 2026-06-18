const shifts = loadShiftData();

function renderDashboard(){
  ["am","pm","night"].forEach(shift => {
    const all = flatTasksForShift(shifts, shift);
    const done = all.filter(t => localStorage.getItem(checkKey(shift, t.si, t.ii)) === "true").length;
    const box = document.getElementById(shift + "Dash");
    if(box) box.textContent = `${done}/${all.length} completed`;
  });
}

function renderRecent(){
  const list = getSubmissions();
  const box = document.getElementById("recentSubmissions");
  if(!box) return;

  if(!list.length){
    box.textContent = "No submissions yet.";
    return;
  }

  box.innerHTML = list.slice(-4).reverse().map(s => `
    <div class="submission">
      <strong>${esc(s.shift)}</strong> submitted by <strong>${esc(s.name)}</strong><br>
      <small>${esc(s.timestamp)} • ${esc(s.completed)}</small>
    </div>
  `).join("");
}

renderDashboard();
renderRecent();
