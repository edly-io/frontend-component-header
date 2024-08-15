import React from 'react';
import { getConfig } from '@edx/frontend-platform';
import Cookies from 'universal-cookie';

const ThemeToggleButton = () => {
  const getNextWeek = () => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
  };

  const onToggleTheme = () => {
    const cookies = new Cookies();
    const serverURL = new URL(getConfig().LMS_BASE_URL);
    const themeCookieName = getConfig().THEME_COOKIE_NAME;

    const options = { domain: serverURL.hostname, path: '/', expires: getNextWeek() };
    let themeName = '';

    if (cookies.get(themeCookieName) === 'dark') {
      document.body.classList.remove('indigo-dark-theme');
      themeName = 'light';
    } else {
      document.body.classList.add('indigo-dark-theme');
      themeName = 'dark';
    }
    cookies.set(themeCookieName, themeName, options);
  };

  return (
    <div className="theme-toggle-button">
      <span id="darkmode" role="button" tabIndex="0" onClick={onToggleTheme} onKeyDown={onToggleTheme}>
        <div className="darkmode_icon">
          <span className="ray" />
          <span className="ray" />
          <span className="ray" />
          <span className="ray" />
          <span className="ray" />
          <span className="ray" />
          <span className="ray" />
          <span className="ray" />
        </div>
      </span>
    </div>
  );
};

export default ThemeToggleButton;
