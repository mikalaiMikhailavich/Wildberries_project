import { createAppComponent } from "./app";
import { getFromAPI, initStore, saveInStorage } from "./services/dataApi";

window.addEventListener("beforeunload", () => saveInStorage());

initStore();

getFromAPI();

createAppComponent();
