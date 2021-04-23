import React , {useState, useEffect} from 'react';
import './App.css';
import { Heading } from './Components/Heading';
import { Unsplashimage } from './Components/Unsplashimage';
import axios from 'axios';
import { Loader } from './Components/Loader';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Modal from 'react-modal';

const Globalstyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
`;

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function App() {
  const [images, setImages] = useState([]);
  const [modalone, setModal] = useState(false);
  const [curr, setCurr] = useState();
  
  
  useEffect(() => {
   
    fetchImages();
  },[])

  const fetchImages = () => {
    const res = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
    .get(`${res}/photos/random?client_id=${accessKey}&count=8`)
    .then(result => setImages([...images, ...result.data]));
  }
  return (
    <div className="App">
      
      <Heading />
      <Globalstyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImage>
          {images.map((image, index) => (
            <Unsplashimage url={image.urls.regular} key={image.id} setCurr={setCurr} setModal={setModal} index={index} />
          ))}
        </WrapperImage>
      </InfiniteScroll>
      <Modal
          isOpen={modalone}
          onRequestClose={() => setModal(false)}
          style={{
            overlay: {
              opacity: 1,
            },
            content: {
              position: "absolute",
              top: 50,
              left: "25vw",
              right: "25vw",
              bottom: 7,
              maxWidth: "100vw",
              maxHeight: "100vh",
              borderRadius: 30,
              color: "white",
              backgroundColor: "white",
            },

          }}
        >
          <div className="modal_cont">
          <button className="modal_btn" onClick={() =>
              curr === 0 ? setCurr(images.length - 1) : setCurr(curr - 1)}>
            <ArrowLeftIcon />
          </button>
          
            <img className="img_transi"style={{ width: "34vw", height: "80vh"}} src={images[curr]?.urls.regular} alt="" />
            
          
          <br />
          
          
          <button className="modal_btn1" onClick={() => curr === images.length ? setCurr(0) : setCurr(curr + 1)}>
            <ArrowRightIcon />
          </button>
        
          </div>
        </Modal>
      
    </div>
  );
}
export default App;
