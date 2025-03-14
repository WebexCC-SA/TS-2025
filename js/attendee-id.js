document.addEventListener('DOMContentLoaded', function() {
    const attendeeID = localStorage.getItem('attendeeID') || 'Not Set';
    const placeholders = document.querySelectorAll('.attendee-id-placeholder');

    placeholders.forEach(function(placeholder) {
        placeholder.textContent = attendeeID;
    });
});
