import React from 'react';
import connect from 'ui/connect';
import Toolbar from 'ui/components/Toolbar';
import {ConnectedActionButton, ToolbarActionButtons} from './PlugableToolbar';
import ls from './HeadsUpToolbar.less';
import {combine} from 'lstream';

export const HeadsUpToolbar = connect(streams => combine(
    streams.ui.toolbars.headsUp,
    streams.ui.toolbars.headsUpShowTitles,
    streams.ui.toolbars.headsUpQuickActions).map(([actions, showTitles, quickActions]) => ({actions, showTitles, quickActions})))(
  function HeadsUpToolbar({actions, showTitles, quickActions}) {
    console.log('=== HeadsUpToolbar component loaded ===', {actions, showTitles, quickActions});
    
    return <div style={{background: 'red', padding: '20px', color: 'white'}}>
      <h2>TEST TOOLBAR - Click me!</h2>
      <button onClick={() => {
        console.log('TEST BUTTON CLICKED!');
        alert('TEST BUTTON WORKS!');
      }}>
        Test Button
      </button>
      <div>Actions count: {actions ? actions.length : 0}</div>
    </div>;
  }
);
