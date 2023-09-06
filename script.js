// Sample data for the profile sections
const faceData = {
  username: "@nathanf",
  followers: 1987,
  todayChange: 12,
  profileImageSrc: "./images/icon-facebook.svg",
  todayChangeIconSrc: "./images/icon-up.svg",
};

const twitData = {
  username: "@nathanf",
  followers: 1044,
  todayChange: 99,
  profileImageSrc: "./images/icon-twitter.svg",
  todayChangeIconSrc: "./images/icon-up.svg",
};

const instaData = {
  username: "@realnathanf",
  followers: "11k",
  todayChange: 1099,
  profileImageSrc: "./images/icon-instagram.svg",
  todayChangeIconSrc: "./images/icon-up.svg",
};

const youtData = {
  username: "Nathan F.",
  followers: "8230",
  todayChange: 144,
  profileImageSrc: "./images/icon-youtube.svg",
  todayChangeIconSrc: "./images/icon-down.svg",
};

// Function to populate the profile section with data and append it to the preview div
function populateProfile(data, index) {
  // Create a new div to hold the profile data
  const profileDiv = document.createElement("div");
  profileDiv.classList.add("profile");

  // Generate a unique class name based on the index
  const uniqueClass = `profile-${index}`;
  profileDiv.classList.add(uniqueClass);

  // Populate the profile div with data
  profileDiv.innerHTML = `
      <div class="username">
          <img src="${data.profileImageSrc}" alt="">
          <span>${data.username}</span>
      </div>
      <h2>${data.followers}</h2>
      <p>FOLLOWERS</p>
      <small><img src="${data.todayChangeIconSrc}" alt="icon-up">${data.todayChange} Today</small>
    `;

  // Append the profile div to the preview div
  const container = document.querySelector(".container");
  container.appendChild(profileDiv);
}

// Call the function with the profile data to populate the DOM
populateProfile(faceData, 1); // Use index 1 for the first profile
populateProfile(twitData, 2); // Use index 2 for the second profile
populateProfile(instaData, 3); // Use index 3 for the third profile
populateProfile(youtData, 4); // Use index 3 for the third profile
