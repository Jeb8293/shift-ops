function renderSubmissions(){
  const list = getSubmissions();
  const box = document.getElementById("submissionsList");

  if(!list.length){
    box.innerHTML = '<div class="panel">No submissions yet.</div>';
    return;
  }

  box.innerHTML = list.slice().reverse().map(s => `
    <div class="submission">
      <strong>${esc(s.shift)}</strong> — ${esc(s.name)}<br>
      <small>${esc(s.timestamp)} • ${esc(s.completed)}</small>
      <p><strong>Date:</strong> ${esc(s.date) || "N/A"}</p>
      <p><strong>Arrivals:</strong> ${esc(s.arrivals) || "0"} | <strong>Departures:</strong> ${esc(s.departures) || "0"} | <strong>Occupancy:</strong> ${esc(s.occupancy) || "N/A"}</p>
      <p><strong>Unresolved:</strong> ${esc(s.unresolved) || "N/A"}</p>
      <p><strong>Notes:</strong> ${esc(s.notes) || "N/A"}</p>
    </div>
  `).join("");
}

function exportCSV(){
  const list = getSubmissions();

  if(!list.length){
    alert("No submissions to export.");
    return;
  }

  const headers = Object.keys(list[0]);
  const csv = [headers.join(",")]
    .concat(list.map(r => headers.map(h => `"${String(r[h] || "").replaceAll('"','""')}"`).join(",")))
    .join("\n");

  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([csv], {type:"text/csv"}));
  a.download = "shiftops-submissions.csv";
  a.click();
}

function clearSubmissions(){
  if(confirm("Clear all saved submissions on this browser?")){
    localStorage.removeItem("shiftops_submissions");
    renderSubmissions();
  }
}

renderSubmissions();
