import React from "react";
import {PlayArrow,Pause,SkipNext,SkipPrevious} from "material-ui-icons";
export default class player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            audio: document.createElement("audio"),
            playing:true,
        }
    }
    play = () => {
        this.setState({
            playing: true
        })
        this.refs.myaudio.play();
    }
    pause = () => {
        this.setState({
            playing:false
        })
        this.refs.myaudio.pause();
    }

    render() {
        if (this.refs.myaudio) {
            var paused = this.refs.myaudio.paused;
            console.log(paused);
        }
        return <div className="player_container">
            <div className="player_bar">
                <audio ref="myaudio" src={this.props.url} autoPlay />
                <div>
                    {/* 操作区域 */}
                    <SkipPrevious />
                    {this.state.playing?(<Pause onClick={this.pause}/>):(<PlayArrow  onClick={this.play}/>)}
                    <SkipNext />
                </div>
                <div className="player_info">
                    {/* 显示区域 */}
                    正在播放:{this.props.name}
                </div>
                <div>
                    {/* 功能区域 */}

                </div>
            </div>
        </div>
    }
}