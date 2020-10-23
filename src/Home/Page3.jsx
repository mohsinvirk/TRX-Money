import React from "react";
import QueueAnim from "rc-queue-anim";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Row, Col } from "antd";
import { page3 } from "./data.source";

export default function Page3() {
  const children = page3.map((card, i) => (
    <Col key={i.toString()} lg={6} md={12} xs={24}>
      <img src={card.img} alt="" width="100" height="100" />
      <h5>{card.title}</h5>
      <div className="detail">{card.description}</div>
    </Col>
  ));
  return (
    <OverPack
      id="why-us"
      component="section"
      className="page-wrapper page3 text-center"
    >
      <h1>WHY TRON MONEY</h1>

      <p>
        Everyone can have an honest income in an open and transparent system,
        keeping pace with advanced technology
      </p>

      <QueueAnim
        type="bottom"
        className="page"
        leaveReverse
        key="page3"
        component={Row}
      >
        {children}
      </QueueAnim>
    </OverPack>
  );
}
