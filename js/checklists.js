const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgobgeye";

const checklistData = {
  am: {
    label: "AM Shift",
    sections: [
      {
        title: "Shift Startup",
        items: [
          "Communicate with previous shift for pass-along information.",
          "Count bank ($500) and report discrepancies.",
          "Open CA, Opera Cloud (if needed), Medallia Concierge, BOB, Outlook (Email), and Guest Issue Log",
          "Review occupancy, arrivals, departures, room inventory, and OOO rooms.",
          "Check HySat for alerts, guest recovery opportunities, and unresolved guest concern"
        ]
      },
      {
        title: "Pre-Arrival Planning",
        items: [
          "Review Pre-Arrival Dashboard.",
          "Assign rooms for elite members.",
          "Review traces and alerts.",
          "Review GEM notes and preferences.",
          "Review multiple reservations.",
          "Review survey-prone arrivals."
        ]
      },
      {
        title: "Billing & Payment",
        items: [
          "Review high balance report.",
          "Authorize cards requiring authorization.",
          "Verify OTA routing.",
          "Review award stays.",
          "Verify virtual cards are correctly routed."
        ]
      },
      {
        title: "Shift Close",
        items: [
          "Close cashier.",
          "Stock desk supplies.",
          "Complete reports.",
          "Prepare PM shift handoff."
        ]
      }
    ]
  },

  pm: {
    label: "PM Shift",
    sections: [
      {
        title: "Shift Startup",
        items: [
          "Review occupancy and arrivals.",
          "Review guest recovery opportunities.",
          "Review traces and alerts.",
          "Count bank.",
          "Review pass-along."
        ]
      },
      {
        title: "Arrival Management",
        items: [
          "Review remaining arrivals.",
          "Review PM arrivals.",
          "Review late arrivals.",
          "Review red-eye arrivals.",
          "Communicate arrival concerns."
        ]
      },
      {
        title: "Billing & In-House Review",
        items: [
          "Review routing.",
          "Review comp rooms.",
          "Verify award stays.",
          "Review valet charges.",
          "Review high balances."
        ]
      },
      {
        title: "Audit Preparation",
        items: [
          "Collect deposits.",
          "Review cancellations.",
          "Review no-shows.",
          "Check out zero balance PFs.",
          "Prepare Night Audit handoff."
        ]
      }
    ]
  },

  night: {
    label: "Night Audit",
    sections: [
      {
        title: "Pre-Audit",
        items: [
          "Review occupancy.",
          "Review arrivals.",
          "Review no-shows.",
          "Review deposits.",
          "Review pass-along."
        ]
      },
      {
        title: "Run Audit",
        items: [
          "Verify business date.",
          "Run End of Day.",
          "Monitor for errors.",
          "Correct failed postings.",
          "Verify completion."
        ]
      },
      {
        title: "Post Audit",
        items: [
          "Review no-shows.",
          "Review availability.",
          "Review deposits.",
          "Review routing.",
          "Prepare AM handoff."
        ]
      }
    ]
  }
};

let currentShift = "am";

const checklistContainer = document.getElementById("checklistContainer");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const completionLabel = document.getElementById("completionLabel");
const shiftLabel = document.getElementById("shiftLabel");
const checklistTitle = document.getElementById("checklistTitle");
const submitButton = document.getElementById("submitChecklistBtn");

document.getElementById("shiftDate").valueAsDate = new Date();

function renderChecklist() {
  const shift = checklistData[currentShift];

  shiftLabel.value = shift.label;
  checklistTitle.textContent = `${shift.label} Checklist`;
  checklistContainer.innerHTML = "";

  shift.sections.forEach((section, sectionIndex) => {
    const wrapper = document.createElement("div");
    wrapper.className = "checklist-section open";

    wrapper.innerHTML = `
      <button class="section-toggle" type="button">
        ${section.title}
      </button>

      <div class="section-content">
        ${section.items.map((item, itemIndex) => `
          <div class="checklist-item">
            <input
              type="checkbox"
              data-section="${sectionIndex}"
              data-item="${itemIndex}"
  >
  <label>${item}</label>
</div>
        `).join("")}
      </div>
    `;

    checklistContainer.appendChild(wrapper);
  });

  document.querySelectorAll(".section-toggle").forEach(button => {
    button.addEventListener("click", () => {
      button.parentElement.classList.toggle("open");
    });
  });

  document.querySelectorAll('#checklistContainer input[type="checkbox"]').forEach(box => {
    box.addEventListener("change", updateProgress);
  });

  updateProgress();
}

