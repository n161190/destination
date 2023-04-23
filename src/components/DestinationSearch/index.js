// Write your code here
import {Component} from 'react'
import DestinationItem from './components/DestinationItem'
class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }
  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.probs
    const searchResult = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <div>
          <h1>Destination Search</h1>
          <div>
            <input
              type="search"
              placeholder="Search"
              onChange={this.onSearchInput}
              value={searchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <div>
            <ul>
              {searchResult.map(eachre => (
                <DestinationItem key={eachre.id} destinationDetails={eachre} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
