const url = "http://localhost:3000"

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

function searchAvailability (e) { 
    e.preventDefault(); 
    console.log("Submit"); 

    let roomSearch = { 
        checkIn: document.getElementById("checkIn").value, 
        checkOut: document.getElementById("checkOut").value, 
        numberOfNights: document.getElementById("numberOfNights").value, 
        adults: document.getElementById("adults").value, 
        children: document.getElementById("children").value
    }; 
    console.log(roomSearch); 

    let xhr = new window.XMLHttpRequest(); 
    xhrPost.open("Post", url); 
    xhrPost.setRequestHeader("Content-Type", "application/json");
    xhrPost.send(JSON.stringify(grad));
}











// const renderHotel = () => { 
//     console.log('submit'); 
//     const hotelList = hotel.map(element => { 
//         return (
//             "<li>" + 
//             "CHECK IN: " + element.checkIn + 
//             " <br> "
//             "CHECK OUT: "  + element.checkOut + 
//             " <br> " + 
//             "# OF NIGHTS: " + element.numberOfNights + 
//             " <br> " + 
//             "ADULTS: " + element.adults + 
//             " <br> " + 
//             "CHILDREN: " + element.children + 

//             "</li>"
//         )
//     })
// }