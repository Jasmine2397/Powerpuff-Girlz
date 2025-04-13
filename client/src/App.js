import LegalMosaic from './Images/Logo/LegalMosaic.jpg';
import './App.css';
import Header from './MyComponents/Header';
import News from './MyComponents/News';
import Head from './MyCompCSS/Head.css';
import New from './MyCompCSS/New.css';
import Sections from './MyComponents/Sections'; 
import sec from './MyCompCSS/sec.css';
import Actualnews from './MyComponents/Actualnews';
import ActNews from './MyCompCSS/ActNews.css';
import Paragraph from './MyComponents/Paragraph';
import Para from './MyCompCSS/Para.css';
import Chatbot from './MyComponents/Chatbot';
import Chat from './MyCompCSS/Chat.css';
import LogoAdver from './MyComponents/LogoAdver';
import LogAdv from './MyCompCSS/LogAdv.css';
// import Footer from './MyComponents/Footer';
// import Foot from './MyCompCSS/Foot.css';
// import Constitution from './Constitution';
// import Const from './MyCompCSS/Const.css';
import React from 'react';
function App() {
  const streamlitAppUrl = "https://powerpuff-girlz-dqee2fqqlpt5dadzxz3wgq.streamlit.app/";
  let myVariable = 45;
  return (
    <>
      <Header/> 
      <News/>ss
      <Sections/>
      <Actualnews/>
      <Paragraph/>
      <LogoAdver/>
      
      <Chatbot streamlitAppUrl={streamlitAppUrl}/>
      {/* <Footer/> */}
      

    </>
  );
}

export default App;