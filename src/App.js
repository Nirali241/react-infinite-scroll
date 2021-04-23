import React , {useState, useEffect} from 'react';
import { Heading } from './Components/Heading';
import { Unsplashimage } from './Components/Unsplashimage';
import axios from 'axios';
import { Loaded } from './Components/Loaded';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

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
  
  useEffect(() => {
   
    fetchImages();
  },[])

  const fetchImages = () => {
    const res = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
    .get(`${res}/photos/random?client_id=${accessKey}&count=10`)
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
        loader={<Loaded />}
      >
        <WrapperImage>
          {images.map(image => (
            <Unsplashimage url={image.urls.thumb} key={image.id} />
          ))}
        </WrapperImage>
      </InfiniteScroll>
      
    </div>
  );
}
export default App;
