const url = "http://localhost:3000/api/nasa"

let Reservation = []; 

let xhrGetAll = new XMLHttpRequest(); 
xhrGetAll.open('Get', url, true); 
xhrGetAll.send();

xhrGetAll.onload = () => { 
    console.log(xhrGetAll); 
    Reservation = JSON.parse(xhrGetAll.response); 

    if(xhrGetAll.readyState == 4 && xhrGetAll == 200){ 
        console.log()
    }
}


function displayBookingAvailability() {
    console.log("Successful Booking Search"); 
    const checkAvailability = hotelRoom.map(element =>{
        return (
                "<li>" + 
                element.roomType +  
                " <br> " + 
                element.roomPrice + "<price per night" + 
                " <br> " + 

                `<button onclick=bookNow('${element.addBooking}')">Book Now </button>` +
            "</li>"
        )
    })
            document.getElementById("results").innerHTML = 
            "<ul>" + checkAvailability.join('\n') + "</ul>"; 
}


// Submit Button on Home tab to go to Rates Tab
function searchAvailability (e) { 
    e.preventDefault(); 
    console.log("Submitted Room Search"); 

    let roomSearch = { 
        checkIn: document.getElementById("checkIn").value, 
        checkOut: document.getElementById("checkOut").value, 
    }; 
    console.log(roomSearch); 

    let xhr = new window.XMLHttpRequest(); 
    xhrGet.open("GET", url); 
    xhrGet.setRequestHeader("Content-Type", "application/json");
    xhrGet.send(JSON.stringify(roomSearch));
}

// // Render Rooms on Home tab from Submit button to Rates Tab
// function renderRoomsAvailable () { 
//     console.log("Room availability"); 
//     const availableRoomsList = availableRooms.map(element => { 
//         return (
//             "<li>" + 
//                 element.roomName + 
//                 " <br> " + 
//                 element.roomDescription + 
//                 " <br> " + 
//                 element.roomPrice + "<price per night" + 
//                 " <br> " + 
//                 `<button onclick=bookNow('${element.addBooking}">Book Now </button>')`
//             "</li>"
//         )})
//             document.getElementById("results").innerHTML = "<ul>" + roomList.join('n') + "</ul>"; 
// }




// function bookRoom(e) { 
//     e.preventDefault(); 
//     console.log("Room Book"); 

//     let xhrDelete = new XMLHttpRequest(); 
//     xhrDelete.open('DELETE', url, true); 
//     xhrDelete.onload = function () { 
//         let rooms = JSON.parse(xhrDelete.response); 
//         if(xhrDelete.readyState == 4 && xhrDelete.status == "200") { 
//             console.table(rooms); 
//         } else { 
//             console.error(rooms);
//         }
//     }
//     xhrDelete.send(null);
// }


