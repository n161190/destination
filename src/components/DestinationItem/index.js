// Write your code here
const DestinationItem = probs => {
  const {destinationDetails} = probs
  const {name, imgUrl} = destinationDetails
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
