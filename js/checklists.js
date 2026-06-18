const checklistData = {
  am: {
    label: "AM Shift",
    sections: [
      {
        title: "Shift Startup",
        items: [
          "Communicate with previous shift for pass-along information.",
          "Count bank and report discrepancies.",
          "Open Opera Cloud, CA, Outlook, BOB, and Medallia.",
          "Review occupancy, arrivals, departures, room inventory, and OOO rooms.",
          "Review HySat alerts and guest recovery opportunities."
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
          <label class="check-item">
            <input
              type="checkbox"
              data-section="${sectionIndex}"
              data-item="${itemIndex}"
            >
            <span>${item}</span>
          </label>
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
      const itemText = box.closest(".check-item").querySelector("span").textContent;
      completedItems.push(itemText);
    }
  });

  return completedItems;
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

document.getElementById("submitChecklistBtn").addEventListener("click", () => {
  const name = document.getElementById("agentName").value.trim() || "Unknown";
  const date = document.getElementById("shiftDate").value || "Not entered";
  const arrivals = document.getElementById("arrivals").value || "Not entered";
  const departures = document.getElementById("departures").value || "Not entered";
  const occupancy = document.getElementById("occupancy").value || "Not entered";
  const score = document.getElementById("score").value || "Not entered";
  const unresolved = document.getElementById("unresolved").value.trim() || "N/A";
  const notes = document.getElementById("notes").value.trim() || "N/A";
  const completedItems = getCompletedItems();

  const subject = encodeURIComponent(`SHIFT Report | ${shiftLabel.value} | ${name}`);

  const body = encodeURIComponent(
`SHIFT REPORT

Agent: ${name}
Date: ${date}
Shift: ${shiftLabel.value}

Arrivals: ${arrivals}
Departures: ${departures}
Occupancy: ${occupancy}
Check-In Score / HySat: ${score}
Completion: ${completionLabel.value}

COMPLETED CHECKLIST ITEMS
${completedItems.length ? completedItems.map(item => "- " + item).join("\n") : "No checklist items marked complete."}

UNRESOLVED ISSUES
${unresolved}

SHIFT NOTES
${notes}`
  );

  window.location.href = `mailto:Jennifer.Buser1@thebarnett.com?subject=${subject}&body=${body}`;
});

renderChecklist();