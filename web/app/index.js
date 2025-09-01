import './react18-warnings-suppress.js';
import startApplication from "./cad/init/startApplication";

startApplication(context => {
  window.__CAD_APP = context;
});
