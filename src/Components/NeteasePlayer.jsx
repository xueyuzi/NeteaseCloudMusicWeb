import React from "react";
import axios from "axios";
import Player from "@Components/Player";
export default class getPlaylistDetal extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tracks:[],
            playUrl:"",
            playName:"",
        }
    }
    componentWillReceiveProps(newVal){
        // alert('no')
        console.log(newVal.match.params)
        axios.get("/playlist/detail",{
            params: newVal.match.params
          }).then(res=>{
              console.log(res.data.result.tracks)
            this.setState({
                tracks:res.data.result.tracks
            })
        })
    }
    
    handerClick(id,name){
        axios.get(`/music/url?id=${id}`).then(res=>{
            this.setState({
                playUrl:res.data.data[0].url,
                playName:name
            })
        })
    }
    render(){
        var musiclist = this.state.tracks.map(music=>{
            return <li className="music_list_item" onClick={e=>this.handerClick(music.id,music.name)}>
                <a>{music.name}</a>
            </li>
        })
        return <div>
            <Player name={this.state.playName} url={this.state.playUrl}/>
            <ul className="music_list_box">{musiclist}</ul>
        </div>
    }
}