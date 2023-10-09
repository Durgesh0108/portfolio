// import React from 'react'
// import { useState } from 'react';
// import styled from 'styled-components'



// const ProgressDiv = styled.div`
//     color: white;

//     &.label span{
//     animation: showText 0.5s 1s linear forwards;
//     opacity: 0;
//     }

//     &.progress-line{
//     position: relative;
//     height: 8px;
//     width: 100%;
//     border-radius: 10px;
//     background-color: black;
//     animation: animate 1s cubic-bezier(1,0,0,5,1) forwards;
//     transform: scaleX(0);
//     transform-origin: left;
// }

// @keyframes animate {
//     100%{
//         transform: scaleX(1);
//     }
// }

// &.progress-line span{
//     height: 100%;
//     background-color: aqua;
//     position: absolute;
//     border-radius: 10px;
//     animation: animate 1s 1s cubic-bezier(1,0,0,5,1) forwards;
//     transform: scaleX(0);
//     transform-origin: left;
// }

// &.progress-line .${label} 
// `;

// const ProgressBar = (props) =>
// {
//     return (
//         <div>
//             <div className='flex'>
//                 <i className="icon">{props.icon}</i>
//                 <div className="label">
//                     <span>{props.label}</span>
//                 </div>
//             </div>
//             <div className={`progress-line .${props.label}`}>
//                 <span></span>
//             </div>
//         </div>
//     )
// }

// export default ProgressBar
