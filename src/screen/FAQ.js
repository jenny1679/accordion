import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Accordion from 'react-bootstrap/Accordion';
import '../index.css';

function FAQ() {
  return (
    <Accordion defaultActiveKey="0" as="div">
      <Accordion.Item eventKey="0" >
        <Accordion.Header prefix="header">Accordion Item #1</Accordion.Header>
        <Accordion.Body prefix="jenny">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FAQ;

//   return (
//     <>
//       <div className="container fs-4 mt-5">
//         <div className="fs-1 mb-5 text-center fw-bolder">常見問題&nbsp;FAQ</div>
//         <div id="accordion">
//           <p>Q：產品如何保存？</p>
//           <div >
//             {/* <img src="/30_css樣式/images/001.png"> */}
//             <p>
//               冷凍、冷藏商品需於收貨30分鐘內放入冰箱保存，冷凍保存期限印製於產品包裝上，冷藏兩日內食用完畢
//               <br />常溫商品陰涼處存放即可<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9A2540" class="bi bi-emoji-smile" viewBox="0 0 16 16">
//                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//                 <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
//               </svg>
//             </p>
//           </div>

//           <p>Q：產品如何食用？</p>
//           <div>
//             {/* <img src="/30_css樣式/images/002.png"> */}
//             <p>
//               生銅鑼燒室溫下退冰10-15分、生大福室溫下退冰30分<br />
//               部分商品可於冷凍狀態下享用，口感近似冰淇淋，冷藏保存期限為兩天，敬請趁鮮享用<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9A2540" class="bi bi-emoji-smile" viewBox="0 0 16 16">
//                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//                 <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
//               </svg>
//             </p>
//           </div>

//           <p>
//             Q：運費如何計算？</p>
//           <div>
//             {/* <img src="/30_css樣式/images/003.png"> */}
//             <p>
//               本島宅配運費計算方式如下：<br />
//               消費$1500元以下，運費$150、消費$1501-$3000元，運費$220、消費$3001元 以上，免運費 (限同一地址)<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9A2540" class="bi bi-emoji-smile" viewBox="0 0 16 16">
//                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//                 <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
//               </svg>
//             </p>
//           </div>

//           <p>Q：商品包裝是紙盒還是保麗龍盒？</p>
//           <div >
//             {/* <img src="/30_css樣式/images/001.png"> */}
//             <p>
//               為提倡環保，皆以紙盒包裝出貨，若需加購保麗龍盒請於下單後來電，將由專人為您處理，謝謝<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9A2540" class="bi bi-emoji-smile" viewBox="0 0 16 16">
//                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//                 <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
//               </svg>
//             </p>
//           </div>

//           <p>Q：註冊後收不到驗證碼簡訊怎麼辦？</p>
//           <div >
//             {/* <img src="/30_css樣式/images/001.png"> */}
//             <p>
//               若手機有開啟阻擋廣告簡訊功能，則無法順利發送，您可來電或來信客服，將由專人協助您開通會員<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9A2540" class="bi bi-emoji-smile" viewBox="0 0 16 16">
//                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//                 <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
//               </svg>
//             </p>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// export default FAQ;
