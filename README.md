ATM Withdrawal Simulator

A simple ATM Withdrawal Simulator built with HTML, TailwindCSS, and JavaScript.
This project allows users to enter a withdrawal amount and receive instant feedback about whether the transaction was successful or not.

The application simulates basic ATM logic such as checking for insufficient balance, validating withdrawal limits, and updating the remaining balance after a successful transaction.

Features

 1. Withdrawal amount input
 2. Balance validation
 3. Automatic balance update after successful withdrawal
 4. Error handling for invalid or insufficient amounts
 5. Dynamic message feedback
 
 Color-coded responses:
  Green = Successful transaction
  Red = Error or invalid transaction
  Input field automatically clears after each transaction
  Number formatting using `toLocaleString()` for better readability


How It Works

1. The user enters a withdrawal amount.
2. The form submission is intercepted using `event.preventDefault()`.
3. JavaScript validates the withdrawal amount using conditional logic.
4. If the withdrawal is valid:
    The amount is deducted from the balance.
    The remaining balance is displayed.
5. If the withdrawal is invalid:
    An appropriate error message is displayed.
6. The message color changes depending on the transaction result.


Author
Built as part of a JavaScript learning project.