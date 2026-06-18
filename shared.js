function deepCopy(obj){return JSON.parse(JSON.stringify(obj));}

function loadShiftData(){
  return JSON.parse(localStorage.getItem("shiftops_shift_data") || JSON.stringify(DEFAULT_SHIFTS));
}

function saveShiftData(shifts){
  localStorage.setItem("shiftops_shift_data", JSON.stringify(shifts));
}

function esc(v){
  return String(v || "").replace(/[&<>"']/g, m => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#039;"
  }[m]));
}

function encodeForm(data){
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

function flatTasksForShift(shifts, shift){
  let arr = [];
  shifts[shift].sections.forEach((sec, si) => {
    sec.items.forEach((item, ii) => {
      arr.push({section:sec.name, text:item, si, ii});
    });
  });
  return arr;
}

function checkKey(shift, si, ii){
  return "shiftops_check_" + shift + "_" + si + "_" + ii;
}

function getSubmissions(){
  return JSON.parse(localStorage.getItem("shiftops_submissions") || "[]");
}

function saveSubmissions(list){
  localStorage.setItem("shiftops_submissions", JSON.stringify(list));
}
