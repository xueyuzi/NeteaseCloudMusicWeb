import React from "react";
import axios from "axios";
import Playlist from "@Views/Playlist"
export default class getPlaylist extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			playlists:[]
		}
	}
	componentDidMount(){
		axios.get("/top/playlist/highquality").then(res=>{
			this.setState(
				{playlists:res.data.playlists}
			)
			console.log(res.data.playlists)
		})
	}
	render(){
		return <Playlist listData={this.state.playlists} />
	}
}