
if (document.getElementById('signupForm')) {
  const form = document.getElementById('signupForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    let isValid = true;

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const sex = form.sex.value;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const reason = form.reason.value.trim();

    if (!firstName) {
      document.getElementById('firstNameError').textContent = 'required';
      isValid = false;
    }
    if (!lastName) {
      document.getElementById('lastNameError').textContent = 'required';
      isValid = false;
    }
    if (!sex) {
      document.getElementById('sexError').textContent = 'required';
      isValid = false;
    }
    if (!email) {
      document.getElementById('emailError').textContent = 'required';
      isValid = false;
    }
    if (!password) {
      document.getElementById('passwordError').textContent = 'required';
      isValid = false;
    }
    if (!reason) {
      document.getElementById('reasonError').textContent = 'required';
      isValid = false;
    }

    if (!isValid) return;

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('sex', sex);
    localStorage.setItem('email', email);
    localStorage.setItem('reason', reason);

    window.location.href = 'profile.html';
  });
}


if (document.getElementById('profileFirstName')) {
  document.getElementById('profileFirstName').textContent = localStorage.getItem('firstName') || 'N/A';
  document.getElementById('profileLastName').textContent = localStorage.getItem('lastName') || 'N/A';
  document.getElementById('profileSex').textContent = localStorage.getItem('sex') || 'N/A';
  document.getElementById('profileEmail').textContent = localStorage.getItem('email') || 'N/A';
  document.getElementById('profileReason').textContent = localStorage.getItem('reason') || 'N/A';
}
