import React from "react";
import axios from "axios";
export default class getPlaylistDetal extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tracks:[],
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
            console.log(res)
            // window.location = res.data.data[0].url
            var audio = document.createElement("audio");
            audio.src = res.data.data[0].url;
            audio.autoplay=true;
            document.getElementById("app").appendChild(audio)
        })
    }
    render(){
        console.log(this.state.tracks)
        var musiclist = this.state.tracks.map(music=>{
            return <li onClick={e=>this.handerClick(music.id)}>
                <a>{music.name}</a>
            </li>
        })
        return <ul>{musiclist}</ul>
    }
}