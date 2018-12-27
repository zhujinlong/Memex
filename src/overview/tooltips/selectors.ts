/* tslint:disable:no-shadowed-variable */
import { createSelector } from 'reselect'

import { RootState } from '../../options/types'

export const tooltips = (state: RootState) => state.tooltips

export const whichTooltip = createSelector(
    tooltips,
    state => state.whichTooltip,
)
export const showTooltip = createSelector(tooltips, state => state.showTooltip)
export const prevTooltips = createSelector(
    tooltips,
    state => state.prevTooltips,
)
