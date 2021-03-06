import { combineReducers } from 'redux';
import {
  companionWindowsReducer,
  configReducer,
  infoResponsesReducer,
  manifestsReducer,
  viewersReducer,
  windowsReducer,
  workspaceReducer,
  annotationsReducer,
} from '.';

/**
 * Function to create root reducer
 * from plugin reducers.
 * @namespace CreateRootReducer
 */
export default function createRootReducer(pluginReducers) {
  return combineReducers({
    annotations: annotationsReducer,
    companionWindows: companionWindowsReducer,
    config: configReducer,
    infoResponses: infoResponsesReducer,
    manifests: manifestsReducer,
    viewers: viewersReducer,
    windows: windowsReducer,
    workspace: workspaceReducer,
    ...pluginReducers,
  });
}
