import React from "react";
import { Row, Col, Timeline } from "antd";
import QueueAnim from "rc-queue-anim";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";

const { Item : TItem } = Timeline;


const data = [
  [
    {
      title: "Totally risk free    ",
      description:
        "A verified and Open-source Smart Contract based on Tron Blockchain. Powered by Tether Stable dollar Cryptocurrency - International and Decentralized.",
    },
    {
      title: "Pay-out from Smart-Contract    ",
      description:
        "This concept is designed to transfer your money from wallet to wallet. All transactions are 100% from the contract address to participants' wallets. Wallets are anonymous.",
    },
    {
      title: "Un-freaking-hackable",
      description:
        "It is designed in such a way that no one can change the algorithm or delete the members' rooms. The system is able to work without a site. The site is needed only for convenient display of statistics.",
    },
  ],
  [
    {
      title: "For everyone",
      description:
        "Become a Member in - 25 USDT (approx. $ 25) Tether is a stable cryptocurrency.",
    },
    {
      title: "Easy to understand",
      description:
        "Binary matrix 5 lines - 62 partners in the team are enough to go through two cycles and earn $4,83,800 and Passive income $3,21,16,207.",
    },
    {
      title: "Passive income from the day of JOINING",
      description:
        "Earn passive income from the first day and uni-level from 20th level, post that can repeat earnings every 120 days.",
    },
    {
      title: "Smart contract is Easy & simple",
      description:
        "It is easy to understand even for those who have not encountered such projects.",
    },
  ],
  [
    {
      title: "Decentralized & Long term",
      description:
        "This project runs on a decentralized Tron platform that has to support a Smart contract which will exist as long as the blockchain exists and even the creators of the smart contract will not be able to delete or change its terms.",
    },
    {
      title: "24 / 7 Community support",
      description:
        "Active members will help you take simple steps to start earning regularly.",
    },
    {
      title: "Simple steps    ",
      description:
        "It’s as easy as it gets. Community members help you start. Step by step training on the website. Promotional materials. Sales ads. Support chatbot",
    },
  ],
];


const Page2 = () => {
  return (
    <OverPack component="section" className="page-wrapper page2">
      <QueueAnim
        type="bottom"
        className="page text-center"
        leaveReverse
        key="page"
      >
        <h2 key="title" style={{ textAlign: "center" }}>
          HOW EVERYTHING WORKS{" "}
        </h2>
        <span key="line" className="separator" />
        <QueueAnim type="bottom" className="info-content" key="content">
          <Row gutter={24}>
            {data.map((item, index) => (
              <Col xs={24} lg={8} key={index}>
                <Timeline>
                  {item.map((tItem) => (
                    <TItem key={tItem.title}>
                      <h3>{tItem.title}</h3>
                      <p>{tItem.description}</p>
                    </TItem>
                  ))}
                </Timeline>
              </Col>
            ))}
          </Row>
        </QueueAnim>
      </QueueAnim>
    </OverPack>
  );
}

export default Page2