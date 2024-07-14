//search bar
document.getElementById("search-button").addEventListener("click", function() {
  var searchTerm = document.getElementById("search-input").value.toLowerCase(); 
  var pages = {
      "history": "history.html",
      "event": "event.html",
      "services": "services.html",
      "facilities": "facilities.html",
      "about": "about.html",
      "population": "population.html",
      "summary": "data.html",
  };

  if (pages.hasOwnProperty(searchTerm)) {
      window.location.href = pages[searchTerm];
  } else {
      alert("Page not found.");
  }
});

//fade
const cols = document.querySelectorAll('.col-2');

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 
};

const observer = new IntersectionObserver(handleIntersection, options);

cols.forEach(col => {
  observer.observe(col);
});

//password
const zonePasswords = {
  1: "DCpET_2024",
  2: "DCpET_2024",
  3: "DCpET_2024",
  4: "DCpET_2024",
  5: "DCpET_2024",
  6: "DCpET_2024",
  7: "DCpET_2024"
};

function enterZone(zoneNumber) {
  const dialog = document.createElement('div');
  dialog.innerHTML = `
    <div class="password-prompt">
      <img src="image/bbb.png" alt="img">
      <h1>Our Guest</h1>
      <p>Please enter the password to access the census: ${zoneNumber}</p>
      <input type="password" id="password" placeholder="Enter the password...">
      <button id="submit-button">Submit</button>
    </div>
  `;

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.appendChild(dialog);
  document.body.appendChild(overlay);

  const passwordInput = dialog.querySelector('#password');
  passwordInput.focus();

  const handleSubmit = () => {
    const password = passwordInput.value;
    if (password === zonePasswords[zoneNumber]) {
      window.location.href = `zone${zoneNumber}.html`;
    } else {
      alert("Incorrect password. Access denied.");
    }
    document.body.removeChild(overlay);
  };

  const submitButton = dialog.querySelector('#submit-button');
  submitButton.addEventListener('click', handleSubmit);

  passwordInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  });
}

//admin log in

document.addEventListener("DOMContentLoaded", function() {
  const adminLink = document.getElementById("admin-link");
  adminLink.addEventListener("click", adminLogin);
});

const adminCredentials = {
  email: "barangaysanantonio24@gmail.com",
  password: "Brgy#12304"
};

function adminLogin() {
  const dialog = document.createElement('div');
  dialog.innerHTML = `
    <div class="password-prompt">
      <img src="image/bbb.png" alt="Admin">
      <h1>Admin</h1>
      <input type="email" id="email" placeholder="Enter the email...">
      <input type="password" id="password" placeholder="Enter the password...">
      <button id="submit-button">Login</button>
    </div>
  `;

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.appendChild(dialog);
  document.body.appendChild(overlay);

  const emailInput = dialog.querySelector('#email');
  const passwordInput = dialog.querySelector('#password');
  emailInput.focus();

  const handleSubmit = () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    if (email === adminCredentials.email && password === adminCredentials.password) {
      window.location.href = "admin.html";
    } else {
      alert("Incorrect email or password. Access denied.");
    }
    document.body.removeChild(overlay);
  };

  const submitButton = dialog.querySelector('#submit-button');
  submitButton.addEventListener('click', handleSubmit);

  passwordInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  });
}




//menu
const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  menuItems.classList.toggle('visible');
});


var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
  if( MenuItems.style.maxHeight == "0px")
  {
    MenuItems.style.maxHeight = "250px"
  }
  else
  {
    MenuItems.style.maxHeight = "0px"
  }
}

function toggleReadMore(btn) {
  var parent = btn.parentElement;
  var dots = parent.querySelector(".dots");
  var moreText = parent.querySelector(".more");

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btn.innerHTML = "Read More";
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btn.innerHTML = "Read Less";
      moreText.style.display = "inline";
  }
}


document.getElementById('population-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('resident-name').value;
  const gender = document.getElementById('resident-gender').value;
  const birthdaySelect = document.getElementById('resident-birthday').value;
  const birthdayDate = document.getElementById('resident-birthday-date').value;
  const zone = document.getElementById('resident-zone').value;

  let birthday;
  if (birthdaySelect === "none") {
      birthday = "None";
  } else {
      birthday = birthdayDate || "None";
  }

  const newResident = { name, gender, birthday };

  let residentsData = JSON.parse(localStorage.getItem(`zone${zone}Residents`)) || [];
  residentsData.push(newResident);
  localStorage.setItem(`zone${zone}Residents`, JSON.stringify(residentsData));

  alert('Resident added successfully!');
  this.reset();
});

// Add admin functionality to manage data
document.getElementById('admin-link').addEventListener('click', function () {
  window.location.href = 'admin.html';
});



