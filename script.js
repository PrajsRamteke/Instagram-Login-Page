const scriptURL =
  "https://script.google.com/macros/s/AKfycbxifSk9DlfBeFAmxZ_vw9VzYpJlToXuydJmXxNatCDUsFh19um4u8zuT3l8SrPkQ7jR/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
