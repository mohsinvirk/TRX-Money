import React from "react";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { Row, Col, Collapse } from "antd";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { getChildrenToRender } from "./utils";
const { Panel } = Collapse;
class Content3 extends React.PureComponent {
  getDelay = (e, b) => (e % b) * 100 + Math.floor(e / b) * 100 + b * 100;

  render() {
    const { ...props } = this.props;
    const { dataSource, isMobile } = props;
    delete props.dataSource;
    delete props.isMobile;
    let clearFloatNum = 0;
    const children = dataSource.block.children.map((item, i) => {
      const childObj = item.children;
      const delay = isMobile ? i * 50 : this.getDelay(i, 24 / item.md);
      const liAnim = {
        opacity: 0,
        type: "from",
        ease: "easeOutQuad",
        delay,
      };
      const childrenAnim = { ...liAnim, x: "+=10", delay: delay + 100 };
      clearFloatNum += item.md;
      clearFloatNum = clearFloatNum > 24 ? 0 : clearFloatNum;
      return (
        <Panel key={i} header={childObj.title.children}>
          {childObj.content.children}
        </Panel>
      );
    });
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...dataSource.OverPack}>
            <Collapse>{children}</Collapse>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content3;
