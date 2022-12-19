import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcSearch } from 'react-icons/fc';

import {
  SearchHeader,
  SearchForm,
  SearchButton,
  SearchLabel,
  SearchInput,
} from './SeachBar.styled';

export default class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = { query: '' };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      toast.warn(
        `I can't find anything... Write at least some familiar word there!`
      );
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <SearchLabel>Search</SearchLabel>
            <FcSearch style={{ width: 30, height: 30 }} />
          </SearchButton>
          <SearchInput
            type="text"
            value={query}
            onChange={this.handleChange}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos..."
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}
