import constraintActions from "./constraintActions";
import {getDescription, matchAvailableSubjects, MatchIndex, matchSelection} from "../selectionMatcher";
import { toast } from "react-toastify";
import operationActions from "./operationActions";
import {createConstraintGlobalActions} from "./constraintGlobalActions";
import measureActions from "./measureActions";
import objectToolActions from "./objectToolActions";
import commonActions from "./commonActions";
import exportActions from "./exportActions";
import generalToolActions from "./generalToolActions";
import objectActions from "sketcher/actions/objectActions";

let ALL_CONTEXTUAL_ACTIONS, ACTIONS, ALL_ACTIONS, index;

function initIfNeeded() {
  if (ALL_CONTEXTUAL_ACTIONS) {
    return;
  }
  
  // Create local action utilities to avoid circular dependency
  function runActionOrToastWhyNot(actionId, ctx, silent) {
    const selection = ctx.viewer.selected;
    const action = index[actionId];
    if (action) {
      const matched = matchSelection(action.selectionMatcher, new MatchIndex(selection), false);
      if (matched) {
        action.invoke(ctx, matched)
      } else {
        const msg = 'The action "' + action.shortName + ' ' + action.kind + '" requires selection of ' +  getDescription(action.selectionMatcher);
        if (silent) {
          return msg;
        } else {
          toast(msg);
        }
      }
    }
  }

  function startOperation(ctx, actionId) {
    const action = index[actionId];
    if (action && action.wizard) {
      ctx.ui.$wizardRequest.next({
        title: action.shortName,
        schema: action.wizard,
        onApply: (params) => action.invoke(ctx, params)
      })
    }
  }

  // Create constraint global actions with utility functions
  const constraintGlobalActions = createConstraintGlobalActions(runActionOrToastWhyNot, startOperation);

  ALL_CONTEXTUAL_ACTIONS = [
    ...constraintActions,
    ...operationActions,
    ...objectActions,
  ];

  ACTIONS = [
    ...constraintGlobalActions,
    ...measureActions,
    ...generalToolActions,
    ...objectToolActions,
    ...commonActions,
    ...exportActions
    //keep going here
  ];

  ALL_ACTIONS = [
    ...ALL_CONTEXTUAL_ACTIONS,
    ...ACTIONS
  ];
  Object.freeze(ALL_ACTIONS);

  index = {};
  ALL_ACTIONS.forEach(a => index[a.id] = a);
  Object.freeze(index);
}

export function matchAvailableActions(selection) {
  initIfNeeded();
  return matchAvailableSubjects(selection, ALL_CONTEXTUAL_ACTIONS);
}

export function getSketcherAction(actionId) {
  initIfNeeded();
  return index[actionId];
}

export function getAllSketcherActions() {
  initIfNeeded();
  return ALL_ACTIONS;
}

export function getSketcherActionIndex() {
  initIfNeeded();
  return index;
}
