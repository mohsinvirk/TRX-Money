import React from "react";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Tabs, Row, Col, Button } from "antd";
import { Icon } from "@ant-design/compatible";
import { getChildrenToRender } from "./utils";

const TabPane = Tabs.TabPane;

class Content8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  onChange = (key) => {
    this.setState({ current: parseFloat(key) });
  };

  getBlockChildren = (item, i) => {
    const { tag, content } = item;
    const { text, img } = content;
    const textChildren = text.children;
    const { icon } = tag;
    const iconChildren = icon.children;
    const tagText = tag.text;
    return (
      <TweenOne.TweenOneGroup
        enter={{
          y: 30,
          delay: 300,
          opacity: 0,
          type: "from",
          ease: "easeOutQuad",
        }}
        leave={null}
        component=""
      >
        {this.state.current === i + 1 && (
          <Row
            key="content"
            className={content.className}
            gutter={32}
          >
          <Col className={img.className} xs={24} md={8}>
              <img src={img.children} width="100%" alt="img" />
            </Col>


            {textChildren.map((item) => (
              <Col className={text.className} xs={24} md={8}>
                {item.map((i) => (
                  <Row gutter={24} key={i.title}>
                    <Col lg={24}>
                      <h3 color="#000">{i.title}</h3>
                      <p>{i.description}</p>
                    </Col>
                  </Row>
                ))}
              </Col>
            ))}
          </Row>
        )}
      </TweenOne.TweenOneGroup>
    );
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const tabsChildren = dataSource.block.children.map(this.getBlockChildren);
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>

          <OverPack {...dataSource.OverPack}>
            <TweenOne.TweenOneGroup
              key="tabs"
              enter={{
                y: 30,
                opacity: 0,
                delay: 200,
                type: "from",
              }}
              leave={{ y: 30, opacity: 0 }}
              {...dataSource.tabsWrapper}
            >
              {tabsChildren}

            </TweenOne.TweenOneGroup>
          </OverPack>

          <Button type="primary">Download Marketing Plan</Button>
        </div>
        <Button type="primary">Download Marketing Plan</Button>
      </div>
    );
  }
}

export default Content8;
