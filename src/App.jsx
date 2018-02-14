import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Playlist from "@Components/Playlist"
import PlaylistDetal from "@Components/getPlaylistDetal"

export default class App extends React.Component {

    render() {
        return <HashRouter>
            <div>
            <Route path="/" component={Playlist}/>
            <Route path="/playlistDetal/:id" component={PlaylistDetal}/>
            </div>
        </HashRouter>
    }
}