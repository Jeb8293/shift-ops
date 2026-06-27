const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgobgeye";

const checklistData = {
  am: {
  label: "AM Shift",
  sections: [
    {
      title: "Overnight & Reporting Review & Follow-ups",
      items: [
        "Review overnight shift report and complete any necessary follow-ups.",
        "Review No-Show Report and communicate group no-shows in Intro email for update.",
        "Review GEM Notes report from Night Audit and take necessary action.",
        "Review High/Low Report and make necessary adjustments if needed.",
        "Ensure Amex, Globalist, Lifetime Globalist, Guest of Honor, and Courtesy Card welcome letters are prepared.",
        "Ensure employee discount form with welcome letter is prepared.",
        "Ensure package posting is correct and make any necessary changes."
      ]
    },

    {
      title: "Reservations & Arrivals",
      items: [
        "Ensure PM accounts are checked in for the day (No Posts removed).",
        "Ensure B2B reservations are checked in.",
        "Review/assign VIPs and communicate at stand-up.",
        "Ensure Elite Member and Amex upgrades are completed if available (avoid hard blocking).",
        "Ensure DF for Globalist, Lifetime Globalist, Courtesy Card, and Guest of Honor are removed.",
        "Review arrival email for Elite tier levels.",
        "Ensure award reservations (room, tax, parking) are routed to CL (Window 2).",
        "Review inventory and balance if necessary.",
        "Review Pre-Arrival Dashboard for Traces and Alerts.",
        "Review 'Reservations Made Yesterday' report for completeness (alerts, routing, deposit rules, etc.)."
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
        "Review cashier journal throughout the shift and ensure all agents complete theirs.",
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
        "Scan report to Front Office leadership with completed backup."
      ]
    }
  ]
},

  pm: {
  label: "PM Shift",
  sections: [
    {
      title: "Pre-Arrival Planning",
      items: [
        "Review/assign VIPs and communicate in email. Place rooms OOS until DOA if occupancy allows.",
        "Ensure Elite Member/Amex upgrades are completed if available (avoid hard blocking).",
        "Review GEM notes, take action, and communicate as needed.",
        "Ensure DF for Globalist, Lifetime Globalist, Courtesy Card, and Guest of Honor are removed for the next 3–5 business days.",
        "Ensure award reservations (room, tax, parking) are routed to CL (Window 2).",
        "Review inventory and balance if necessary.",
        "Review 'Reservations Made Yesterday' report. Add alerts, routing, and deposit rules if needed.",
        "Review the Pre-Arrival Dashboard filter to plan accordingly (feather free, multiple reservations, etc.). Communicate actions taken.",
        "Prepare welcome letters for Amex, Lifetime Globalist, Globalist, Courtesy Card, and Guest of Honor for the next day's arrivals (assign to team members during downtime).",
        "Prepare employee discount forms and welcome letters for the next day's arrivals."
      ]
    },

    {
      title: "Performance",
      items: [
        "Review HySat reviews.",
        "Respond to reviews.",
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
      title: "Startup",
      items: [
        "Review Scam Alert regarding fraudulent Hyatt IT calls. Never post negative postings in Opera if requested by a caller.",
        "Log in to Opera Cloud, Colleague Advantage, Medallia Concierge, BOB, and Email.",
        "Count and verify bank ($500). If bank is short or over, email Keke."
      ]
    },

    {
      title: "Pre-Night Audit",
      items: [
        "Confirm all PM accounts have been checked in for the day. Check in any remaining PM arrivals.",
        "Review arrivals for any late/red-eye arrivals. Pre-check in, update payment if necessary, collect payment upon arrival, add notes, and communicate remaining arrivals requiring payment in the shift report.",
        "Run Guest In-House Rate Check.",
        "Ensure all comps are authorized (note should be on reservation).",
        "Ensure third-party bookings are routed to Window 2.",
        "Ensure group rates are correct (cross-reference Resume view in BOB).",
        "Ensure World of Hyatt award routing is attached to redemption stays.",
        "Post valet charges using Fast Posting (Cashiering → Fast Posting → Transaction Code 5210 → Amount $50.00)."
      ]
    },

    {
      title: "Pre-Audit No Show Process",
      items: [
        "Unassign rooms that have not arrived to prevent room status changing to Pick Up.",
        "Print list of remaining arrivals.",
        "Pre-check in any arriving guest whose payment has already been authorized.",
        "Send separate 'NO SHOW & DATE' email to Front Desk and Housekeeping notifying them of no-shows and possible early arrivals.",
        "When occupancy exceeds 85%, complete the Comp A Worksheet to determine the new daily rate.",
        "Email the completed Comp A Report to Front Office Leadership.",
        "Enter Comp A Dashboard numbers into Colleague Advantage under WOH Comp A using the tax-inclusive rate."
      ]
    },

    {
      title: "Night Audit Responsibilities",
      items: [
        "Collect advance deposits due for yesterday and today. Cancel and email guests with declined payments.",
        "Review group blocks with rooms still to be picked up and wash today's rooms.",
        "Review open folios. All folios should be closed within 24 hours. Communicate any open folios (Management only).",
        "Print Valet Journal by Cashier and Transaction Codes 5210 & 5215 and provide to the AM Valet Supervisor.",
        "Run Reservation Cancellations Report (Misc → Reports → Reservation Cancellations).",
        "Review every cancelled reservation with a deposit and process cancellation fee or refund according to policy.",
        "Ensure all PF accounts have a $0.00 balance and check them out to zero.",
        "Review PM accounts due to check out and close any open folios."
      ]
    },

    {
      title: "Run Night Audit",
      items: [
        "Verify all Food & Beverage outlets have submitted receipts.",
        "Monitor the audit until completion.",
        "Run audit before 4:00 AM (no exceptions).",
        "Review Cashier Report and make any necessary corrections.",
        "Start Night Audit and verify the correct business day.",
        "Verify remaining due-outs are only PF accounts.",
        "Close cashier if prompted.",
        "Monitor audit for failed messages and resolve any posting errors before restarting audit if necessary.",
        "Contact Oracle Support (1-800-249-0587) if unable to complete the audit.",
        "Click OK once audit is complete.",
        "Verify the full End of Day routine completed successfully."
      ]
    },

    {
      title: "Post-Audit No Show Process",
      items: [
        "Process payment against No Show posting.",
        "If payment declines, adjust the No Show posting. Do not leave it open.",
        "Identify No-Show group reservations and reinstate as placeholders if occupancy allows. Otherwise coordinate cancellation."
      ]
    },

    {
      title: "New Day Responsibilities",
      items: [
        "Verify all PF accounts checked out automatically.",
        "Check in all remaining PM accounts and ensure No Post has been removed.",
        "Review Credit Limit Report and follow property procedures for over-limit accounts.",
        "Verify all no-shows and cancellations were charged correctly. Make adjustments for failed payments.",
        "If arrivals remain after day roll, change room status to Dirty for Housekeeping and manually post the first night's room and tax.",
        "Review Front Office traces and resolve all applicable traces.",
        "Run all outstanding deposits and process payments.",
        "Review detailed availability and alert the AM MOD of any negative availability.",
        "Run Duplicate Reservations Report, send B2B alert in shift report, and check in B2B reservations.",
        "Remove OTA email addresses from reservations.",
        "Verify deposit and routing are correct for all OTA reservations.",
        "Review AMEX Hotel Collection reservations and prepare personalized welcome letters.",
        "Review Sertifi and verify billing notes are correct.",
        "Review VIP levels and assign rooms accordingly. Place rooms OOS when occupancy allows.",
        "Share any V8 reservations during pass-along.",
        "File all paperwork in the Front Office Daily Checklist Binder."
      ]
    }
  ]
},

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
