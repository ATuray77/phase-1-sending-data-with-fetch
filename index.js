console.log("jsloading...")

function submitData(userName, userEmail) {
 
    const formData = {
      name: `${userName}`,
      email: `${userEmail}`
    }
    const configObj = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }

  return fetch("http://localhost:3000/users", configObj)

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const newDiv = document.createElement('div')
    document.querySelector('body').appendChild(newDiv)
    document.querySelector('div').innerHTML = data.id
    console.log(data);
  })
  .catch(function (message) {
    const errorDiv = document.createElement('div')
    document.querySelector('body').appendChild(errorDiv)
    document.querySelector('div').innerHTML = message
  })

}
