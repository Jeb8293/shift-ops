const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgobgeye";

const checklistData = {
  am: {
    label: "AM Shift",
    sections: [
      {
        title: "Overnight & Reporting Review & Follow-ups",
        items: [
          "Review overnight shift report & complete necessary follow-ups.",
          "Review no-show report. Communicate group no-shows in intro email for update.",
          "Review GEM notes report from NA and take necessary action.",
          "Review High/Low report and make necessary adjustments.",
          "Ensure AMEX, Globalist, LT Globalist, Guest of Honor, & Courtesy Card welcome letters are prepared.",
          "Ensure Employee Discount form with welcome letter is prepared.",
          "Ensure package posting is correct. Make any necessary changes."
        ]
      },
      {
        title: "Reservations & Arrivals",
        items: [
          "Ensure PM Accounts are checked in for the day. Remove no posts.",
          "Check in B2B reservations.",
          "Review/assign VIPs & communicate at stand-up.",
          "Ensure Elite Member and Amex upgrades are completed if available (avoid hard blocking).",
          "Ensure DF for Globalist, Lifetime Globalist, Courtesy Card, and Guest of Honor are removed.",
          "Review arrival email for Elite tier levels.",
          "Ensure award reservations (room, tax, parking) are routed to CL (Window 2).",
          "Review inventory and balance if necessary.",
          "Review Pre-Arrival Dashboard for Traces and Alerts.",
          "Review “Reservations Made Yesterday” report for completeness (alerts, routing, deposit rules if needed)."
        ]
      },
      {
        title: "Daily Performance Goals",
        items: [
          "Share daily World of Hyatt enrollment goal based on non-member arrivals.",
          "Share daily upsell goal with the team.",
          "Review HySat reviews.",
          "Respond to guest reviews.",
          "Recognize and praise team members.",
          "Coach team members as needed."
        ]
      },
      {
        title: "Billing",
        items: [
          "Review Credit Limit Report and follow up on outstanding balances.",
          "Run batch deposits in Colleague Advantage and communicate/log declined reservations.",
          "Complete Sertifi authorizations.",
          "Review cancelled reservations and process accordingly.",
          "Review Cashier Journal throughout the shift and ensure all agents complete theirs.",
          "Review open folios and communicate outstanding balances.",
          "Coordinate with Valet to ensure parking is attached to arriving guest reservations."
        ]
      },
      {
        title: "Throughout Shift",
        items: [
          "Ensure Medallia responses are communicated in a timely manner.",
          "Respond to emails.",
          "Enter manual OTA reservations and respond to OTA review requests.",
          "Send daily shift report.",
          "Communicate room moves, early departures, and extended stays to Housekeeping.",
          "Scan report to Front Office Leadership with completed backup."
        ]
      },
    ]
  },

  pm: {
    label: "PM Shift",
    sections: [
      {
        title: "PreArrival Planning",
        items: [
          "Review/assign VIPs and communicate in email. Place rooms OOS until DOA if occupancy allows.",
          "Ensure Elite Member/Amex upgrades are completed if available.",
          "Review GEM notes, take action, and communicate as needed.",
          "Ensure DF for Globalist, Lifetime Globalist, Courtesy Card, and Guest of Honor are removed for the next 3–5 business days.",
          "Ensure award reservations (room, tax, parking) are routed to CL (Window 2).",
          "Review inventory and balance if necessary.",
          "Review “Reservations Made Yesterday” report. Add alerts, routing, and deposit rules if needed.",
          "Review the Pre-Arrival Dashboard filter to plan accordingly (feather free, multiple reservations, etc.). Communicate actions taken.",
          "Prepare welcome letters for Amex, Lifetime Globalist, Globalist, Courtesy Card, and Guest of Honor for the next day’s arrivals (assign to team members during downtime).",
          "Prepare employee discount forms and welcome letters for the next day’s arrivals."
        ]
      },
      {
        title: "Performance",
        items: [
          "Review HySat reviews.",
          "Respond to HySat Alerts.",
          "Recognize and praise team members.",
          "Coach as needed."
        ]
      },
      {
        title: "Billing",
        items: [
          "Review Credit Limit Report and follow up on outstanding balances.",
          "Run batch deposits in Colleague Advantage. Communicate and log declined reservations.",
          "Complete Sertifi authorizations for upcoming arrivals and add notes to reservations.",
          "Review cancelled reservations and process accordingly.",
          "Review Cashier Journal throughout the shift and at end of shift. Ensure all agents complete and sign off.",
          "Review open folios, process as needed, and communicate outstanding balances.",
          "Review High/Low Report and make necessary adjustments if needed.",
          "Coordinate with Valet for vehicles parked during your shift and ensure parking is added to reservations."
        ]
      },
      {
        title: "Throughout Shift",
        items: [
          "Ensure Medallia responses are communicated in a timely manner.",
          "Respond to emails.",
          "Enter manual OTA reservations and respond to OTA review requests.",
          "Communicate room moves in the shift report.",
          "Communicate World of Hyatt enrollment goal versus actual results in the shift report.",
          "Review Zero Rate Report. Only MGCM reservations with notes should be listed.",
          "Send the daily shift report.",
          "Scan the completed checklist with backup reports to Front Office Leadership."
        ]
      }
    ]
  },

  night: {
    label: "Night Audit",
    sections: [
      {
        title: "Shift Startup",
        items: [
          "Log in to Opera Cloud, Colleague Advantage, Medallia Concierge, BOB, and Email.",
          "Count and verify bank ($500). Notify management if the bank is over or short."
        ]
      },
      {
        title: "Pre-Audit",
        items: [
          "Confirm all PM accounts have been checked in for the day. Check in any remaining PM arrivals.",
          "Review arrivals for any late arrivals/redeye arrivals. Pre-check in to secure the room, change payment to cash if applicable, collect payment upon arrival, add notes, and communicate remaining payment issues in the shift report.",
          "Verify rates for all in-house guests using the Guest In-House Rate Check.",
          "Ensure all comp rooms have proper authorization notes.",
          "Ensure third-party reservations are routed to Window 2.",
          "Ensure group rates are correct by cross-referencing the Resume in BOB.",
          "Ensure World of Hyatt awards are attached to redemption stays.",
          "Post valet charges using Fast Posting (Transaction Code 5210)."
        ]
      },
      {
        title: "Pre-Audit No-Show Process",
        items: [
          "Unassign rooms that have not arrived to avoid room status changing to Pick Up.",
          "Print the Remaining Arrivals report.",
          "Pre-check in any guest approved for late arrival to secure the room.",
          "Send the “No Show & Date” email to Front Desk and Housekeeping.",
          "If occupancy is above 85%, complete the Comp A worksheet and email the Comp A report to Front Office Leadership.",
          "Complete the Comp A Dashboard and load applicable rates into Colleague Advantage."
        ]
      },
      {
        title: "Before Running Audit",
        items: [
          "Collect advance deposits due for yesterday and today. Cancel reservations with declined deposits and notify the guest.",
          "Review group blocks not picked up and wash rooms when appropriate.",
          "Review open folios. Folios should not remain open longer than 24 hours.",
          "Print the Valet Journal (Transaction Codes 5210 and 5215) for the AM Valet Supervisor.",
          "Run the Reservation Cancellations report.",
          "Review all cancelled reservations with deposits and process refunds or cancellation charges as appropriate.",
          "Ensure all PF accounts have a zero balance and are checked out.",
          "Review PM accounts due out and process any remaining open folios."
        ]
      },
      {
        title: "Run Night Audit",
        items: [
          "Verify all Food & Beverage outlets have submitted receipts.",
          "Verify the business date before beginning audit.",
          "Start Night Audit.",
          "Monitor audit for errors or failed postings.",
          "Correct any errors that prevent audit from completing.",
          "Contact Oracle Support if audit cannot be completed.",
          "Verify audit completes successfully.",
          "Ensure audit is completed before 4:00 AM."
        ]
      },
      {
        title: "Post-Audit No Show Process",
        items: [
          "Process payment for all No Show postings.",
          "If payment declines, adjust the No Show posting so no balance remains.",
          "Review group No Shows and reinstate placeholder reservations if appropriate. Otherwise communicate with leadership before cancelling."
        ]
      },
      {
        title: "New Day",
        items: [
          "Verify all PF accounts checked out automatically.",
          "Check in all PM accounts and remove No Post when appropriate.",
          "Review the Credit Limit Report and follow up on over-limit guests.",
          "Verify No Shows and cancellations were charged appropriately.",
          "If a guest checks in after the day rolls, dirty the room for Housekeeping and manually post the first night’s room and tax.",
          "Resolve all Front Office traces.",
          "Run all outstanding deposits.",
          "Review detailed availability and notify the AM MOD of any negative availability.",
          "Run the Duplicate Reservations report and communicate B2B reservations in the shift report.",
          "Remove email addresses from OTA reservations.",
          "Verify deposits and routing are correct for all OTA reservations.",
          "Review AMEX (Hotel Collection) reservations and prepare welcome letters.",
          "Review Sertifi authorizations and verify billing setup.",
          "Review VIP reservations and assign rooms as appropriate.",
          "Communicate all V8 arrivals during pass-along.",
          "File all paperwork in the Front Office Daily Checklist Binder.",
        ]
      },
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
