import React from 'react'
import styled from 'styled-components'

const Loading = styled.div`
    text-align: center;

    @keyframes ldio-ixscb3ycgu {
        0% { transform: rotate(0deg) }
        50% { transform: rotate(180deg) }
        100% { transform: rotate(360deg) }
      }
      .ldio-ixscb3ycgu div {
        position: absolute;
        animation: ldio-ixscb3ycgu 1s linear infinite;
        width: 80px;
        height: 80px;
        top: 10px;
        left: 10px;
        border-radius: 50%;
        box-shadow: 0 2px 0 0 #0a0a0a;
        transform-origin: 40px 41px;
      }
      .loadingio-spinner-eclipse-36yp1njiqvq {
        width: 71px;
        height: 71px;
        display: inline-block;
        overflow: hidden;
        background: #f1f2f3;
      }
      .ldio-ixscb3ycgu {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(0.71);
        backface-visibility: hidden;
        transform-origin: 0 0; /* see note above */
      }
      .ldio-ixscb3ycgu div { box-sizing: content-box; }
      
`;
export const Loader = () => {
    return (
        <Loading>
                <div class="loadingio-spinner-eclipse-36yp1njiqvq"><div class="ldio-ixscb3ycgu">
                <div></div>
                </div></div>
        </Loading>
    )
}
