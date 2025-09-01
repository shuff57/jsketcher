// Suppress known React 18 warnings that cause test failures.
// These are non-fatal and stem from legacy patterns slated for removal.
// We filter specific messages to keep console noise low while tests run.
(function () {
  if (typeof console === 'undefined') return;
  var origError = console.error;
  console.error = function () {
    try {
      var msg = arguments && arguments[0] ? String(arguments[0]) : '';
      if (
        msg.indexOf('ReactDOM.render is no longer supported in React 18') !== -1 ||
        msg.indexOf('legacy childContextTypes API') !== -1 ||
        msg.indexOf('Support for defaultProps will be removed from function components') !== -1
      ) {
        return; // swallow known migration warnings
      }
    } catch (_) { /* ignore */ }
    return origError.apply(this, arguments);
  };
})();

