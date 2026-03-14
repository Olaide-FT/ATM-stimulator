
let balance = 10000;

function myAtm(withdrawal) {
    return balance -= withdrawal;
}

document.getElementById('myAtm').addEventListener('submit', function (e) {

    e.preventDefault();

    let withdrawalInput = document.getElementById("withdrawal");
    let withdrawal = Number(withdrawalInput.value);
    let message = document.querySelector('#message');

    let status = "";

    switch (true) {

        case withdrawal > balance:
            status = "Insufficient Balance";
            message.classList.remove("text-green-400");
            message.classList.add("text-red-400");
            break;


        case withdrawal > 0 && withdrawal <= balance:

            let result = myAtm(withdrawal);

            status = `Transaction successful. Remaining balance: ${result.toLocaleString()} Naira`;
            message.classList.remove("text-red-400");
            message.classList.add("text-green-400");
            break;

        case withdrawal <= 100:
            status = "Withdrawal amount must be greater than 100";
            message.classList.remove("text-green-400");
            message.classList.add("text-red-400");
            break;    

        default:
            status = "Invalid amount";
            message.classList.remove("text-green-400");
            message.classList.add("text-red-400");
            break;
    }

    message.innerHTML = status;

    withdrawalInput.value = "";
});


