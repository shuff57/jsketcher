import {getDescription, MatchIndex, matchSelection} from "../selectionMatcher";
import { toast } from "react-toastify";

// Factory function that creates action utilities with access to the action index
export function createActionUtils(getActionFn) {
  
  function runActionOrToastWhyNot(actionId, ctx, silent) {
    const selection = ctx.viewer.selected;
    const action = getActionFn(actionId);
    
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
    const action = getActionFn(actionId);
    
    if (action && action.wizard) {
      ctx.ui.$wizardRequest.next({
        title: action.shortName,
        schema: action.wizard,
        onApply: (params) => action.invoke(ctx, params)
      })
    }
  }

  return { runActionOrToastWhyNot, startOperation };
}
