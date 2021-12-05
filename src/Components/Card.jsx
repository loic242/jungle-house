import '../Styles/card.css'
function Card(){
    const item1= 8;
  const item2=10;
  const item3 =15;
let total = item1 + item2+ item3;
return(
  <div className='lmj-cart'>
    <h1>Cart</h1>
  <ul>
    <li> First tree : {item1}$</li>
    <li> Second tree : {item2}$</li>
    <li>Third tree : {item3}$</li>
  </ul>
    <p> Total: {total}$ </p>
    </div>
)
}
export default Card;