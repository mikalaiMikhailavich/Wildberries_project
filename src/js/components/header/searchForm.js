// import { dataProvider } from "../..";
import { sourceDataprovider } from "../../services/data";
import { createInputComponent } from "../createElements/index";
import { createCardItemComponent } from "../shopping/cardItem";
import { shoppingContainer } from "../shopping/shopping";

export const filterCards = createInputComponent({
  className: "header__search",
  placeholder: "Поиск...",
  // onChange: () => searchTodoCards(filterCards.value),
});

function searchTodoCards(searchQuery) {
  let searchResults = sourceDataprovider
    .read()
    .filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  shoppingContainer.innerHTML = null;
  searchResults.forEach((card) => createCardItemComponent(card));
}
filterCards.addEventListener("keyup", () => searchTodoCards(filterCards.value));
