const url =  "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response =>{
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userAvatar.src  = response.data.avatar
        userId.textContent = response.data.id

    })
        
    }

    function addUser(newUser) {
        axios.post(url, newUser )
        .then(response => {
            console.log(response)
        })
        .catch(error => console.error(error))
    }

    function updateUser(id, updatedUser) {
        axios.put(`${url}/${id}`, updatedUser)
        .then(response => console.log(response))
        .catch(err => console.error(err))
    }

    function deleteUser(id) {
        axios.delete(`${url}/${id}`)
        .then(response => console.log(response))
        .catch(err => console.error(err))
    }

    const newUser = {
        name: "Olivia Zars",
        avatar: "https://picsum.phtos/200/300",
        city: "Rio de Janeiro"
    }

    const updatedUser = {
        name: "Alexsandro Santos",
        avatar: "https://picsum.photos/200/300",
        city: "Camaçari"
        

    }


getUsers()
getUser(2)
//addUser(newUser)
//updateUser(2, updatedUser)
deleteUser(15)