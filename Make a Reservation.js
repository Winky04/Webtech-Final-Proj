// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Select the form
    const reservationForm = document.querySelector("form");

    // Attach a submit event listener to the form
    reservationForm.addEventListener("submit", (event) => {
        // Prevent the default form submission
        event.preventDefault();

        // Validate the form
        if (validateForm()) {
            // If validation is successful, show a confirmation message
            alert("Reservation submitted successfully! We look forward to hosting you in Hawaii!");
            // Reset the form
            reservationForm.reset();
        }
    });
});

/**
 * Validates the reservation form inputs.
 * @returns {boolean} True if the form is valid, false otherwise.
 */
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const checkIn = document.getElementById("check-in").value;
    const checkOut = document.getElementById("check-out").value;
    const guests = document.getElementById("guests").value;
    const roomType = document.getElementById("room-type").value;

    // Check if all fields are filled
    if (!name || !email || !checkIn || !checkOut || !guests || !roomType) {
        alert("Please fill in all the fields.");
        return false;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Check if the check-in date is before the check-out date
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    if (checkInDate >= checkOutDate) {
        alert("Check-out date must be after the check-in date.");
        return false;
    }

    // Ensure the number of guests is within the allowed range
    if (guests <= 0 || guests > 10) {
        alert("Number of guests must be between 1 and 10.");
        return false;
    }

    // If all checks pass, return true
    return true;
}   