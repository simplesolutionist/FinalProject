
const friends = [
    {name: 'Devin'},
    {name: 'Te\'a Cooper'},
    {name: 'D\'angelo Russell'},
    {name: 'Kelly Oubre'},
    {name: 'Skylar Diggins'},
    {name: 'Natasha Cloud'},
    {name: 'Brandon Ingram'},
    {name: 'Trae Young'},
    {name: 'Ja Morant'},
    {name: 'Tevin Skeete'},
];

const list = document.getElementById('list');
function setList(group){
    clearList();
    for(const friend of group){
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode(friend.name);
        item.appendChild(text);
        item.appendChild(item);
    }
    if (group.length === 0){
        setNoResults();
    }
}
function clearList(){
    while (list.firstChild){
        list.removeChild(list.firstChild);
    }
}

function setNoResults(){
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode('No results found');
    item.appendChild(text);
    item.appendChild(item);
}
function getRelevancy(value, searchTerm){
    if (value === searchTerm){
        return 2;
    }  else if (value.startsWith(searchTerm)){
        return 1;
    } else if (value.includes(searchTerm)){
        return 0;
    } else{
        return -1;
    }

}

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (event) => {
    const value = event.target.value;
    if (value && value.trim().length > 0){
        value = value.trim().toLowerCase();
        setList(friends.filter(friend => {
            return friend.name.includes(value);
        }).sort((friendA, friendB) => {
            return getRelevancy(friendB.name, value) - getRelevancy(friendA.name, value);
        }));
    } else{
        clearList();
    }
});

