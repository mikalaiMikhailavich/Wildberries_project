// import { dataProvider } from "../..";
import { createInputComponent } from "../createElements/index";
import { createCardItemComponent } from "../shopping/cardItem";
import { shoppingContainer } from "../shopping/shopping";

export const filterCards = createInputComponent({
  className: "header__search",
  placeholder: "Поиск...",
  // onChange: () => searchTodoCards(filterCards.value),
});

function searchTodoCards(searchQuery) {
  let searchResults = dataProvider
    .read()
    .filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  shoppingContainer.innerHTML = null;
  searchResults.forEach((card) => createCardItemComponent(card));
}
