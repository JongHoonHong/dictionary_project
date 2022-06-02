import { db } from "../../firebase";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

//  Actions
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";
const DELETE = "dictionary/DELETE";

//  initialize
const initialState = {
  list: [],
};
//  ActionCreators
export const loadDictionary = (dictionary_list) => {
  return { type: LOAD, dictionary_list };
};

export const createDictionary = (dictionary) => {
  return { type: CREATE, dictionary };
};

export const deleteDictionary = (dictionary_index) => {
  return { type: DELETE, dictionary_index };
};

//  middlewares
export const loadDictionaryFB = () => {
  return async function (dispatch) {
    const dictionary_data = await getDocs(collection(db, "dictionary"));

    let dictionary_list = [];

    dictionary_data.forEach((b) => {
      dictionary_list.push({ id: b.id, ...b.data() });
    });

    dispatch(loadDictionary(dictionary_list));
  };
};

export const addDictionaryFB = (dictionary) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dictionary"), dictionary);
    // const _dictionary = await getDoc(docRef);
    const dictionary_data = { id: docRef.id, ...dictionary };
    dispatch(createDictionary(dictionary_data));
  };
};

export const deleteDictionaryFB = (dictionary_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "dictionary", dictionary_id);
    await deleteDoc(docRef);

    const _dictionary_list = getState().dictionary.list;
    const dictionary_index = _dictionary_list.findIndex((b) => {
      return b.id === dictionary_id;
    });

    dispatch(deleteDictionary(dictionary_index));
  };
};

//  Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dictionary/LOAD": {
      return { list: action.dictionary_list };
    }

    case "dictionary/CREATE": {
      const new_list = [...state.list, action.dictionary];
      return { list: new_list };
    }

    case "dictionary/DELETE": {
      const new_dictionary_list = state.list.filter((l, idx) => {
        return parseInt(action.dictionary_index) !== idx;
      });
      return { list: new_dictionary_list };
    }

    default:
      return state;
  }
}
