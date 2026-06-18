let shifts = loadShiftData();
let currentShift = new URLSearchParams(window.location.search).get("shift") || "am";
let editMode = false;
let openSections = {};

const dateField = document.getElementById("shiftDate");
if(dateField) dateField.valueAsDate = new Date();

function key(si, ii){
  return checkKey(currentShift, si, ii);
}

function flatTasks(){
  return flatTasksForShift(shifts, currentShift);
}

function loadShift(shift){
  currentShift = shift;
  editMode = false;
  document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
  const tab = document.getElementById(shift + "Tab");
  if(tab) tab.classList.add("active");
  renderTasks();
}

function renderTasks(){
  const s = shifts[currentShift];
  document.getElementById("shiftLabel").value = s.label;
  document.getElementById("currentShiftTitle").textContent = s.label + " Checklist";
  document.getElementById("checklistPanel").classList.toggle("editMode", editMode);

  const box = document.getElementById("taskContainer");
  box.innerHTML = "";

  s.sections.forEach((sec, si) => {
    const isOpen = openSections[currentShift + "_" + si] !== false;
    const done = sec.items.filter((_, ii) => localStorage.getItem(key(si, ii)) === "true").length;

    box.innerHTML += `
      <div class="section ${isOpen ? 'open' : ''}" data-si="${si}">
        <button class="section-head" onclick="toggleSection(${si})">
          <div class="section-title">
            <strong>${esc(sec.name)}</strong>
            <span>${done}/${sec.items.length} completed</span>
          </div>
          <strong>⌄</strong>
        </button>
        <div class="section-content" id="sectionContent${si}"></div>
      </div>
    `;
  });

  s.sections.forEach((sec, si) => {
    const content = document.getElementById("sectionContent" + si);

    sec.items.forEach((item, ii) => {
      const checked = localStorage.getItem(key(si, ii)) === "true";
      content.innerHTML += `
        <div class="task ${checked ? 'done' : ''}">
          <input type="checkbox" ${checked ? 'checked' : ''} onchange="saveCheck(${si},${ii},this.checked)">
          <div class="task-text"><strong>${esc(item)}</strong><small>${esc(sec.name)}</small></div>
          <div class="edit-task">
            <input type="text" value="${esc(item)}" onchange="editItem(${si},${ii},this.value)">
            <button class="btn danger small" onclick="deleteItem(${si},${ii})">Delete</button>
          </div>
        </div>
      `;
    });

    content.innerHTML += `
      <div class="add-row">
        <input type="text" id="add_${si}" placeholder="Add new checklist item to ${esc(sec.name)}">
        <button class="btn small" onclick="addItem(${si})">Add Item</button>
      </div>
    `;
  });

  updateProgress();
}

function toggleSection(si){
  const k = currentShift + "_" + si;
  openSections[k] = openSections[k] === false ? true : false;
  renderTasks();
}

function expandAll(){
  shifts[currentShift].sections.forEach((_, si) => openSections[currentShift + "_" + si] = true);
  renderTasks();
}

function collapseAll(){
  shifts[currentShift].sections.forEach((_, si) => openSections[currentShift + "_" + si] = false);
  renderTasks();
}

function toggleEditMode(){
  editMode = !editMode;
  renderTasks();
}

function saveCheck(si, ii, val){
  localStorage.setItem(key(si, ii), val);
  renderTasks();
}

function editItem(si, ii, val){
  shifts[currentShift].sections[si].items[ii] = val.trim() || "Untitled task";
  saveShiftData(shifts);
  renderTasks();
}

function addItem(si){
  const input = document.getElementById("add_" + si);
  if(!input.value.trim()) return;
  shifts[currentShift].sections[si].items.push(input.value.trim());
  saveShiftData(shifts);
  renderTasks();
}

function deleteItem(si, ii){
  if(confirm("Delete this checklist item?")){
    shifts[currentShift].sections[si].items.splice(ii, 1);
    saveShiftData(shifts);
    renderTasks();
  }
}

function resetDefaultChecklist(){
  if(confirm("Reset this checklist to the default version?")){
    shifts[currentShift] = deepCopy(DEFAULT_SHIFTS[currentShift]);
    saveShiftData(shifts);
    renderTasks();
  }
}

function updateProgress(){
  const tasks = flatTasks();
  const done = tasks.filter(t => localStorage.getItem(key(t.si, t.ii)) === "true").length;
  const total = tasks.length;

  document.getElementById("progressBar").style.width = total ? (done / total * 100) + "%" : "0%";
  document.getElementById("progressText").textContent = `${done}/${total} items completed`;
  document.getElementById("completionLabel").value = `${done}/${total}`;
}

function submitChecklist(){
  const name = document.getElementById("agentName").value.trim();

  if(!name){
    alert("Enter agent name before submitting.");
    return;
  }

  const all = flatTasks();
  const done = all.filter(t => localStorage.getItem(key(t.si, t.ii)) === "true").length;
  const checked = all
    .filter(t => localStorage.getItem(key(t.si, t.ii)) === "true")
    .map(t => t.text)
    .join("; ");

  const submission = {
    "form-name": "shift-submissions",
    timestamp: new Date().toLocaleString(),
    shift: shifts[currentShift].label,
    name: name,
    date: document.getElementById("shiftDate").value,
    arrivals: document.getElementById("arrivals").value,
    departures: document.getElementById("departures").value,
    occupancy: document.getElementById("occupancy").value,
    score: document.getElementById("score").value,
    completed: `${done}/${all.length}`,
    completedItems: checked,
    unresolved: document.getElementById("unresolved").value,
    notes: document.getElementById("notes").value
  };

  const list = getSubmissions();
  list.push(submission);
  saveSubmissions(list);

  fetch("/", {
    method: "POST",
    headers: {"Content-Type":"application/x-www-form-urlencoded"},
    body: encodeForm(submission)
  })
  .then(() => alert("Checklist submitted successfully."))
  .catch(() => alert("Checklist saved locally, but the Netlify submission failed."));
}

function clearCurrent(){
  if(confirm("Clear current checklist checkmarks?")){
    shifts[currentShift].sections.forEach((sec, si) => {
      sec.items.forEach((_, ii) => localStorage.removeItem(key(si, ii)));
    });
    renderTasks();
  }
}

loadShift(currentShift);
