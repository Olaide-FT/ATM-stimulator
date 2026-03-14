function myAtm(balance, withdrawal) {
    return balance - withdrawal;
}

let balance = 10000;

document.getElementById('myAtm').addEventListener('submit', function (e) {
    e.preventDefault();
    let withdrawal = Number(document.querySelector('#withdrawal').value);
    let message = document.querySelector('#message');

    let result = myAtm(balance, withdrawal);

    let Status = "";

    switch (true) {

        case withdrawal > balance:
            Status = "Insufficient Balance";
            message.classList.remove("text-green-400");
            message.classList.add("text-red-400");
            break;

        case withdrawal > 0 && withdrawal <= balance:
            Status = `Transaction successful. Remaining balance: ${result.toLocaleString()} Naira`;
            message.classList.remove("text-red-400");
            message.classList.add("text-green-400");
            break;

        default:
            Status = "Invalid amount";
            message.classList.remove("text-green-400");
            message.classList.add("text-red-400");
            break;
    }

    message.innerHTML = Status;

});