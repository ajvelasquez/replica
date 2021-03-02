import VoteType from "../../models/enums/VoteType";
import ExtendedAction from "../../models/interfaces/ExtendedAction";
import Topic from "../../models/interfaces/Topic";
import data from "./../data.json";

const LOAD = "topics/LOAD";
const SELECT_OPTION = "topics/SELECT_OPTION";
const VOTE = "topics/VOTE";

export interface State {
  all: Topic[];
}

const initialState: State = { all: data as Topic[] };

export default function reducer(
  state: State = initialState,
  action: ExtendedAction
) {
  switch (action.type) {
    case LOAD:
      return { ...state, all: state.all };
    case SELECT_OPTION:
      return {
        ...state,
        all: state.all.map((topic) => {
          if (topic.id === action.payload.id) {
            const updatedTopic = {
              ...topic,
              selectedOption: action.payload.option,
            };
            return updatedTopic;
          }

          return topic;
        }),
      };
    case VOTE:
      return {
        ...state,
        all: state.all.map((topic) => {
          if (topic.id === action.payload.id && topic.selectedOption !== null) {
            const updatedTopic = {
              ...topic,
              selectedOption: null,
            };

            if (topic.selectedOption === VoteType.LIKE) {
              updatedTopic.votes.likes++;
            } else {
              updatedTopic.votes.dislikes++;
            }

            return updatedTopic;
          }

          return topic;
        }),
      };
    default:
      return state;
  }
}

export function loadTopics() {
  return { type: LOAD };
}

export function voteTopic(id: number) {
  return { type: VOTE, payload: { id } };
}

export function selectOption(id: number, option: VoteType) {
  return { type: SELECT_OPTION, payload: { id, option } };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }
