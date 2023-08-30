import { PixiComponent, TYPES } from './utils/element.js';
import { createRoot, render, unmountComponentAtNode } from './render.js';
import Stage from './stage.js';
import { PixiFiber } from './reconciler.js';
import { Context as AppContext, AppProvider, AppConsumer, withPixiApp } from './stage/provider.js';
import { useTick, useApp } from './hooks.js';
import { withFilters } from './hoc.js';
import { eventHandlers } from './utils/pixi.js';
import { applyDefaultProps } from './utils/props.js';

/**
 * -------------------------------------------
 * Public API
 * -------------------------------------------
 */

export {
    createRoot,
    render,
    unmountComponentAtNode,
    Stage,
    withPixiApp,
    PixiComponent,
    PixiFiber,
    AppProvider,
    AppConsumer,
    AppContext,
    useTick,
    useApp,
    withFilters,
    applyDefaultProps,
    eventHandlers,
    TYPES,
};
