const url='http://localhost:5500/api'

function getUsrers() {
    fetch(url)
    .then(response => response.json())
    .then(data => RenderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}


function getUser(id) {
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser) {
fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),

    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
} )
.then(response => response.json())
.then(data => alertApi.textContent = data)
.catch(error => console.error(error))
}

function updateUsers(updateUser, id) {
fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updateUser),
    headers: {"Content-type": "application/json; charset=UTF-8"

}
})
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error())
}

function deleteUser(id) {
fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json())
.then(data => alertApi.textContent = data)
}

const newUser = {
    name: "Olivia Zars",
    avatar: "http://picsum.photos/200/300",
    city: "Rio de Janeiro"
}

const updateUser = {
    name: "Alexsandro Santos",
    avatar: "https://avatars.githubusercontent.com/u/28292534?v=4",
    city: "Camaçari"
}

getUsrers()
getUser(6)

//addUser(newUser)
//updateUsers(updateUser, 6)
deleteUser(13)