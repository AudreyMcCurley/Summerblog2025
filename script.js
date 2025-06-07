let name = "Audrey";
let age = 13;
let likesSushi = true;

function greeting(name) {
    console.log("Hello", name);
}

greeting("Audrey");

function saveName() {


    let newName = document.getElementById("greeter").value;
    document.getElementById('username').textContent = newName;
    document.getElementById("greeter").value = "";
}


document.querySelectorAll('.accordion-header').forEach(function (button) {
    button.addEventListener('click', function () {
        let content = this.nextElementSibling;
        content.style.display = (content.style.display === 'block') ? 'none' : 'block';
    });
});
