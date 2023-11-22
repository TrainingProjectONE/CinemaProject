console.log('hallo cinema');

const seats = document.getElementById("seats");



const seatAmount = 100;

for ( let i = 1; i <= seatAmount; i++) {

    const seatButton = document.createElement("button");
    seatButton.innerText = i;
    seats.appendChild(seatButton);

}