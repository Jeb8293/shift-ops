function getSubmissions() {
  return JSON.parse(
    localStorage.getItem("shiftops_submissions") || "[]"
  );
}

function escapeHTML(value) {
  return String(value || "").replace(
    /[&<>"']/g,
    character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[character])
  );
}

function renderSubmissions() {

  const container =
    document.getElementById("submissionsContainer");

  const submissions =
    getSubmissions();

  if (!submissions.length) {

    container.innerHTML = `
      <section class="panel">
        <p>No submissions have been entered yet.</p>
      </section>
    `;

    return;
  }

  container.innerHTML =
    submissions
      .slice()
      .reverse()
      .map(item => `
        <section class="panel submission-card">

          <div class="submission-header">
            <h2>${escapeHTML(item.shift)}</h2>

            <div class="submission-meta">
              <strong>${escapeHTML(item.name)}</strong><br>
              ${escapeHTML(item.timestamp)}
            </div>
          </div>

          <hr>

          <p>
            <strong>Completion:</strong>
            ${escapeHTML(item.completed)}
          </p>

          <p>
            <strong>Unresolved Issues:</strong><br>
            ${escapeHTML(item.unresolved || "N/A")}
          </p>

          <p>
            <strong>Shift Notes:</strong><br>
            ${escapeHTML(item.notes || "N/A")}
          </p>

        </section>
      `)
      .join("");
}

function exportCSV() {

  const submissions =
    getSubmissions();

  if (!submissions.length) {
    alert("No submissions available.");
    return;
  }

  const headers =
    Object.keys(submissions[0]);

  const csvRows = [
    headers.join(",")
  ];

  submissions.forEach(item => {

    const values =
      headers.map(header => {

        const value =
          String(item[header] || "")
            .replace(/"/g, '""');

        return `"${value}"`;

      });

    csvRows.push(values.join(","));

  });

  const blob =
    new Blob(
      [csvRows.join("\n")],
      { type: "text/csv" }
    );

  const link =
    document.createElement("a");

  link.href =
    URL.createObjectURL(blob);

  link.download =
    "shift-submissions.csv";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}

function clearSubmissions() {

  const confirmed =
    confirm(
      "Are you sure you want to delete all saved submissions?"
    );

  if (!confirmed) {
    return;
  }

  localStorage.removeItem(
    "shiftops_submissions"
  );

  renderSubmissions();
}

document
  .getElementById("exportBtn")
  .addEventListener("click", exportCSV);

document
  .getElementById("clearBtn")
  .addEventListener("click", clearSubmissions);

renderSubmissions();