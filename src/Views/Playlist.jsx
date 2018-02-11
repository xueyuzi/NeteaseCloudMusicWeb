import React from "react";
import styled from "styled-components";

const PlaylistItem = styled.li`
	width:100px;
	height:100px;
	background-image: url(${props=>props.coverImgUrl});
	background-size:100% 100%;
	color:white;
	cursor:pointer;
	&:hover{
		filter: grayscale(100%);
	}
`
const PlaylistBox = styled.ul`
	display:flex;
	flex-wrap:wrap;
`


export default class Playlist extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		console.log(this.props)
		var playlistItems = this.props.listData.map(data=>{
			return <PlaylistItem coverImgUrl={data.coverImgUrl} key={data.id}>{data.name}</PlaylistItem>
		})
		return <PlaylistBox>{playlistItems}</PlaylistBox>
	}
}