const url = "http://localhost:3000/api/rooms"

let hotel = []; 

let xhrGetAll = new XMLHttpRequest(); 
xhrGetAll.open('Get', url, true); 
xhrGetAll.send();

xhrGetAll.onload = () => { 
    console.log(xhrGetAll); 
    grads = JSON.parse(xhrGetAll.response); 

    if(xhrGetAll.readyState == 4 && xhrGetAll == 200){ 
        console.log()
    }
}



// Submit Button on Home tab to go to Rates Tab
function searchAvailability (e) { 
    e.preventDefault(); 
    console.log("Submitted Room Search"); 

    let roomSearch = { 
        checkIn: document.getElementById("checkIn").value, 
        checkOut: document.getElementById("checkOut").value, 
        numberOfNights: document.getElementById("numberOfNights").value, 
        adults: document.getElementById("adults").value, 
        children: document.getElementById("children").value
    }; 
    console.log(roomSearch); 

    let xhr = new window.XMLHttpRequest(); 
    xhrGet.open("GET", url); 
    xhrGet.setRequestHeader("Content-Type", "application/json");
    xhrGet.send(JSON.stringify(roomSearch));
}

//Display potentialBooking allowing for edit on Rates Tab
// NotWorking 
function displayPotentialBooking() {
    console.log("Potential Booking"); 
    const potentialBooking = renderAvailable().map(element =>{
        return (
                "<li>" + 
                element.roomName + 
                " <br> " + 
                element.roomDescription + 
                " <br> " + 
                element.roomPrice + "<price per night" + 
                " <br> " + 

                `<button onclick=bookNow('${element.addBooking}">Book Now </button>')`
            "</li>"
        )
    })
            document.getElementById("results").innerHTML = 
            "<ul>" + gradList.join('\n') + "</ul>"; 
}

// Render Rooms on Home tab from Submit button to Rates Tab
function renderRoomsAvailable () { 
    console.log("Room availability"); 
    const availableRoomsList = availableRooms.map(element => { 
        return (
            "<li>" + 
                element.roomName + 
                " <br> " + 
                element.roomDescription + 
                " <br> " + 
                element.roomPrice + "<price per night" + 
                " <br> " + 
                `<button onclick=bookNow('${element.addBooking}">Book Now </button>')`
            "</li>"
        )})
            document.getElementById("results").innerHTML = "<ul>" + roomList.join('n') + "</ul>"; 
}








function bookRoom(e) { 
    e.preventDefault(); 
    console.log("Room Book"); 

    let xhrDelete = new XMLHttpRequest(); 
    xhrDelete.open('DELETE', url, true); 
    xhrDelete.onload = function () { 
        let rooms = JSON.parse(xhrDelete.response); 
        if(xhrDelete.readyState == 4 && xhrDelete.status == "200") { 
            console.table(rooms); 
        } else { 
            console.error(rooms);
        }
    }
    xhrDelete.send(null);
}