function updateProgress() {
  const boxes = document.querySelectorAll('#checklistContainer input[type="checkbox"]');
  const completed = [...boxes].filter(box => box.checked).length;
  const total = boxes.length;
  const percent = total ? (completed / total) * 100 : 0;

  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${completed}/${total} completed`;
  completionLabel.value = `${completed}/${total}`;

  const progress = JSON.parse(localStorage.getItem("shiftops_progress") || "{}");

  progress[currentShift] = {
    done: completed,
    total: total
  };

  localStorage.setItem("shiftops_progress", JSON.stringify(progress));
}

function getCompletedItems() {
  const completedItems = [];

  document.querySelectorAll('#checklistContainer input[type="checkbox"]').forEach(box => {
    if (box.checked) {
      const itemText = box.closest(".checklist-item").querySelector("label").textContent;
      completedItems.push(itemText);
    }
  });

  return completedItems;
}

function getIncompleteItems() {
  const incompleteItems = [];

  document.querySelectorAll('#checklistContainer input[type="checkbox"]').forEach(box => {
    if (!box.checked) {
      const itemText = box.closest(".checklist-item").querySelector("label").textContent;
      incompleteItems.push(itemText);
    }
  });

  return incompleteItems;
}

function buildChecklistReport() {
  const name = document.getElementById("agentName").value.trim() || "Unknown";
  const date = document.getElementById("shiftDate").value || "Not entered";
  const arrivals = document.getElementById("arrivals").value || "Not entered";
  const departures = document.getElementById("departures").value || "Not entered";
  const occupancy = document.getElementById("occupancy").value || "Not entered";
  const score = document.getElementById("score").value || "Not entered";
  const unresolved = document.getElementById("unresolved").value.trim() || "N/A";
  const notes = document.getElementById("notes").value.trim() || "N/A";
  const completedItems = getCompletedItems();
  const incompleteItems = getIncompleteItems();

  return {
    _subject: `SHIFT Report | ${shiftLabel.value} | ${name}`,
    report_type: "SHIFT Ops Checklist Submission",
    timestamp: new Date().toLocaleString(),
    agent_name: name,
    date: date,
    shift: shiftLabel.value,
    arrivals: arrivals,
    departures: departures,
    occupancy: occupancy,
    check_in_score_hysat: score,
    completion: completionLabel.value,
    completed_items: completedItems.length ? completedItems.join("\n") : "No checklist items marked complete.",
    incomplete_items: incompleteItems.length ? incompleteItems.join("\n") : "All checklist items marked complete.",
    unresolved_issues: unresolved,
    shift_notes: notes
  };
}

async function submitChecklistReport() {
  if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT === "PASTE-YOUR-FORMSPREE-ENDPOINT-HERE") {
    alert("Formspree is not connected yet. Add your Formspree endpoint inside js/checklists.js.");
    return;
  }

  const agentName = document.getElementById("agentName").value.trim();

  if (!agentName) {
    alert("Please enter the agent name before submitting.");
    return;
  }

  const report = buildChecklistReport();

  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(report)
    });

    if (response.ok) {
      alert("Checklist submitted successfully.");
    } else {
      alert("The checklist could not be submitted. Please try again or notify a manager.");
    }
  } catch (error) {
    alert("The checklist could not be submitted. Please check the connection and try again.");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Submit Checklist";
  }
}

document.querySelectorAll(".shift-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".shift-tab").forEach(btn => btn.classList.remove("active"));
    tab.classList.add("active");
    currentShift = tab.dataset.shift;
    renderChecklist();
  });
});

document.getElementById("openAllBtn").addEventListener("click", () => {
  document.querySelectorAll(".checklist-section").forEach(section => {
    section.classList.add("open");
  });
});

document.getElementById("closeAllBtn").addEventListener("click", () => {
  document.querySelectorAll(".checklist-section").forEach(section => {
    section.classList.remove("open");
  });
});

document.getElementById("clearChecklistBtn").addEventListener("click", () => {
  document.querySelectorAll('#checklistContainer input[type="checkbox"]').forEach(box => {
    box.checked = false;
  });

  updateProgress();
});

submitButton.addEventListener("click", submitChecklistReport);

renderChecklist();
