function getSubmissions() {
    return JSON.parse(localStorage.getItem("shiftops_submissions") || "[]");
}

function getProgress(shift) {
    const progress = JSON.parse(localStorage.getItem("shiftops_progress") || "{}");

    return progress[shift] || {
        done: 0,
        total: 0
    };
}

function escapeHTML(value) {
    return String(value || "").replace(/[&<>"']/g, function(match) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        }[match];
    });
}

function renderDashboard() {

    const am = getProgress("am");
    const pm = getProgress("pm");
    const night = getProgress("night");

    const amBox = document.getElementById("amDash");
    const pmBox = document.getElementById("pmDash");
    const nightBox = document.getElementById("nightDash");

    if (amBox) {
        amBox.textContent = `${am.done}/${am.total} completed`;
    }

    if (pmBox) {
        pmBox.textContent = `${pm.done}/${pm.total} completed`;
    }

    if (nightBox) {
        nightBox.textContent = `${night.done}/${night.total} completed`;
    }

    const recentBox = document.getElementById("recentSubmissions");

    if (!recentBox) {
        return;
    }

    const submissions = getSubmissions();

    if (submissions.length === 0) {
        recentBox.innerHTML = `
            <p>No submissions have been completed yet.</p>
        `;
        return;
    }

    recentBox.innerHTML = submissions
        .slice(-5)
        .reverse()
        .map(item => `
            <div class="submission-item">
                <strong>${escapeHTML(item.shift)}</strong><br>
                Submitted by <strong>${escapeHTML(item.name)}</strong><br>
                <small>${escapeHTML(item.timestamp)}</small><br>
                <small>${escapeHTML(item.completed)}</small>
            </div>
            <hr>
        `)
        .join("");
}

document.addEventListener("DOMContentLoaded", renderDashboard);