import "core-js/stable";
import "regenerator-runtime/runtime";

import React from 'react';
import ReactDOM from 'react-dom';
import Settings from './admin/admin-index';

const settingsContainer = document.getElementById('heslo-login-settings');
const { urls = {}, nonce = '' } = window.heslo_login_ajax;
if (settingsContainer) {
  ReactDOM.render(<Settings nonce={nonce} urls={urls} />, settingsContainer);
}