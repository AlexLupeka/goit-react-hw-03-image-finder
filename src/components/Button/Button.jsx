import { Component } from 'react';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';
import { ButtonLoadMore } from './Button.styled';

export class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  scroll = () => {
    this.props.onClick();
    scroll.scrollToBottom();
  };

  render() {
    return (
      <ButtonLoadMore onClick={this.scroll} type="button">
        Load more
      </ButtonLoadMore>
    );
  }
}
