import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }


  //this function takes the value of the components input field
  // & passes it to the component's state, after its done it fires
  // the search function (located in the app component) and passes 
  //it the search term as a parameter
  handleSearch = (e) => {
    let term = e.target.value;
    this.setState({ term });
    this.props.search(term);
  };

  render() {
    return (
      <div className='SearchBar'>
        <input
          placeholder='Enter A Song, Album, or Artist'
          defaultValue={this.props.searchTerm}
          onChange={this.handleSearch}
        />
        <button className='SearchButton'>SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
