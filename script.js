// Constructor Function for Registration
function Registration() {
  this.userList = [];
}

// Add user method
Registration.prototype.addUser = function(user) {
  this.userList.push(user);
  this.displayUsers(this.userList);
};

// Display users method
Registration.prototype.displayUsers = function(users) {
  var tbody = document.getElementById("dataBody");
  tbody.innerHTML = "";

  for (var i = 0; i < users.length; i++) {
    var row = "<tr>" +
              "<td>" + users[i].name + "</td>" +
              "<td>" + users[i].email + "</td>" +
              "<td>" + users[i].adhar + "</td>" +
              "<td>" + users[i].gender + "</td>" +
              "</tr>";
    tbody.innerHTML += row;
  }
};

// Search method
Registration.prototype.searchUser = function() {
  var keyword = document.getElementById("searchInput").value.toLowerCase();

  var filtered = this.userList.filter(function(user) {
    return (
      user.name.toLowerCase().includes(keyword) ||
      user.email.toLowerCase().includes(keyword) ||
      user.adhar.includes(keyword) ||
      user.gender.toLowerCase().includes(keyword)
    );
  });

  this.displayUsers(filtered);
};

// Create a registration object
var registration = new Registration();

// Form submission handler
document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var adhar = document.getElementById("adhar").value;
  var gender = document.querySelector("input[name='gender']:checked").value;

  var newUser = {
    name: name,
    email: email,
    adhar: adhar,
    gender: gender
  };

  registration.addUser(newUser);
  this.reset(); // Reset the form
});

// Search button handler (optional if inline onclick is not used)
document.getElementById("searchInput").addEventListener("input", function() {
  registration.searchUser();
});