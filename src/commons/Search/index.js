/*eslint-disable*/
import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { InputGroup,InputAreaIcon } from './styled';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  handleSearch = ({ target }) => this.setState({ search: target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.search);
  };

  render() {
    const { placeholder } = this.props;

    return <form onSubmit={this.handleSubmit}>
      <InputGroup>
        <InputBase
          placeholder={placeholder || 'Search…'}
          inputProps={{ 'aria-label': 'search' }}
          onChange={this.handleSearch}
          value={this.state.search}
        />
        <InputAreaIcon onClick={this.handleSubmit}>
          <SearchIcon />        
        </InputAreaIcon>
      </InputGroup>
    </form>;
  }
}

export default Search;
