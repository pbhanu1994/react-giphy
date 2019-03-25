import React, { Component } from "react";
import { trendingGiphs, searchGiphs } from "../services/giphysService";
import SearchBox from "./common/searchBox";
import GiphyCard from "./common/giphyCard";

class Giphys extends Component {
  state = {
    trendingGiphsData: [],
    giphys: [],
    searchTerm: ""
  };

  componentDidMount() {
    this.setGiphysData();
    this.setGiphyImages();
  }

  async setGiphysData() {
    const { data: trendingGiphsData } = await trendingGiphs();
    this.setState({ trendingGiphsData });
  }

  async setGiphyImages() {
    const { data: trendingGiphsData } = await trendingGiphs();
    const giphys = [];

    trendingGiphsData.data.map(g => {
      const giphysData = {};

      giphysData.id = g.id;
      giphysData.title = g.title;
      giphysData.url = g.images.downsized_large.url;

      return giphys.push(giphysData);
    });

    this.setState({ giphys });
  }

  handleSearch = async query => {
    console.log(query);
    this.setState({ searchTerm: query });

    try {
      const { data: searchGiphsData } = await searchGiphs(query);

      console.log(searchGiphsData);
      const giphys = [];

      searchGiphsData.data.map(sg => {
        const searchGiphsData = {};

        searchGiphsData.id = sg.id;
        searchGiphsData.title = sg.title;
        searchGiphsData.url = sg.images.downsized_large.url;

        return giphys.push(searchGiphsData);
      });

      this.setState({ giphys });
    } catch (ex) {
      console.log(ex);
    }
  };

  renderGiphCards() {
    const { giphys } = this.state;

    return giphys.map(g => (
      <GiphyCard key={g.id} id={g.id} title={g.title} giphyUrl={g.url} />
    ));
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <React.Fragment>
        <center>
          <h2>Giphys</h2>
          <SearchBox searchTerm={searchTerm} onChange={this.handleSearch} />
          {this.renderGiphCards()}
        </center>
      </React.Fragment>
    );
  }
}

export default Giphys;
