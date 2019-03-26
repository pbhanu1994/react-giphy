import React, { Component } from "react";
import {
  trendingGiphs,
  loadMoreTrendingGiphs,
  searchGiphs
} from "../services/giphysService";
import NavBar from "./common/navBar";
import SearchBox from "./common/searchBox";
import GiphyCard from "./common/giphyCard";
import NextButton from "./common/nextButton";

class Giphys extends Component {
  state = {
    trendingGiphsData: [],
    giphys: [],
    searchTerm: "",
    count: "",
    offset: 0
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
    const offset = trendingGiphsData.pagination.offset;
    const count = trendingGiphsData.pagination.count;

    const giphys = [];

    trendingGiphsData.data.map(g => {
      const giphysData = {};

      giphysData.id = g.id;
      giphysData.title = g.title;
      giphysData.url = g.images.downsized_large.url;

      return giphys.push(giphysData);
    });

    this.setState({ giphys, count, offset });
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

  handleNextPage = async () => {
    const { count: limit, giphys, offset } = this.state;

    const updateOffset = limit + offset;

    const { data: nextTrendingGiphys } = await loadMoreTrendingGiphs(
      updateOffset
    );

    const updateGiphys = [...giphys];

    nextTrendingGiphys.data.map(ntg => {
      const nextTrendingGiphsData = {};

      nextTrendingGiphsData.id = ntg.id;
      nextTrendingGiphsData.title = ntg.title;
      nextTrendingGiphsData.url = ntg.images.downsized_large.url;

      return updateGiphys.push(nextTrendingGiphsData);
    });

    this.setState({
      offset: updateOffset,
      giphys: updateGiphys
    });
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <React.Fragment>
        <center>
          <NavBar username={this.props.location.state.username} />
          <SearchBox searchTerm={searchTerm} onChange={this.handleSearch} />
          <div style={{ marginTop: "5px" }} className="giphCards">
            {this.renderGiphCards()}
            <NextButton nextPage={this.handleNextPage} />
          </div>
        </center>
      </React.Fragment>
    );
  }
}

export default Giphys;
