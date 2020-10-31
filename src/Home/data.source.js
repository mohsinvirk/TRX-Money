import React from "react";
import { Button } from "antd";
export const assets = "https://gw.alipayobjects.com/os/s/prod/antv/assets";
const base = "https://antv.alipay.com/";
export const page1 = [
  {
    img: `${assets}/image/icon/g2-c94ef.svg`,
    href: `${base}zh-cn/g2/3.x/index.html`,
    title: "G2",
    description: " 是以数据为驱动，具有高度的易用性和扩展性的可视化图形语法。",
  },
  {
    img: `${assets}/image/icon/g6-b4554.svg`,
    title: "G6",
    href: `${base}zh-cn/g6/1.x/index.html`,
    description: " 是一套便捷、动态和富有交互的流程图和关系分析的图表库。",
  },
  {
    img: `${assets}/image/icon/f2-d360c.svg`,
    title: "F2",
    href: `${base}zh-cn/f2/3.x/index.html`,
    description: " 是一套精简、高性能、易扩展的的移动端图表库。",
  },
];

export const page3 = [
  {
    img: `${assets}/image/home/features-simple-9617c.svg`,
    title: "Fastest Bockchain",
    description:
      "This operates on TRON Blockchain ecosystem and DApps, Transacations happen at lightning speed.",
  },
  {
    img: `${assets}/image/home/features-professional-1c6d1.svg`,
    title: "Low Fee",
    description:
      "Transaction Fees on TRON Blockchain are currently the lowest amongst all Blockchains",
  },
  {
    img: `${assets}/image/home/features-powerful-243e3.svg`,
    title: "Stable Joining",
    description:
      "Tron Money can be accessed from a Mobile, PC and Internet, so, members can operate from all across the Globe.",
  },
  {
    img: `${assets}/image/home/features-simple-9617c.svg`,
    title: "Verified Code",
    description:
      "Every Transaction interacts with our Smart Contract which is verified on TRON Blockchain.",
  },
];

export const page4 = [
  {
    name: "陈为",
    profile: "浙江大学计算机学院 CAD & CG 国家重点实验室教授 可视化专家",
    avatar: "https://os.alipayobjects.com/rmsportal/CcFeLxXurbQmwrT.jpg",
    comment:
      "在多年可视化设计与开发的积累基础上，蚂蚁金服团队推出了 AntV 产品，这是工业界在基础可视化语法与实践方面发出的最强声音，也是工业界与学术界一道推进可视化研发进展的最佳利器。",
  },
  {
    name: "林峰",
    profile: "爱烹饪的数据可视化攻城狮",
    avatar: "https://zos.alipayobjects.com/rmsportal/wtkIALmYDSmOIiAalkdv.jpg",
    comment:
      "G2 是面粉，ECharts 是面条，皆微小但美好，因小食材怀大梦想，助力共筹东方巨龙崛起之盛宴，迎四海饕客。",
  },
];

export const page5 = [
  `${assets}/image/home/aliyun-f111c.png`,
  `${assets}/image/home/alipay-fceea.png`,
  `${assets}/image/home/tmall-cb94f.png`,
  `${assets}/image/home/taobao-ade5b.png`,
  `${assets}/image/home/mybank-da103.png`,
  `${assets}/image/home/jd-23e52.png`,
  `${assets}/image/home/yunos-2edef.png`,
  `${assets}/image/home/cainiao-40fc8.png`,
];

