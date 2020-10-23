import React from "react";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import { getChildrenToRender } from "./utils";
import { isImg } from "./utils";

class Footer extends React.Component {
  static defaultProps = {
    className: "footer1",
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <div {...props} {...dataSource.wrapper}>
        <OverPack {...dataSource.OverPack}>
          <div style={{
            textAlign: 'center',
            color: '#fff',
            padding: 100
          }}>
            <h2 style={{color: '#fff'}}>Contract Address: </h2>
            <h3>
              <a href="#">TK5WbFF7cqkhbo6FyjMPpwjaeeiVWqVikn</a>
            </h3>
            <span>© Copyright Tron Money. All Rights Reserved</span>
          </div>
        </OverPack>
      </div>
    );
  }
}

export default Footer;
