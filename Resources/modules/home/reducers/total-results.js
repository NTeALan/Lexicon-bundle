import {makeReducer} from '#/main/core/utilities/redux'

import {
  TOTAL_RESULTS_CHANGE
} from './../actions/total-results'

function changeTotalResults(paginationState, action = {}) {
  return action.totalResults
}

const totalResultsReducer = makeReducer(0, {
  [TOTAL_RESULTS_CHANGE]: changeTotalResults
})

export default totalResultsReducer
