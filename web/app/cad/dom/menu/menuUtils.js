export const menuAboveElementHint = el => {
  const {top, left, bottom} = el.getBoundingClientRect();
  return ({
    orientationUp: true,
    flatBottom: true,
    x: left,
    y: document.documentElement.clientHeight - top
  });
};

export const menuBelowElementMatchWidthHint = el => {
  const {bottom, left, width} = el.getBoundingClientRect();
  return ({
    orientationUp: false,
    x: left,
    y: bottom,
    width
  });
};
