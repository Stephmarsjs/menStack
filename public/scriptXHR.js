
async function apiCall() {
  let res = await fetch("http://localhost:3000/api/nasa");
  return res.json();
}

async function renderHotels() {
  let hotels = await apiCall();
  console.log(hotels);
  hotels.forEach(hotel => {
    makeHTML(hotel);
  });
}

async function makeHTML(hotel) {
  let entry = document.createElement("li");
    // entry.className = "card blue-grey white-text";
    entry.innerHTML = `Hotel Name: ${hotel.name}<br>`;
    entry.innerHTML += `<li>Hotel Location: ${hotel.location}`;

  hotel.rooms.forEach(element => {
    let room = document.createElement("li");
        room.className = "card-content";
        room.innerHTML =  `Room Type: ${element.roomType} <br> <li> Price: ${element.roomPrice}<br>`;
        
    let bookRoomButton = document.createElement("button");
    // bookRoomButton.className = "btn waves-effect waves-light";
    bookRoomButton.innerHTML = "Book Room";
    bookRoomButton.onclick = `<a href="rooms.html">`;

    room.appendChild(bookRoomButton);

    entry.appendChild(room);
  });
  let div = document.getElementById("room");
  div.appendChild(entry);
}

function addHotel(e) {
  e.preventDefault();

  let hotel = {
    name: document.getElementById("name").value,
    location: document.getElementById("location").value,
    rooms: [
      {
        roomType: document.getElementById("roomType").value,
        roomPrice: document.getElementById("roomPrice").value,

      }
    ]
  };

  console.log(hotel);

  let xhrPost = new window.XMLHttpRequest();
  xhrPost.open("POST", "http://localhost:3000/api/nasa");
  xhrPost.setRequestHeader("Content-Type", "application/json");
  xhrPost.send(JSON.stringify(hotel));
}

function deleteHotel(id) {
    console.log("TEST");

    let xhrDelete = new XMLHttpRequest();
    xhrDelete.open("DELETE", "http://localhost:3000/api/nasa/:id" + `/${id}`, true);
    xhrDelete.onload = function() {
        let hotels = JSON.parse(xhrDelete.response);
        if (xhrDelete.readyState == 4 && xhrDelete.status == "200"){
    } else {
        console.error(hotels);
    }
}
xhrDelete.send(null);
}