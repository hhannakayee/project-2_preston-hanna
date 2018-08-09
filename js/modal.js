// Get link that opens the modal, the button that closes it, and the modal itself
var modal = document.getElementById('myModal');
    btn = document.getElementById("modalBtn");
    span = document.getElementsByClassName("close")[0];

// The modal will open when the user clicks on "SIGN IN" link
btn.onclick = function() {
    modal.style.display = "block";
}

// The modal will close when the user clicks on the "Cancel"
span.onclick = function() {
    modal.style.display = "none";
}

// The modal will close when the user clicks outside of its container
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
