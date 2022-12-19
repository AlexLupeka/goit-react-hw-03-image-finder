import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { src, alt, largeImageURL } = this.props;
    const { showModal } = this.state;
    return (
      <GalleryItem>
        <GalleryItemImage src={src} alt={alt} onClick={this.toggleModal} />
        {showModal && (
          <Modal src={largeImageURL} alt={alt} onClose={this.toggleModal} />
        )}
      </GalleryItem>
    );
  }
}
ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
