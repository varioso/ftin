import React from 'react';
import { FormattedMessage } from 'react-intl';
import './SidebarBlock.less';

const SignUp = () => (
  <div className="SidebarBlock">
    <h3 className="SidebarBlock__title">
      <FormattedMessage id="new_to_ftin" defaultMessage="New to FTIN?" />
    </h3>
    <a target="_blank" rel="noopener noreferrer" href={process.env.SIGNUP_URL}>
      <button className="SidebarBlock__button">
        <FormattedMessage id="signup" defaultMessage="Sign up" />
      </button>
    </a>
  </div>
);

export default SignUp;
