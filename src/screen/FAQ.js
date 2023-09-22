import {React, useState} from 'react';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function FAQ() {
  // const [color, setColor] = useState('#9A2540'); //初始被選到的顏色
  // const x = Accordion.className;
  // const bgColor = () =>
  // x === accordion-button ? { backgroudColor: color } : { backgroudColor: '#83818c' };
  // style={{bgColor}}

  return (
    <>
      <div className="container">
        <div className="fs-3 text-center fw-bolder">常見問題&nbsp;FAQ</div>
        <Accordion defaultActiveKey="0" className="mt-5 p-3">
          <Accordion.Item eventKey="0" className="item">
            <Accordion.Header as="CustomHeader">Q：產品購買數量有無限制？</Accordion.Header>
            <Accordion.Body>
              官網單個商品可購買數量，上限為20個，如有更多需求，請洽客服電話提前預購。
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="item">
            <Accordion.Header as="CustomHeader">Q：產品如何保存？</Accordion.Header>
            <Accordion.Body>
              冷凍、冷藏商品需於收貨30分鐘內放入冰箱保存，冷凍保存期限印製於產品包裝上，冷藏兩日內食用完畢。常溫商品陰涼處存放即可。
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="item">
            <Accordion.Header as="CustomHeader">Q：產品如何食用？</Accordion.Header>
            <Accordion.Body>
              生銅鑼燒室溫下退冰10-15分、生大福室溫下退冰30分。部分商品可於冷凍狀態下享用，口感近似冰淇淋，冷藏保存期限為兩天，敬請趁鮮享用。
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="item">
            <Accordion.Header as="CustomHeader">Q：運費如何計算？</Accordion.Header>
            <Accordion.Body>
              本島宅配運費計算方式：消費$1500元以下，運費$150、消費$1501-$3000元，運費$220、消費$3001元 以上，免運費 (限同一地址)。
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="item">
            <Accordion.Header  as="CustomHeader">Q：商品包裝是紙盒還是保麗龍盒？</Accordion.Header>
            <Accordion.Body>
              為提倡環保，皆以紙盒包裝出貨，若需加購保麗龍盒請於下單後來電，將由專人為您處理，謝謝。
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default FAQ;