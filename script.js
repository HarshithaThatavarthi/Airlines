document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const travelClass = document.getElementById('class').value;

    const confirmationMessage = `
        <h2>Booking Confirmation</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Departure:</strong> ${departure}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Class:</strong> ${travelClass}</p>
        <p>Your ticket has been successfully booked!</p>
    `;

    document.getElementById('confirmation').innerHTML = confirmationMessage;
    document.getElementById('bookingForm').reset();
});
