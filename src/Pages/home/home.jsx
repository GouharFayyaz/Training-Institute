import React from "react";
import Slider from "../../component/Sliders/slider"
import Inp from "../home/event"
import Course from "../home/courses"
import Page from "../home/page";
import Join from "../../component/Counter/joinus";
import Slider2 from "../../component/Sliders/slider2";
import SliderTwo from "../../component/Sliders/secondSlider";
import Price from "../home/price"
import Blog from "../../component/Sliders/blog";


export default class Home extends React.Component{
    render(){
        return(
            <>
            <Slider/>
            <Inp/>
            <Course/>
            <Blog/>
             <Page/> 
            <Join/>
            <SliderTwo/>
            <Price/>
            <Slider2/>
          
            </>
        )
    }
}