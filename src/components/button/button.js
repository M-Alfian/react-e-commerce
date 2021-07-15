export default function Button({ onClick, plus }) {
  return (
    <button onClick={onClick}>
      {plus ? '+' : '-'}
    </button>
  )
}