let selectedName = "";

/**************** MODAL BACKDROP FUNCTIONS START **************/
function openModal(name) {
  selectedName = name;
  document.getElementById("deleteName").textContent = name;
  document.getElementById("deleteModal").classList.remove("hidden");
  document.getElementById("deleteModal").classList?.add("flex");
}

function closeModal() {
  document.getElementById("deleteModal").classList?.add("hidden");
  document.getElementById("deleteModal").classList.remove("flex");
}

function confirmDelete() {
  alert("User deleted: " + selectedName);
  closeModal();
}
/**************** MODAL BACKDROP FUNCTIONS END **************/
/**************** GREET FUNCTIONS START **************/
function getGreeting() {
  const h = new Date().getHours();
  const map = {
    morning: ["Ekaro ma", "Morning sunshine"],
    afternoon: ["Good afternoon", "Ẹ káàsán"],
    evening: ["Evening ma", "Evening vibes"],
    night: ["Good night", "Sweet dreams"],
  };
  const key =
    h < 5 || h >= 21
      ? "night"
      : h < 12
      ? "morning"
      : h < 17
      ? "afternoon"
      : "evening";
  return map[key][Math.floor(Math.random() * map[key].length)];
}
const greetingEl = document.getElementById("greeting");
if (greetingEl) greetingEl.innerText = getGreeting();

/**************** GREET FUNCTIONS END **************/

/***************** SEND DATA START *************/

const eggForm = document.getElementById("eggForm");
const appleForm = document.getElementById("appleForm");
const msgEgg = document.getElementById("messageE");
const msgApple = document.getElementById("messageA");

function addListener(form, url, messageEl) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    console.log(messageEl);
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    console.log(url);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        messageEl.textContent = "Wallet submitted successfully!";
        messageEl.className = "text-green-600 text-center";
        form.reset();
      } else {
        messageEl.textContent = "Submission failed.";
        messageEl.className = "text-red-500 text-center";
      }
    } catch (err) {
      console.error(err);
      messageEl.textContent = "Network error.";
      messageEl.className = "text-red-500 text-center";
    }
  });
}

addListener(eggForm, "/form/egg", msgEgg);
addListener(appleForm, "/form/apple", msgApple);

//handle delete button
function handleDelete(e) {
  let id = e.target.getAttribute("data-id");
  const res = prompt("Enter Password");
  if (res !== "lover") return;
  fetch(`/delete/egg/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        window.location.reload();
      } else {
        alert("Error deleting item");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

/***************** SEND DATA END *************/

/***************** TOGGLE MENU START *************/
const menuToggle = document.getElementById("menu-toggle");
const menuToggle2 = document.getElementById("close-drawer");
const sidebar = document.getElementById("sidebar-multi-level-sidebar");

menuToggle?.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});
menuToggle2?.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});

/***************** TOGGLE MENU END *************/

/***************** TOGGLE FORM START *************/

const tabs = document.querySelectorAll('[role="tab"]');
const eggDiv = document.getElementById("egg");
const appleDiv = document.getElementById("apple");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove(
        "bg-white",
        "text-slate-900",
        "shadow",
        "border-slate-300"
      );
      t.classList.add("bg-inherit", "text-slate-600", "border-transparent");
    });

    tab.classList.add(
      "bg-white",
      "text-slate-900",
      "shadow",
      "border-slate-300"
    );
    tab.classList.remove("bg-inherit", "text-slate-600", "border-transparent");

    // Toggle div visibility based on tab content
    const tabLabel = tab.textContent.trim().toLowerCase();

    if (tabLabel === "egg") {
      eggDiv.classList.remove("hidden");
      appleDiv.classList.add("hidden");
    } else if (tabLabel === "apple") {
      appleDiv.classList.remove("hidden");
      eggDiv.classList.add("hidden");
    }
  });
});

/***************** TOGGLE FORM END *************/
