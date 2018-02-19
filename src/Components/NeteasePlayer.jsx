import React from "react";
import axios from "axios";
import Player from "@Components/Player";
import Loader from "react-loaders";
import "loaders.css/src/animations/ball-beat.scss";

import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
export default class getPlaylistDetal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            playUrl: "",
            playName: "",
            loaderFlag:false,
        }
    }
    componentWillReceiveProps(newVal) {
        // alert('no')
        console.log(newVal.match.params)
        this.setState({
            loaderFlag:true,
        })
        axios.get("/playlist/detail", {
            params: newVal.match.params
        }).then(res => {
            console.log(res.data.result.tracks)
            this.setState({
                tracks: res.data.result.tracks,
                loaderFlag:false,
            })
        })
    }

    handerClick = (rowNum) => {
        axios.get(`/music/url?id=${this.state.tracks[rowNum].id}`).then(res => {
            this.setState({
                playUrl: res.data.data[0].url,
                playName: this.state.tracks[rowNum].name
            })
        })
    }
    render() {
        var musiclist = this.state.tracks.map((music, index) => {
            // return <li className="music_list_item" onClick={e=>this.handerClick(music.id,music.name)}>
            //     <a>{music.name}</a>
            // </li>
            return <TableRow onClick={() => handerClick(music.id, music.name)} key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{music.name}</TableRowColumn>
                <TableRowColumn>{music.artists[0].name}</TableRowColumn>
            </TableRow>
        })
        if(this.state.loaderFlag)
            return <Loader color="skyblue" type="ball-beat" active />
        else   
            return <div className="music-list">
                <Player name={this.state.playName} url={this.state.playUrl} />
                <Table
                    height="400px"
                    fixedHeader={false}
                    fixedFooter={false}
                    multiSelectable={true}
                    onCellClick={this.handerClick}
                >
                    <TableBody
                        showRowHover={true}
                    >
                        {musiclist}
                    </TableBody>
                </Table>
            </div>
            
            
    }
}