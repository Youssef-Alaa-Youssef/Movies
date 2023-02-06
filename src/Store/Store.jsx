import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import addFavurite from "../Reducer/Reducer";
// import reducer from "./Reducer"

const mystore = createStore(addFavurite, composeWithDevTools());

export default mystore;
