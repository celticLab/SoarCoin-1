import React from 'react';
import {render} from 'react-dom';
import {renderRoutes} from "./router";
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from '../imports/ui/Main'; // Our custom react component

logger = 0;

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
Meteor.startup(() => {
    logger = _LTracker;
    render(
        renderRoutes(),
        document.getElementById('app')
    );
});