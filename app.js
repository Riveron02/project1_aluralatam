//empty array to storage names

let friends = [];


function agregarAmigo() {
    const input = document.getElementById("amigo");
    const name = input.value.trim();

    if (name === "") {
        alert("Please, insert a valid name");
        return;
    }

    friends.push(name);
    input.value = "";

    showList();
}

function showList() {
    const list = document.getElementById("listaAmigos");
    list.innerHTML = "";

    friends.forEach(function(nombre) {
        const li = document.createElement("li");
        li.textContent = nombre;
        list.appendChild(li);
    });
}

function sortearAmigo() {   
    if (friends.length === 0) {
        alert("There's no friends on the list")
        return
    }

    const aleatorio = Math.floor(Math.random() * friends.length);
    const sortFriend = friends[aleatorio];

    const result = document.getElementById("resultado");
    result.innerHTML = `<li>${sortFriend}</li>`;

}