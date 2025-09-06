import React from 'react';
import ls from './QuickAccessToolbar.less';
import toolbarLs from 'ui/components/Toolbar.less';
import {ConnectedActionButton} from './PlugableToolbar';

const buttonIdsLeft = ['menu.file', 'Save', 'Undo', 'Redo'];
const buttonIdsRight = ['menu.views', 'menu.viewModes', 'ToggleCameraMode', 'Info'];

const QAButton = ({actionId}) => <ConnectedActionButton actionId={actionId} size='small' noLabel />;

export function QuickAccessToolbar() {
  // ActionButtonBehavior handles its own subscriptions; this component can be stateless.
  return (
  <div className={ls.quickAccessBar + ' ' + toolbarLs.root + ' ' + toolbarLs.small + ' flat'}>
      <div className={ls.qaGroup}>
  {buttonIdsLeft.map(id => <QAButton key={id} actionId={id} />)}
      </div>
      <div className={ls.qaGroup}>
        <div className={ls.profilePlaceholder}>PROFILE</div>
        <div className={ls.qaSeparator}/>
  {buttonIdsRight.map(id => <QAButton key={id} actionId={id} />)}
      </div>
    </div>
  );
}