export const Nav30DataSource = {
  wrapper: { className: "header3 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header3-logo",
    children:
      <h3>Tron-Money</h3>
  },
  Menu: {
    className: "header3-menu",
    children: [
      {
        name: "item0",
        className: "header3-item",
        children: {
          href: "#home",
          children: [
            {
              children: (
                <span>
                  <p>Home</p>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item1",
        className: "header3-item",
        children: {
          href: "#why-us",
          children: [
            {
              children: (
                <span>
                  <p>Why us</p>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item2",
        className: "header3-item",
        children: {
          href: "#features",
          children: [
            {
              children: (
                <span>
                  <p>Our Features</p>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item3",
        className: "header3-item",
        children: {
          href: "#oppertunity",
          children: [
            {
              children: (
                <span>
                  <p>Oppertunity</p>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item4",
        className: "header3-item",
        children: {
          href: "#faq",
          children: [
            {
              children: (
                <span>
                  <p>F.A.Q</p>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item5",
        className: "header3-item",
        children: {
          href: "#contact",
          children: [
            {
              children: (
                <span>
                  <p>Contact Us</p>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item6",
        className: "header3-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <Button size="large" type="primary">
                  Swap USDT
                </Button>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item7",
        className: "header3-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <Button size="large" danger type="ghost">
                  Join Us
                </Button>
              ),
              name: "text",
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: "header3-mobile-menu" },
};
export const Banner10DataSource = {
  wrapper: { className: "banner1" },
  BannerAnim: {
    children: [
      {
        name: "elem0",
        BannerElement: { className: "banner-user-elem" },
        textWrapper: { className: "banner1-text-wrapper" },
        bg: { className: "bg bg0" },
        title: {
          className: "banner1-title",
          children:
            "https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png",
        },
        content: {
          className: "banner1-content",
          children: "一个高效的页面动画解决方案",
        },
        button: { className: "banner1-button", children: "Learn More" },
      },
      {
        name: "elem1",
        BannerElement: { className: "banner-user-elem" },
        textWrapper: { className: "banner1-text-wrapper" },
        bg: { className: "bg bg1" },
        title: {
          className: "banner1-title",
          children:
            "https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png",
        },
        content: {
          className: "banner1-content",
          children: "一个高效的页面动画解决方案",
        },
        button: { className: "banner1-button", children: "Learn More" },
      },
      {
        name: "elem2",
        BannerElement: { className: "banner-user-elem" },
        textWrapper: { className: "banner1-text-wrapper" },
        bg: { className: "bg bg1" },
        title: {
          className: "banner1-title",
          children:
            "https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png",
        },
        content: {
          className: "banner1-content",
          children: "一个高效的页面动画解决方案",
        },
        button: { className: "banner1-button", children: "Learn More" },
      },
    ],
  },
};
export const Content00DataSource = {
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>回收项目</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: "content0-block-wrapper k9h76g7v2q-editor_css",
    children: [
      {
        name: "block0",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: (
                <span>
                  <span>
                    <span>
                      <p>$ 3,21,16,207</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <p>Receive Community Passive Bonus on Various Levels</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block1",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: (
                <span>
                  <p>SAFE & SECURE </p>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <span>
                    <span>
                      <p>Blockchain based Smart Contract Technology.</p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block2",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: (
                <span>
                  <p>JOIN $ 25</p>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <p>Easy to Enroll, Tron Money Smart Contract. </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block3",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "Button",
              className: "registration-button ",
              children: (
                <Button type="ghost" danger size={"large"}>
                  <h3>
                    <a href="#">Registration</a>
                  </h3>
                  <h3>
                    <a href="#">Login</a>
                  </h3>
                </Button>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: "home-page-wrapper content5-wrapper" },
  page: { className: "home-page content5" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>成功案例</p>
          </span>
        ),
        className: "title-h1",
      },
    ],
  },
  block: {
    className: "content5-img-wrapper",
    gutter: 16,
    children: [
      {
        name: "block0",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg",
          },
          content: { children: "Ant Design" },
        },
      },
      {
        name: "block1",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg",
          },
          content: { children: "Ant Motion" },
        },
      },
      {
        name: "block2",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg",
          },
          content: { children: "Ant Design" },
        },
      },
      {
        name: "block3",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg",
          },
          content: { children: "Ant Motion" },
        },
      },
      {
        name: "block4",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg",
          },
          content: { children: "Ant Design" },
        },
      },
      {
        name: "block5",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg",
          },
          content: { children: "Ant Motion" },
        },
      },
      {
        name: "block6",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg",
          },
          content: { children: "Ant Design" },
        },
      },
      {
        name: "block7",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg",
          },
          content: { children: "Ant Motion" },
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: "home-page-wrapper content3-wrapper" },
  page: { className: "home-page content3" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>Frequently Asked Questions</p>
          </span>
        ),
        className: "title-h1",
      },
      {
        name: "content",
        className: "title-content",
        children: (
          <span>
            <span>
              <span>
                <h2>Have Any Doubts? Find Your Answers Below</h2>
              </span>
            </span>
          </span>
        ),
      },
    ],
  },
  block: {
    className: "content3-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content3-block",
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: <p>What is Tron Money</p>,
          },
          content: {
            className: "content3-content",
            children: (
              <p>
                Tron Money is a multi-level concept of earning money by
                investing a small amount and also making a community of
                like-minded people ready to contribute. It runs on Tron based
                Blockchain Smart Contract system where the website is just an
                interface for the convenience of working with a smart contract.
              </p>
            ),
          },
        },
      },
      {
        name: "block1",
        className: "content3-block",
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: <p>Who administers Tron Money?</p>,
          },
          content: {
            className: "content3-content",
            children: (
              <p>
                There is no administrator. There is a creator who uploaded the
                contract code to the Tron crypto currency blockchain. Since
                then, the smart contract has been part of the overall network,
                which is supported by AI (Artificial Intelligence). No one has
                the right to affect the operation of a smart contract, delete it
                or stop it. Any attempt to make unauthorized changes will be
                rejected due to inconsistency with previous copies in the block
                chain.
              </p>
            ),
          },
        },
      },
      {
        name: "block2",
        className: "content3-block",
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: <p>What is Tron Blockchain?</p>,
          },
          content: {
            className: "content3-content",
            children: (
              <p>
                TRON is a Blockchain-based decentralized operating system based
                on a cryptocurrency native to the system, known as TRX.
                Currently, It is the fastest growing Blockchain explorer in the
                World.
              </p>
            ),
          },
        },
      },
      {
        name: "block3",
        className: "content3-block",
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: <p>How does Tron Money pay?</p>,
          },
          content: {
            className: "content3-content",
            children: (
              <p>
                It follows a DApp wallet to wallet system of payment. Hence,
                there is no chance any money goes in the wrong hands as only the
                owner of the wallet has the key to access.
              </p>
            ),
          },
        },
      },
      {
        name: "block4",
        className: "content3-block",
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: <p>What is DApp (Decentralised Application)?</p>,
          },
          content: {
            className: "content3-content",
            children: (
              <p>
                DApp is an abbreviated form for decentralized application. A
                DApp has its backend code running on a decentralized
                peer-to-peer network. Tron Blockchain has its DApp Wallets
              </p>
            ),
          },
        },
      },
      {
        name: "block5",
        className: "content3-block",
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: <p>What Currency does Tron Money Work with?</p>,
          },
          content: {
            className: "content3-content",
            children: (
              <p>
                Tron Money works with Tron based USDT crypto currency, it is
                one of the well-known crypto currencies in the world currently.
              </p>
            ),
          },
        },
      },
      {
        name: "block0",
        className: "content3-block",
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: <p>How do I participate in the Project?</p>,
          },
          content: {
            className: "content3-content",
            children: <p>How do I participate in the Project?</p>,
          },
        },
      },
    ],
  },
};

