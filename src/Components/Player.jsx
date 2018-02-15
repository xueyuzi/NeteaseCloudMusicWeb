import React from "react";
export default class player extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            audio:document.createElement("audio"),
        }
    }
    play=()=>{
        this.refs.myaudio.play();
    }
    pause=()=>{
        this.refs.myaudio.pause();
    }

    render() {
        if(this.refs.myaudio){
            var paused = this.refs.myaudio.paused;
            console.log(paused);
        }
        return <div>
            <audio ref="myaudio" src={this.props.url} autoPlay/>
            正在播放:{this.props.name}
            <span onClick={this.play}> 播放 </span>
            <span onClick={this.pause}> 暂停 </span>
        </div>
    }
}