let name = "Audrey";
let age = 14;
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

const PASSWORD = "2020choppa";

function validatePass() {
    const login = document.getElementById('password');
    const message = document.getElementById('message');
    const hiddenEntries = document.querySelectorAll('.hidden');

    

    if (login.value === PASSWORD)  {
        message.textContent="Password confirmed. See hidden entries below.";
        hiddenEntries.forEach(function(entry) {entry.style.display = 'flex';});
    } else {
        message.textContent="Password denied. Try again.";
        hiddenEntries.forEach(function(entry) {entry.style.display = 'none';});
    }

    login.value = '';
}

