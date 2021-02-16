async function postUser(dataUser) {
    //gjør om data til json object
    const data = dataUser
    
    //laster opp dataene til databasen via post request
    await fetch('localhost:3000/Users', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}

export default postUser
