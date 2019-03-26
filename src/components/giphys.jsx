import React, { Component } from "react";
import { trendingGiphs, searchGiphs } from "../services/giphysService";
import NavBar from "./common/navBar";
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
    this.setState({ searchTerm: query });

    try {
      let { data: searchGiphsData } = await searchGiphs(query);
      const { data: trendingGiphsData } = await trendingGiphs();

      searchGiphsData.data.length === 0 &&
        (searchGiphsData = trendingGiphsData);

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
          <NavBar username={this.props.location.state.username} />
          <SearchBox searchTerm={searchTerm} onChange={this.handleSearch} />
          <div style={{ marginTop: "5px" }} className="giphCards">
            {this.renderGiphCards()}
          </div>
        </center>
      </React.Fragment>
    );
  }
}

export default Giphys;
