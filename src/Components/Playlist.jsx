import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Swiper from "swiper";
const SwiperSlide = styled.div`
	background-image: url(${props => props.coverImgUrl});
	background-size:100%;
	color:white;
	display:flex;
	align-items:center;
`

const SwiperWrapper = styled.div`
	height:20vw;
`

const SwiperMask = styled.div`
	width:100%;
	background:rgba(0,0,0,0.5);
	text-align:center;
	padding:20px 0px;
`


export default class Playlist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playlists: []
		}
	}
	componentWillMount() {
		axios.get("/top/playlist/highquality").then(res => {
			this.setState(
				{ playlists: res.data.playlists }
			)
			console.log(res.data.playlists)
		})
	}

	render() {
		console.log(this.props)
		var playlistItems = this.state.playlists.map(data => {
			return 	<SwiperSlide className="swiper-slide" coverImgUrl={data.coverImgUrl} key={data.id}>
				<SwiperMask><Link to={`/music/${data.id}`}>{data.name}</Link></SwiperMask>
			</SwiperSlide>
		})

		return <SwiperWrapper className="swiper-container">
		  <div className="swiper-wrapper">
			{playlistItems}
		  </div>
		  <div className="swiper-pagination"></div>

		</SwiperWrapper>
	}
	componentDidMount() {
		setTimeout(function(){
			var swiper = new Swiper(".swiper-container",{
				slidesPerView:2,
				spaceBetween:30,
				pagination:{
					el: ".swiper-pagination",
					clickable:true,
				}
			})
		},500)
	}
}