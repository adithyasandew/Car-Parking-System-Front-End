

function loadAll(){
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+JSON.parse(localStorage.getItem("user")).token);

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch("http://localhost:8080/mySlot", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            console.log(result)
            var id = JSON.parse(result).id===0 ? '-------' : 'E-'+JSON.parse(result).id
            document.getElementById('slot_number').innerText = id
        })
        .catch((error) => console.error(error));


}

function loadPayments(){
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+JSON.parse(localStorage.getItem("user")).token);


    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch("http://localhost:8080/pendingPayment", requestOptions)
        .then((response) => response.text())
        .then((result) =>{
            console.log(result)
            var value = +result===0 ? '------' : `Rs.${result}`;
            document.getElementById('payment').innerText = value
        } )
        .catch((error) => console.error(error));
}

loadAll()
loadPayments()