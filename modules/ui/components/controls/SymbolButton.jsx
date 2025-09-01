import React from 'react';

import ls from './SymbolButton.less';

export default function SymbolButton({type = 'neutral', onClick, children}) {
  return <div className={ls[type]} onClick={onClick}>{children}</div>
}




