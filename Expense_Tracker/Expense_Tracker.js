const expenseBtn = document.querySelector("#addExpense");
const expenseDiv = document.querySelector(".expenseList");
const totalExpenses = document.querySelector("#totalExpense");

let expenses = [];
let total = 0;

function renderExpenses() {
  let html = "";
  expenses.forEach((expense, index) => {
    html += `
        <div class="expense-item">
            <div class="expense-item-name">${expense.name}</div>
            <div class="expense-item-amt">${expense.amount}</div>
            <button class="del-expense-add" onclick="deleteExpense(${index})">x</button>
        </div>
        `;
  });
  expenseDiv.innerHTML = html;
  totalExpenses.innerText = `Total Expenses: $${total}`;
}

function addingExpenses() {
  const expenseName = window.prompt("Enter expense: ");
  const expenseAmt = parseFloat(window.prompt("Enter expense amount: "));

  if (expenseName && expenseAmt) {
    const expense = {
      name: expenseName,
      amount: expenseAmt,
    };
    expenses.push(expense);
    total += expenseAmt;

    renderExpenses();
  }
}

function deleteExpense(index) {
  const deletedExpense = expenses.splice(index, 1)[0];
  total -= deletedExpense.amount;
  renderExpenses();
}

expenseBtn.addEventListener("click", addingExpenses);
