import {authUrl} from "./consts";

function checkServerResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(res.statusMessage);
}

export function register({email, password}) {
  return fetch(`${authUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  }).then(res => checkServerResponse(res));
}

export function signin({email, password}) {
  return fetch(`${authUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  }).then(res => checkServerResponse(res));
}

export function getContent(token) {
  return fetch(`${authUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(res => checkServerResponse(res));
}