//Types
import { types } from './types';

export const catalogActions = {
    changeRoute: (newRoute) => ({
        type:    types.CHANGE_ROUTE,
        payload: newRoute,
    })
};
