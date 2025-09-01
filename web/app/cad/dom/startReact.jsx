import React from 'react';
import ReactDOM from 'react-dom';
let createRootFn = null;
try { createRootFn = require('react-dom/client').createRoot; } catch (e) { /* React < 18 */ }
import WebApplication from './components/WebApplication';

export default function startReact(context, callback) {
  const container = document.getElementById('app');
  if (createRootFn) {
    const root = createRootFn(container);
    root.render(<WebApplication appContext={context} />);
    if (typeof callback === 'function') setTimeout(callback, 0);
    return root;
  }
  return ReactDOM.render(
    <WebApplication appContext={context} />,
    container,
    callback
  );
}
