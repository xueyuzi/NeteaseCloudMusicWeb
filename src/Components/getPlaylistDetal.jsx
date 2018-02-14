import React from "react";
import axios from "axios";
import Player from "@Components/Player";
export default class getPlaylistDetal extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tracks:[],
            playUrl:"",
        }
    }
    componentDidMount(){
        console.log(this.props.match.params)
        axios.get("/playlist/detail",{
            params: this.props.match.params
          }).then(res=>{
              console.log(res.data.result.tracks)
            this.setState({
                tracks:res.data.result.tracks
            })
        })
    }
    handerClick(id){
        axios.get(`/music/url?id=${id}`).then(res=>{
            this.setState({
                playUrl:res.data.data[0].url
            })
        })
    }
    render(){
        var musiclist = this.state.tracks.map(music=>{
            return <li onClick={e=>this.handerClick(music.id)}>
                <a>{music.name}</a>
            </li>
        })
        return <div>
            <Player url={this.state.playUrl}/>
            <ul>{musiclist}</ul>
        </div>
    }
}