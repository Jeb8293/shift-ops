const SHIFT_PASSWORD = "600$$Hyatt";

if (sessionStorage.getItem("shiftops_authenticated") !== "true") {
  const enteredPassword = prompt("Enter the SHIFT Ops password:");

  if (enteredPassword === SHIFT_PASSWORD) {
    sessionStorage.setItem("shiftops_authenticated", "true");
  } else {
    document.body.innerHTML = `
      <main style="font-family: Arial, sans-serif; padding: 40px; text-align: center;">
        <h1>Access Denied</h1>
        <p>This site is restricted to authorized Front Office users.</p>
      </main>
    `;

    throw new Error("Unauthorized access");
  }
}
