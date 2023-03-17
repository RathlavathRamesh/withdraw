// Write your code here
import './index.css'
import {Component} from 'react'

class Denomination extends Component {
  render() {
    const {item, increase} = this.props
    const {value} = item
    const onDelete = () => {
      increase(value)
    }
    return (
      <li className="item">
        <button type="button" className="but" onClick={onDelete}>
          {item.value}
        </button>
      </li>
    )
  }
}
export default Denomination
