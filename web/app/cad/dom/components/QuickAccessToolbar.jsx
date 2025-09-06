import React from 'react';
import ls from './QuickAccessToolbar.less';
import toolbarLs from 'ui/components/Toolbar.less';
import {ActionButtonBehavior} from '../../actions/ActionButtonBehavior';
import {FaSave, FaUndo, FaRedo, FaInfoCircle, FaVideo, FaEye, FaThLarge, FaFile} from 'react-icons/fa';

const buttonIdsLeft = ['menu.file', 'Save', 'Undo', 'Redo'];
const buttonIdsRight = ['menu.views', 'menu.viewModes', 'ToggleCameraMode', 'Info'];

const iconMap = {
  'menu.file': FaFile,
  'Save': FaSave,
  'Undo': FaUndo,
  'Redo': FaRedo,
  'menu.views': FaEye,
  'menu.viewModes': FaThLarge,
  'ToggleCameraMode': FaVideo,
  'Info': FaInfoCircle,
};

function QAButton({actionId}) {
  const Icon = iconMap[actionId];
  return (
    <ActionButtonBehavior actionId={actionId}>
      {beh => (
        <div className={ls.qaBtnLarge} title={actionId} {...beh}>
          {Icon && <Icon size={20} />}
        </div>
      )}
    </ActionButtonBehavior>
  );
}

export function QuickAccessToolbar() {
  // ActionButtonBehavior handles its own subscriptions; this component can be stateless.
  return (
  <div className={ls.quickAccessBar + ' ' + toolbarLs.root + ' ' + toolbarLs.small + ' flat'}>
      <div className={ls.qaGroup}>
  {buttonIdsLeft.map(id => <QAButton key={id} actionId={id} />)}
      </div>
      <div className={ls.qaGroup}>
        {buttonIdsRight.map(id => <QAButton key={id} actionId={id} />)}
        <div className={ls.qaSeparator}/>
        <div className={ls.avatarCircle} title='Profile'>U</div>
      </div>
    </div>
  );
}
