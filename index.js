let input = document.getElementById('content');
let add = document.getElementById('add');
let list = document.getElementById('list');

function addItem() {

    if (input.value != 0) {
        input.value = input.value.trim();

        //create new list item
        let li = document.createElement('li');
        //collect the user input

        li.innerText = input.value;
        //attach list item to unordered list

        list.appendChild(li);

        document.getElementById('content').value = '';



    } else {
        alert("Error");
    }

}
add.addEventListener('click', addItem);