import React, { Component } from 'react';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    selectedImage: null,
    prevQuery: '',
  };
  // API REQUEST
  fetchImages = async () => {
    const { query, page } = this.state;
    const perPage = 12;
    const API_KEY = '39383410-163fa90d28e607aa13527d20b';
    //*
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&pretty=true&page=${page}&per_page=${perPage}`;

    this.setState({ isLoading: true });

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }

      const data = await response.json();
      if (data.totalHits === 0) {
        throw new Error('No images found for the given query');
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
      }));

      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 500);
    } catch (error) {
      console.error(error.message);
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
    );
  }
}
export default App;
