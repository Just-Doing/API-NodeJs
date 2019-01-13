import React, { PureComponent } from 'react';
import Layout from '@icedesign/layout';
import cx from 'classnames';
import Logo from '../Logo';

import './index.scss';

export default class Footer extends PureComponent {
  render() {
    const { className, style } = this.props;
    return (
      <Layout.Footer
        className={cx('ice-design-layout-footer', className)}
        style={{
          ...style,
          lineHeight: '36px',
        }}
      >
        <div className="ice-design-layout-footer-body">
          <div className="copyright">
            Nicol
          </div>
        </div>
      </Layout.Footer>
    );
  }
}
