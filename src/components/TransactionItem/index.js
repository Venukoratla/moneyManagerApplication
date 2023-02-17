// Write your code here
const TransactionItem = props => {
  const {details, deleteTransaction} = props
  const {id, optionId, titleInput, amount} = details
  const onDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li key={id}>
      <p>{titleInput}</p>
      <p>{amount}</p>
      <p>{optionId}</p>
      <button type="button" onClick={onDelete} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
