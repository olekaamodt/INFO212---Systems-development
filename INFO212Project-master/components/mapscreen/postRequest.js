async function postAddress(addressdata, locationData) {
    //gjør om data til json object
    const location = locationData[0]
    console.log(addressdata.description)
    data = {address:addressdata.address,
            city:addressdata.city,
            description:addressdata.description,
            image:addressdata.url,
            coordinates: {
                latitude:location.lat,
                longitude:location.lon
            }
    }
    //laster opp dataene til databasen via post request
    await fetch('localhost:3000/Addresses', {
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

export default postAddress