export const Feature50DataSource = {
  wrapper: { className: "home-page-wrapper content7-wrapper" },
  page: { className: "home-page content7" },
  OverPack: {},
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p style={{ color: "#fff" }}>Advantages of Tron Money </p>
            <h6 style={{ maxWidth: 680, margin: "0 auto", color: "#fff" }}>
              Open source smart contract uploaded to TRON Blockchain.
              Cryptocurrency - international and decentralized
            </h6>
          </span>
        ),
        className: "title-h1",
      },
    ],
  },
  tabsWrapper: { className: "content7-tabs-wrapper" },
  block: {
    children: [
      {
        name: "block0",
        tag: {
          className: "content7-tag",
          text: {
            children: (
              <span>
                <h1>公司新闻</h1>
              </span>
            ),
            className: "content7-tag-name",
          },
          icon: { children: "mobile" },
        },
        content: {
          className: "content7-content",
          text: {
            className: "content7-text",
            md: 14,
            xs: 24,
            children: [
              [
                {
                  title: "Decentralized System",
                  description:
                    "It runs on TRON Blockchain, hence it is completely controlled by Artificial Intelligence (AI). No Human Intervention.",
                },
                {
                  title: "Global Platform",
                  description:
                    "It can be operated from anywhere in the world as long as you have a Mobile or a Computer/Laptop.",
                },
                {
                  title: "Passive Income",
                  description:
                    "Huge Opportunity to earn more than $50 million in Passive Income from this plan.",
                },
              ],
              [
                {
                  title: "Open Source Code",
                  description:
                    "Anyone who wants to check the Source Code can easily visit the contract and view the codes.",
                },
                {
                  title: "Stable currency $ USDT",
                  description:
                    "Tron Money accepts TRON USDT as its cryptocurrency on TRON Blockchain. It is one of the most stable cryptos in the market.",
                },
                {
                  title: "Success Guaranteed",
                  description:
                    "This plan is designed keeping in mind guaranteed financial freedom to every member who invests with Tron Money.",
                },
              ],
            ],
          },
          img: {
            className: "content7-img",
            children:
              "https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png",
            md: 10,
            xs: 24,
          },
        },
      },
    ],
  },
};

