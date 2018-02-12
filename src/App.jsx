import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Playlist from "@Components/getPlaylist"
import PlaylistDetal from "@Components/getPlaylistDetal"

export default class App extends React.Component {

    render() {
        return <BrowserRouter>
            <div>
            <Route path="/" component={Playlist}/>
            <Route path="/playlistDetal/:id" component={PlaylistDetal}/>
            </div>
        </BrowserRouter>
    }
}