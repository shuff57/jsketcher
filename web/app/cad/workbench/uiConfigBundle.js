import CoreActions from '../actions/coreActions';
import HistoryActions from '../actions/historyActions';
import UsabilityActions from '../actions/usabilityActions';
import menuConfig from './menuConfig';
import React from 'react';
import OperationHistory from '../craft/ui/OperationHistory';
import Expressions from '../expressions/Expressions';
import {SelectionView} from "../dom/components/SelectionView";
import {GrSelect} from "react-icons/gr";
import {Explorer} from "cad/dom/components/Explorer";

export const BundleName = "@UIConfig";

export function activate(ctx) {
  const {services, streams} = ctx;
  // Removed menu.file (moved to QuickAccessToolbar)
  streams.ui.controlBars.left.value = ['menu.craft', 'menu.boolean', 'menu.primitives', 'menu.views', 'menu.viewModes', 'Donate', 'GitHub'];
  streams.ui.controlBars.right.value = [
    ['Info', {label: null}],
    ['RefreshSketches', {label: null}],
    ['ShowSketches', {label: 'sketches'}], ['DeselectAll', {label: null}], ['ToggleCameraMode', {label: null}]
  ];

  // Removed Save (now in QuickAccessToolbar)
  streams.ui.toolbars.headsUpQuickActions.value = ['StlExport', 'menu.workbenches'];

  ctx.actionService.registerActions(CoreActions);
  ctx.actionService.registerActions(HistoryActions);
  ctx.actionService.registerActions(UsabilityActions);

  services.menu.registerMenus(menuConfig);

  services.ui.registerFloatView('project', Explorer, 'Model', 'cubes');
  services.ui.registerFloatView('history', OperationHistory, 'Modifications', 'history');
  services.ui.registerFloatView('expressions', Expressions, 'Expressions', 'percent');
  services.ui.registerFloatView('selection', SelectionView, 'Selection', GrSelect);

  ensureUndoRedo(ctx);
}

function ensureUndoRedo(ctx) {
  const add = (id, label, invoke) => {
    if (!ctx.actionService.getAction(id)) {
      ctx.actionService.registerActions([{
        id,
        appearance: { label, cssIcons: [label === 'undo' ? 'undo' : 'repeat'] },
        invoke
      }]);
    }
  };
  add('Undo', 'undo', app => app.projectService.historyManager && app.projectService.historyManager.undo && app.projectService.historyManager.undo());
  add('Redo', 'redo', app => app.projectService.historyManager && app.projectService.historyManager.redo && app.projectService.historyManager.redo());
}