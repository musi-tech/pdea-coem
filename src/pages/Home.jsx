/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/css/home.css";
import { Box } from "@mui/material";

import Navbar from "../Components/Navbar/Navbar";
import HeroVid from "../Components/HeroVid/HeroVid";
import MsgCard from "../Components/MsgCard/MsgCard";
import Statistic from "../Components/Statistic/Statistic";
import AboutHome from "../Components/AboutHome/AboutHome";
import News from "../Components/News/News"
import Footer from "../Components/Footer/Footer";
import Accreditations from "../Components/Accreditations/Accreditations";
import RecruitersCarousal from "../Components/RecruitersCarousal/RecruitersCarousal";
import Button from "../Components/Button/Button";
import ApplyButton from "../Components/ApplyButton";



const Home = () => {
  return (
    <Box className="parent">
      <Navbar />
      <HeroVid />
      <div id="nextSection" className="my-32">
      <MsgCard  />
      </div>
      
      <Statistic />
      <AboutHome />
      <News />
      <Accreditations />
      <RecruitersCarousal />
      <div className="flex justify-center my-10">
      <ApplyButton />
      </div>
      <Footer/>
    </Box>
  );
};

export default Home;
