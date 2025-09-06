import React from 'react';
import connect from 'ui/connect';
import Toolbar from 'ui/components/Toolbar';
import {ConnectedActionButton, ToolbarActionButtons} from './PlugableToolbar';
import ls from './HeadsUpToolbar.less';
import {combine} from 'lstream';
import {ActionButtonBehavior} from '../../actions/ActionButtonBehavior';
import {menuBelowElementMatchWidthHint} from '../menu/menuUtils';

function splitIntoGroups(actions) {
  const groups = [[]];
  actions.forEach(a => {
    if (a === '-') {
      groups.push([]);
    } else {
      groups[groups.length - 1].push(a);
    }
  });
  return groups.filter(g => g.length > 0);
}

function defaultGroupLabels(groupCount) {
  const defaults = ['SKETCH', 'CREATE', 'BOOLEAN', 'MODIFY', 'PATTERN', 'PRIMITIVES', 'TOOLS', 'MANAGE', 'EXPORT'];
  return Array.from({length: groupCount}, (_, i) => defaults[i] || '');
}

export const HeadsUpToolbar = connect(streams => combine(
    streams.ui.toolbars.headsUp,
    streams.ui.toolbars.headsUpShowTitles,
    streams.ui.toolbars.headsUpQuickActions).map(([actions, showTitles, quickActions]) => ({actions, showTitles, quickActions})))(
  function HeadsUpToolbar({actions, showTitles, quickActions}) {
    const groups = splitIntoGroups(actions || []);
    const labels = defaultGroupLabels(groups.length);
    // Heuristically detect special groups to wire label-buttons to menus
    const toId = a => Array.isArray(a) ? a[0] : a;
    const primitivesIndex = groups.findIndex(g => g.some(a => (
      ['BOX','CYLINDER','SPHERE','CONE','TORUS','primitive_box','primitive_cylinder','primitive_sphere','primitive_cone','primitive_torus']
    ).includes(toId(a))))
    const createIndex = groups.findIndex(g => g.some(a => (
      ['EXTRUDE','CUT','REVOLVE','LOFT','SWEEP']
    ).includes(toId(a))))
    const constructIndex = groups.findIndex(g => g.some(a => (
      ['BOOLEAN','UNION','SUBTRACT','INTERSECT']
    ).includes(toId(a))))
    const modifyIndex = groups.findIndex(g => g.some(a => (
      ['SHELL_TOOL','FILLET_TOOL','SCALE_BODY','DEFEATURE_REMOVE_FACE','MIRROR_BODY','MOVE_BODY']
    ).includes(toId(a))))
    const transformIndex = groups.findIndex(g => g.some(a => (
      ['MIRROR_BODY','PATTERN_LINEAR','PATTERN_RADIAL','MOVE_BODY']
    ).includes(toId(a))))
    const toolsIndex = groups.findIndex(g => g.some(a => (
      ['GET_INFO','WIRE_LINE']
    ).includes(toId(a))))
    const manageIndex = groups.findIndex(g => g.some(a => (
      ['IMPORT_MODEL','DELETE_BODY']
    ).includes(toId(a))))
    const exportIndex = groups.findIndex(g => g.some(a => (
      ['EXPORT_BREP','StlExport','ImagePngExport','NativeFormatExport']
    ).includes(toId(a))))

    return <Toolbar flat className={ls.ribbon}>
      <div className={ls.mainActions}>
        {groups.map((group, i) => {
          if (i === primitivesIndex && primitivesIndex !== createIndex) {
            return null; // hide primitives group
          }
          return <div className={ls.group} key={i}>
            <div className={ls.groupBody}>
              <ToolbarActionButtons actions={group} showTitles={showTitles} />
            </div>
      {i === createIndex ? (
              <ActionButtonBehavior actionId={'menu.primitives'}>
                {behaviourProps => (
                  <div
                    className={ls.groupLabelButton}
                    onClick={e => {
                      e.stopPropagation();
                      behaviourProps.invoke(menuBelowElementMatchWidthHint(e.currentTarget));
                    }}
                  >
                    CREATE
                  </div>
                )}
              </ActionButtonBehavior>
            ) : i === constructIndex ? (
              <ActionButtonBehavior actionId={'menu.construct'}>
                {behaviourProps => (
                  <div
                    className={ls.groupLabelButton}
                    onClick={e => {
                      e.stopPropagation();
                      behaviourProps.invoke(menuBelowElementMatchWidthHint(e.currentTarget));
                    }}
                  >
                    CONSTRUCT
                  </div>
                )}
              </ActionButtonBehavior>
            ) : i === modifyIndex ? (
              <ActionButtonBehavior actionId={'menu.modify'}>
                {behaviourProps => (
                  <div
                    className={ls.groupLabelButton}
                    onClick={e => {
                      e.stopPropagation();
                      behaviourProps.invoke(menuBelowElementMatchWidthHint(e.currentTarget));
                    }}
                  >
        MODIFY
                  </div>
                )}
              </ActionButtonBehavior>
            ) : i === toolsIndex ? (
              <ActionButtonBehavior actionId={'menu.inspect'}>
                {behaviourProps => (
                  <div
                    className={ls.groupLabelButton}
                    onClick={e => {
                      e.stopPropagation();
                      behaviourProps.invoke(menuBelowElementMatchWidthHint(e.currentTarget));
                    }}
                  >
                    INSERT
                  </div>
                )}
              </ActionButtonBehavior>
            ) : i === manageIndex ? (
              <ActionButtonBehavior actionId={'menu.insert'}>
                {behaviourProps => (
                  <div className={ls.groupLabelButton} {...behaviourProps}>
                    INSERT
                  </div>
                )}
              </ActionButtonBehavior>
            ) : i === exportIndex ? (
              <ActionButtonBehavior actionId={'menu.export'}>
                {behaviourProps => (
                  <div className={ls.groupLabelButton} {...behaviourProps}>
                    EXPORT
                  </div>
                )}
              </ActionButtonBehavior>
            ) : i === transformIndex ? (
              <ActionButtonBehavior actionId={'menu.transform'}>
                {behaviourProps => (
                  <div
                    className={ls.groupLabelButton}
                    onClick={e => {
                      e.stopPropagation();
                      behaviourProps.invoke(menuBelowElementMatchWidthHint(e.currentTarget));
                    }}
                  >
                    INSPECT
                  </div>
                )}
              </ActionButtonBehavior>
            ) : (
              <div className={ls.groupLabel}>{labels[i]}</div>
            )}
          </div>
        })}
      </div>
      <div className={ls.quickButtons}>
        {quickActions.map(actionId => <ConnectedActionButton size='small' key={actionId} actionId={actionId} />)}
      </div>
    </Toolbar>
  }
);
