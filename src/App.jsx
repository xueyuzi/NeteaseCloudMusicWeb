import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Playlist from "@Components/Playlist";
import NeteasePlayer from "@Components/NeteasePlayer";
import {MuiThemeProvider} from "material-ui/styles"

export default class App extends React.Component {

    render() {
        return <HashRouter>
            <div>
            <Route path="/" component={Playlist}/>
            <MuiThemeProvider>
            <Route path="/music/:id" component={NeteasePlayer}/>
            </MuiThemeProvider>
            </div>
        </HashRouter>
    }
}