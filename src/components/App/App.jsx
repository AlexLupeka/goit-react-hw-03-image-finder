import { ToastContainer, toast } from 'react-toastify';
import { Component } from 'react';
import { Container, ContainerText } from './App.styled';
import SearchBar from '../SearchBar/SearchBar';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';
import api from '../pixabayApi/pixabay-api';
import { ImageGallery } from '../ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    error: null,
    isLoading: false,
    query: '',
    page: 1,
    images: [],
  };

  handleFormSubmit = newQuery => {
    this.setState({ query: newQuery, page: 1, images: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    if (prevQuery !== nextQuery) {
      this.setState({ isLoading: true, error: null });
      this.renderImages();
    }
  }
  renderImages = () => {
    const { query, page } = this.state;
    api
      .fetchImages(query, page)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          page: prevState.page + 1,
        }));
        if (response.hits.length === 0) {
          return toast.error(
            `We haven't come up with pictures yet for this query - ${query}! Try again something from "Kobzar"`
          );
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { query, error, images, isLoading } = this.state;

    return (
      <Container>
        <SearchBar onSubmit={this.handleFormSubmit}></SearchBar>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {!query && (
          <ContainerText>
            Let's go to search all what you want! <b /> Just enter a word and we
            will show a picture!
          </ContainerText>
        )}
        {isLoading && <Loader />}
        {error && <Error />}
        <>
          <ImageGallery images={this.state.images} />
          {images.length >= 12 && <Button onClick={this.renderImages} />}
        </>
      </Container>
    );
  }
}
