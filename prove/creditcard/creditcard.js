// Reference to the form
const form = document.querySelector('#creditCardForm');

// Utility: show error or success messages
function showMessage(msg, isError = true) {
  let messageBox = document.querySelector('.form-message');

  // Create message box if it doesn't exist
  if (!messageBox) {
    messageBox = document.createElement('div');
    messageBox.classList.add('form-message');
    document.querySelector('.page').appendChild(messageBox);
  }

  messageBox.textContent = msg;
  messageBox.style.color = isError ? 'red' : 'green';
}

// Validate card number (must match exact number)
function isCardNumberValid(number) {
  return number === '1234123412341234';
}

// Handle form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent actual submission

  let errorMsg = '';

  // Grab input values
  const cardNum = document.querySelector('#creditCardNumber').value.trim();
  const cardHolder = document.querySelector('#cardHolder').value.trim();
  const expMonth = Number(document.querySelector('#month').value);
  const expYear = Number(document.querySelector('#year').value);
  const cvv = document.querySelector('#cvv').value.trim();

  // Validate card number
  if (!/^\d{16}$/.test(cardNum)) {
    errorMsg += 'Card number must be 16 digits.\n';
  } else if (!isCardNumberValid(cardNum)) {
    errorMsg += 'Card number is not valid.\n';
  }

  // Validate name
  if (cardHolder === '') {
    errorMsg += 'Card holder name is required.\n';
  }

  // Validate expiration date
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear() % 100; // last two digits

  if (
    expYear < currentYear ||
    (expYear === currentYear && expMonth < currentMonth)
  ) {
    errorMsg += 'Card is expired.\n';
  }

  // Validate CVV
  if (!/^\d{3}$/.test(cvv)) {
    errorMsg += 'CVV must be 3 digits.\n';
  }

  // If there are errors, display them
  if (errorMsg) {
    showMessage(errorMsg, true);
    return;
  }

  // If successful
  showMessage('Payment successful! Thank you for your purchase.', false);
  form.reset();
});
