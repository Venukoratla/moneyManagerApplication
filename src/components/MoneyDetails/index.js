// Write your code here

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <ul>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <p>Your Balance</p>
        <p data-testid="balanceAmount">Rs {balanceAmount}</p>
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <p>Your Income</p>
        <p data-testid="incomeAmount">Rs {incomeAmount}</p>
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <p>Your Expenses</p>
        <p data-testid="expensesAmount">Rs {expensesAmount}</p>
      </li>
    </ul>
  )
}

export default MoneyDetails
