// Listen to events when hamburger menu is toggled
$("#hamburger-btn").on('click', () => {
    $('#mobile-overlay').css('display', 'block');
});

$("#overlay-close-btn").on('click', () => {
    $('#mobile-overlay').css('display', 'none');
});