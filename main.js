
document.getElementsByClassName('form-rating')[0].addEventListener('submit', function (event) {
    event.preventDefault();
    let selectedRate = document.querySelector('input[name="rating"]:checked').value;
    document.getElementById("selected-rate").innerHTML = selectedRate;
    document.getElementsByClassName('rating-container')[0].style.display = "none";
    document.getElementsByClassName('thank-you-container')[0].style.display = "grid";
    return false;
})



