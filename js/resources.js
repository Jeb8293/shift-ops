const resources = [

{
  title: "Opera Cloud",
  content: `
    <h3>Common Front Office Tasks</h3>

    <ul>
      <li>Open Folios</li>
      <li>Due-Out Management</li>
      <li>Cashier Reports</li>
      <li>Credit Card Authorizations</li>
      <li>Room Moves</li>
      <li>Guest Messaging</li>
      <li>Night Audit Functions</li>
    </ul>

    <p>
      Opera Cloud serves as the primary PMS for reservations,
      billing, room management, cashiering, and End of Day processing.
    </p>
  `
},

{
  title: "Colleague Advantage",
  content: `
    <h3>Most Frequently Used Functions</h3>

    <ul>
      <li>Pre-Arrival Dashboard (ALT + D)</li>
      <li>Guest In-House Rate Check</li>
      <li>B2B Reservation Review</li>
      <li>Valet Fixed Charges</li>
      <li>Comp A Worksheet</li>
      <li>Elite Arrival Planning</li>
    </ul>

    <p>
      Most arrival preparation can be completed from the
      Pre-Arrival Dashboard before guests arrive.
    </p>
  `
},

{
  title: "World of Hyatt",
  content: `
    <h3>Elite Recognition</h3>

    <ul>
      <li>Member</li>
      <li>Discoverist</li>
      <li>Explorist</li>
      <li>Globalist</li>
    </ul>

    <h3>Globalist Reminders</h3>

    <ul>
      <li>Review available upgrades</li>
      <li>Verify breakfast eligibility</li>
      <li>Review parking benefits</li>
      <li>Acknowledge status at check-in</li>
    </ul>
  `
},

{
  title: "Billing & Routing",
  content: `
    <h3>Things To Verify Before Check-In</h3>

    <ul>
      <li>OTA routing instructions</li>
      <li>Virtual card placement</li>
      <li>Award stay routing</li>
      <li>Group billing setup</li>
      <li>Direct bill authorizations</li>
      <li>Sertifi documents</li>
    </ul>

    <p>
      Most billing issues can be prevented before the guest
      reaches the front desk.
    </p>
  `
},

{
  title: "Service Recovery",
  content: `
    <h3>LEARN Model</h3>

    <ul>
      <li>Listen</li>
      <li>Empathize</li>
      <li>Apologize</li>
      <li>Resolve</li>
      <li>Notify</li>
    </ul>

    <p>
      Acknowledging a guest's frustration is often more
      important than immediately offering compensation.
    </p>
  `
},

{
  title: "Night Audit",
  content: `
    <h3>Critical Review Items</h3>

    <ul>
      <li>No-Shows</li>
      <li>Open Balances</li>
      <li>Outstanding Deposits</li>
      <li>Negative Availability</li>
      <li>Routing Accuracy</li>
      <li>AM Handoff Notes</li>
    </ul>

    <p>
      Night Audit establishes the starting point for the
      following business day.
    </p>
  `
},

{
  title: "Property Contacts",
  content: `
    <h3>Important Numbers</h3>

    <ul>
      <li>Front Office Leadership</li>
      <li>Engineering</li>
      <li>Housekeeping</li>
      <li>Sales</li>
      <li>Security</li>
      <li>Oracle Support: 1-800-249-0587</li>
    </ul>

    <p>
      Add property-specific contacts here as needed.
    </p>
  `
}

];

const container =
  document.getElementById("resourcesContainer");

container.innerHTML = resources.map(resource => `
  <article class="resource-card">
    <button class="resource-toggle">
      <span>${resource.title}</span>
      <span>+</span>
    </button>

    <div class="resource-content">
      ${resource.content}
    </div>
  </article>
`).join("");

document
  .querySelectorAll(".resource-toggle")
  .forEach(button => {

    button.addEventListener("click", () => {

      const card =
        button.closest(".resource-card");

      card.classList.toggle("open");

      button.lastElementChild.textContent =
        card.classList.contains("open")
          ? "−"
          : "+";

    });

  });