export const Feature60DataSource = {
  wrapper: { className: "home-page-wrapper content8-wrapper" },
  page: { className: "home-page content8" },
  OverPack: {},
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p style={{ color: "#000" }}>Opportunity</p>
            <h6 style={{ maxWidth: 680, margin: "0 auto", color: "#000" }}>
              Tron Money offers various Types of Income starting with $25
              USDT
            </h6>
          </span>
        ),
        className: "title-h1",
      },
    ],
  },
  tabsWrapper: { className: "content8-tabs-wrapper" },
  block: {
    children: [
      {
        name: "block0",
        tag: {
          className: "content8-tag",
          text: {
            children: (
              <span>
                <h1>公司新闻</h1>
              </span>
            ),
            className: "content8-tag-name",
          },
          icon: { children: "mobile" },
        },
        content: {
          className: "content8-content",
          img: {
            className: "content8-img",
            children:
              "https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png",
            md: 10,
            xs: 24,
          },
          text: {
            className: "content8-text",
            md: 14,
            xs: 24,
            children: [
              [
                {
                  title: "Direct Bonus",
                  description:
                    "Get 20% Referral bonus from your all Direct Partners when they buy levels.",
                },
                {
                  title: "Uni Level Bonus",
                  description:
                    "Get Extra 25% Unilevel bonus from your tree till 20th Level.",
                },
                {
                  title: "Dividend Bonus",
                  description:
                    "Make direct 10 active users and get monthly global dividend bonus.",
                },
              ],
              [
                {
                  title: "Buy Level Bonus",
                  description:
                    "Get 75% buy level bonus by upgrading Levels of both you and your Team.",
                },
                {
                  title: "Passive Bonus",
                  description:
                    "Passive bonus is a security even if you are not active in Tron Money.",
                },
                {
                  title: "Recycle Bonus                  ",
                  description:
                    "Recycle all your valueable income after 120 days.",
                },
              ],
            ],
          },
        },
      },
    ],
  },
};

export const Footer10DataSource = {
  wrapper: { className: "home-page-wrapper footer1-wrapper" },
  OverPack: { className: "footer1", playScale: 0.2 },
  block: {
    className: "home-page",
    gutter: 0,
    children: [
      {
        name: "block0",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          className: "logo",
          children:
            "https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg",
        },
        childWrapper: {
          className: "slogan",
          children: [
            {
              name: "content0",
              children: "Animation specification and components of Ant Design.",
            },
          ],
        },
      },
      {
        name: "block1",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: (
            <span>
              <p>回收项目</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: "link0",
              href: "#",
              children: (
                <span>
                  <span>
                    <span>
                      <p>电梯回收</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: "link1",
              href: "#",
              children: (
                <span>
                  <p>铁铝铜回收</p>
                </span>
              ),
            },
            {
              name: "link2",
              href: "#",
              children: (
                <span>
                  <p>不锈钢回收</p>
                </span>
              ),
            },
            {
              name: "link3",
              href: "#",
              children: (
                <span>
                  <p>工程拆除</p>
                </span>
              ),
            },
            {
              name: "link4",
              href: "#",
              children: (
                <span>
                  <p>中央空调回收</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block2",
        xs: 24,
        md: 6,
        className: "block",
        title: { children: "关于" },
        childWrapper: {
          children: [
            { href: "#", name: "link0", children: "FAQ" },
            { href: "#", name: "link1", children: "联系我们" },
          ],
        },
      },
      {
        name: "block3",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: (
            <span>
              <span>
                <p>关注我们</p>
              </span>
            </span>
          ),
          className: "k9h7k134cu-editor_css",
        },
        childWrapper: {
          children: [
            {
              name: "image~k9h7il8htc6",
              className: "k9h7irl6jgj-editor_css",
              children:
                "https://zos.alipayobjects.com/rmsportal/HzvPfCGNCtvGrdk.png",
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright",
  },
};
