import { createStore } from "redux";

/**
 * If this file is too big, split it into smaller files:
 * - 1 file per reducer;
 * - 1 index to combine all reducers and create/export the store ...
 */

const PersonaReducer = (state = {detailNeeded: true, PersonaList: []}, action) => {
  const newState = { ...state };
  switch (action.type) {
      case 'ADD_PERSONA_LIST':
          // WE NEVER WORK ON THE STATE ITSELF, COPY THE STATE INSTEAD
          // const newState = { ...state };
          // DO YOUR MAGIC
          newState.PersonaList = action.payload;
          // RETURN THE NEW STATE
          console.log("Coming from the REDUX STATE");
          return newState;
      case 'DELETE_PERSONA':
        newState.PersonaList = newState.PersonaList.filter(persona => persona.id !== action.payload);
        return newState;
      default:
          return state
  }
}

export const store = createStore(PersonaReducer);
