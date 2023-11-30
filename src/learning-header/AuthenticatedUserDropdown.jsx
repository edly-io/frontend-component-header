import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Dropdown, Image } from '@edx/paragon';
import {
  ProfileIcon, LogoutIcon, AccountIcon, DashboardIcon,
} from '../Icons';

import messages from './messages';

const AuthenticatedUserDropdown = ({ intl, username, userProfileImage }) => {
  const dashboardMenuItem = (
    <Dropdown.Item href={`${getConfig().LMS_BASE_URL}/dashboard`}>
      <span className="drop-icon"><DashboardIcon className="text-primary" /></span>
      {intl.formatMessage(messages.dashboard)}
    </Dropdown.Item>
  );

  return (
    <>
      {/* <a className="text-gray-700" href={}>{intl.formatMessage(messages.help)}</a> */}
      <Dropdown className="user-dropdown ml-3">
        <Dropdown.Toggle variant="none" className="user-dropdown-toggle">
          <FontAwesomeIcon icon={faUserCircle} className="d-none" size="lg" />
          {
            userProfileImage && (
              <div className="user-profile mr-3">
                <Image src={userProfileImage} fluid alt={username} />
              </div>
            )
          }
          <span data-hj-suppress className="d-none d-md-inline">
            {username}
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-right">
          {dashboardMenuItem}
          <Dropdown.Item href={`${getConfig().ACCOUNT_PROFILE_URL}/u/${username}`}>
            <span className="drop-icon"><ProfileIcon className="text-primary" /></span>
            {intl.formatMessage(messages.profile)}
          </Dropdown.Item>
          <Dropdown.Item href={getConfig().ACCOUNT_SETTINGS_URL}>
            <span className="drop-icon"><AccountIcon className="text-primary" /></span>
            {intl.formatMessage(messages.account)}
          </Dropdown.Item>
          { getConfig().ORDER_HISTORY_URL && (
            <Dropdown.Item href={getConfig().ORDER_HISTORY_URL}>
              {intl.formatMessage(messages.orderHistory)}
            </Dropdown.Item>
          )}
          <Dropdown.Item href={getConfig().LOGOUT_URL}>
            <span className="drop-icon"><LogoutIcon className="text-primary" /></span>
            {intl.formatMessage(messages.signOut)}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

AuthenticatedUserDropdown.propTypes = {
  intl: intlShape.isRequired,
  userProfileImage: PropTypes.string,
  username: PropTypes.string.isRequired,
};

AuthenticatedUserDropdown.defaultProps = {
  userProfileImage: null,
};

export default injectIntl(AuthenticatedUserDropdown);
