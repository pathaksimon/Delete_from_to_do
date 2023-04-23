import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  deleted = () => {
    const {ramesh, makingituse} = this.props
    const {id} = ramesh
    makingituse(id)
  }

  render() {
    const {ramesh} = this.props
    const {id, title} = ramesh
    return (
      <li className="lista">
        <p className="paras">{title}</p>
        <button type="button" className="bitta" onClick={this.deleted}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
