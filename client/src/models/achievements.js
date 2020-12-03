const searchUsers = async searchUser => {
    const res = await fetch('../models/users.js');
    const users = await res.send()

    if(searchText.length == 0){
        
    }

    console.log(users);
}