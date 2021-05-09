import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar.component";
import SearchBox from "./components/SearchBox/SearchBox.component";

export default class App extends Component {
  state = {
    currentUser: {},
    currentUserGists: [],
    searchField: "",
  };

  searchUser = (str) => {
    this.getAndSetData(str);
    console.log(`${str} from SearchBox`);
  };

  render() {
    return (
      <div>
        <NavBar />
        <SearchBox handleSearchUser={this.searchUser} />
        
        <h1>{this.state.currentUser.currUserName}</h1>
        <h1>{this.state.currentUserGists.length}</h1>


      </div>
    );
  }

  // helper functions

  componentDidMount() {
    let searchUrl = this.state.searchField || "ys";
    this.getAndSetData(searchUrl);
  }

  // const baseURL = "https://api.github.com/users/ys";
  getAndSetData = async (user) => {
    const baseURL = "https://api.github.com/users/" + user;
    const usersReqResponse = await fetch(baseURL);
    const initialResponseData = await usersReqResponse.json();

    if (initialResponseData.message) {
      console.log("=====Error=====", initialResponseData.message);
      return;
    }

    const {
      gists_url: currUserGistsUrl,
      login: currUserLogin,
      name: currUserName,
      avatar_url: currUserAvatarUrl,
    } = initialResponseData;

    const _currentUser = { currUserLogin, currUserName, currUserAvatarUrl };
    const _currentUserGists = [];

    const allGistsUrlString =
      currUserGistsUrl.substr(0, currUserGistsUrl.length - 10) +
      "?page=1&&per_page=3";
    const gistsRes = await fetch(allGistsUrlString);
    const gistsData = await gistsRes.json();
    const userPublicGistsURLs = gistsData.map(
      (item) => item.public && item.url
    );

    const userGistsData = await Promise.all(
      userPublicGistsURLs.map((g) => fetch(g).then((r) => r.json()))
    );

    userGistsData.forEach(({ files: preProcessedFiles, forks }) => {
      // forks process
      forks.forEach((fork) => {
        fork.timestamp = new Date(fork.created_at).getTime();
      });

      forks = forks
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 3)
        .map((fork) => ({
          login: fork.user.login,
          name: fork.user.name,
          avatar_url: fork.user.avatar_url,
        }));

      // files process
      const files = Object.keys(preProcessedFiles).map((fileKey) => {
        const { filename, type, language, content } = preProcessedFiles[
          fileKey
        ];
        return { filename, type, language, content };
      });

      // add to state array
      _currentUserGists.push({ files, forks });
    });

    this.setState({
      currentUser: _currentUser,
      currentUserGists: _currentUserGists,
    });

    console.log("Current user", _currentUser);
    console.log("All Gists", _currentUserGists);
  };
}
