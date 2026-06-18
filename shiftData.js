const DEFAULT_SHIFTS = {
  am: {
    label: "AM Shift",
    sections: [
      {name:"Shift Startup",items:[
        "Communicate with previous shift to get any information you might need for your shift.",
        "Count bank. Report discrepancies to MOD.",
        "Open CA, Opera Cloud, Medallia Concierge, BOB, Outlook, and Guest Issue Log.",
        "Review occupancy, arrivals, departures, room inventory, and out-of-order rooms.",
        "Check HySat for alerts, guest recovery opportunities, and unresolved guest concerns."
      ]},
      {name:"Pre-Arrival Planning",items:[
        "Ensure B2B reservations are checked-in/merged.",
        "Filter/Review Pre-Arrival Dashboard in CA and take necessary action.",
        "Feather Free Requests: assign dirty room and place request in BOB.",
        "Elite Members: assign room and upgrade if available.",
        "GEM: share any specifics to avoid or help create a memorable experience.",
        "Traces: review and action.",
        "Alerts: review and action.",
        "Multiple Reservations: review and confirm with arriving guest.",
        "Survey Prone: block rooms with recent inspection on heat map."
      ]},
      {name:"Billing & Payment",items:[
        "Run High Balance Report and authorize reservations that exceed their credit limit.",
        "Cloud > Financials > Credit Card Auth > Search > Select All > Authorize cards.",
        "Check 3rd party rate codes for proper payment method and set up routing. Codes: WH002, HTNI0, PZ**, WZ**, BX.",
        "Review award redemption reservations, confirm routing is set to CL on window 2, and add free parking for Globalist only.",
        "Check OTAs and ensure virtual card has been moved to the 2nd window and correct auth rule is set."
      ]},
      {name:"Shift Close",items:[
        "Run and close Cashier Report in Opera Cloud.",
        "Ensure desk, key packets, and work area are stocked and organized.",
        "Complete assigned reports and shift responsibilities. Send shift email.",
        "Confirm PM shift has all information needed to continue the operation successfully."
      ]}
    ]
  },
  pm: {
    label: "PM Shift",
    sections: [
      {name:"Shift Startup",items:[
        "Communicate with previous shift to get any information you might need for your shift.",
        "Count bank. Report discrepancies to MOD.",
        "Open CA, Opera Cloud, Medallia Concierge, BOB, Outlook, and Guest Issue Log.",
        "Review occupancy, arrivals, departures, room inventory, and out-of-order rooms.",
        "Check HySat for alerts, guest recovery opportunities, and unresolved guest concerns."
      ]},
      {name:"Arrival Management",items:[
        "Confirm all PM accounts have been checked in for the day; check in any remaining PM IOC or CA.",
        "Review remaining arrival reservations for late arrivals/redeye arrivals. IOC or CA.",
        "Pre-check-in: change payment to cash, add notes, communicate in shift report, and collect CC if/when guest arrives."
      ]},
      {name:"In-House Review & Billing",items:[
        "Verify rates for all in-house guests using Guest In-House Rate Check; edit parameters to include routing instructions.",
        "Check for notes on comp rooms, Window 2 routing on 3rd party reservations, and group rates. Check BOB for resume.",
        "Ensure WOH award is attached to redemption stays. Contact 800-544-9288 if award code cannot be located.",
        "Post valet charges in CA by opening the reservation and ensuring Fixed Charges has a valet charge for $50. If the fixed charge already exists, do not charge again."
      ]},
      {name:"Audit Preparation",items:[
        "Unassign rooms that have not arrived to avoid room status change to pickup.",
        "Open shift pass-along email and record the names of Pre-Checked In and No Show guests prior to running audit.",
        "Collect one-night deposits due for yesterday’s date and current date. Cancel guests with declined payments and include cancelled guests in EOS email.",
        "Run Reservation Cancellations report: Reports > Manage Reports > Reservation Cancellations.",
        "If over 85%, complete Comp A Worksheet and enter updated information in CA.",
        "Email Comp A Worksheet to Kaitlyn McReynolds, Andy Gatford, and Todd Metzger.",
        "Check out all zero-balance PF accounts."
      ]}
    ]
  },
  night: {
    label: "Night Audit",
    sections: [
      {name:"Before Audit",items:[
        "Communicate with previous shift to get any information you might need for your shift.",
        "Count bank. Report discrepancies to MOD.",
        "Open CA, Opera Cloud, Medallia Concierge, BOB, Outlook, and Guest Issue Log.",
        "Review occupancy, arrivals, departures, room inventory, and out-of-order rooms.",
        "Check HySat for alerts, guest recovery opportunities, and unresolved guest concerns.",
        "Confirm all PM accounts have been checked in for the day and check in any remaining PM accounts.",
        "Review remaining late arrivals/redeye arrivals.",
        "Verify notes, comp rooms, Window 2 routing on 3rd party reservations, and group rates.",
        "Ensure WOH award is attached to redemption stays; contact 800-544-9288 if needed.",
        "Post valet charges in CA under Fixed Charges if needed. Do not double-charge.",
        "Unassign rooms that have not arrived.",
        "Record names of Pre-Checked In and No Show guests in pass-along email before audit.",
        "Collect one-night deposits due; cancel guests with declined payments and include cancellations in EOS email.",
        "Run Reservation Cancellations report.",
        "If over 85%, complete Comp A Worksheet and enter updated info in CA.",
        "Email Comp A Worksheet to Kaitlyn McReynolds, Andy Gatford, and Todd Metzger.",
        "Check out all zero-balance PF accounts."
      ]},
      {name:"Running Audit",items:[
        "Audit must be run before 4 AM; best practice is to run at 2 AM in case there are issues. Monitor audit until completion.",
        "Start Night Audit and verify correct business day.",
        "You may be prompted to check out due-outs, close your cashier, or close open folios. Follow prompts and then return to EOD.",
        "Allow audit to complete processing. Monitor for failed messages. If audit stops on a room while posting room/tax, stop audit, identify the room, correct the issue, and restart. Contact Oracle Support if needed: 1-800-249-0587.",
        "Once audit is complete, click OK."
      ]},
      {name:"Post Audit",items:[
        "Night Audit must verify the full End of Day routine is complete each night.",
        "Open billing screen for no-shows and process payment against no-show posting if necessary. If payment declines, adjust no-show posting. Do not leave open.",
        "Identify group reservations that were no-showed and reinstate as a placeholder if occupancy allows.",
        "Verify all PFs checked automatically.",
        "Check in all due PM accounts for the day and ensure no-post is removed.",
        "Review new credit limit report and follow property procedures for anyone over limit.",
        "Verify all no-shows and cancellations are charged appropriately. Cashiering > Billing > Advanced > no shows/open balance/cancellations. Make necessary adjustments for failed payments.",
        "If a member no-shows or cancels an award reservation outside the cancellation policy, charge the guest’s credit card on file. Change rate code to rack rate if necessary; points are returned automatically.",
        "If there are check-ins after day roll, change room to dirty for HK service and manually post the first night’s room/tax.",
        "Check Front Office traces and resolve by assigning room accordingly.",
        "Run all future outstanding deposits and process payments.",
        "Check detailed availability and alert AM MOD of any negative availability.",
        "Run duplicate reservations and send B2B alert in shift report. Check in B2B reservations.",
        "Ensure deposit and routing are set correctly for all OTAs.",
        "Review AMEX Hotel Collection reservations and prepare personalized welcome letter/envelope.",
        "Review Sertifi and ensure billing is set up correctly with notes.",
        "Review VIP levels and plan accordingly. Place rooms OOS when occupancy allows. V1,V2,V3,V4,V6,V7,V8,CC,LG,MP,DS,EX.",
        "Share any V8 reservations in pass-along.",
        "File paperwork in the front office daily checklist binder.",
        "Valet Print Journal by Cashier and transaction codes 5210/5215; provide to AM Valet Supervisor."
      ]}
    ]
  }
};

const RESOURCES = [
  ["Opera Cloud","Routing instructions, open folio due-outs, cashier reports, credit card authorizations, traces, no-shows, and night audit reminders."],
  ["Colleague Advantage","Pre-Arrival Dashboard, B2B accounts, Guest In-House Rate Check, valet charges, fixed charges, and Comp A workflow."],
  ["Billing & Payments","OTA virtual cards, PM accounts, deposits, credit limit reports, award redemption routing, valet charges, and declined payment handling."],
  ["World of Hyatt","Elite recognition, Globalist parking, award stays, upgrades, VIP planning, and guest experience notes."],
  ["Service Recovery","HySat alerts, unresolved guest concerns, guest recovery opportunities, LEARN method, and documentation standards."],
  ["Contacts","Oracle Support: 1-800-249-0587. Add MOD, Housekeeping, Engineering, Sales, and leadership contacts here."]
];
