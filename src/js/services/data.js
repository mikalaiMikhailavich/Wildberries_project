function createDataProvider() {
  let source = [];
  return {
    add: function (element) {
      source.push(element);
    },
    clear: function () {
      source = [];
    },
    read: function () {
      return [...source];
    },
    delete: function (index) {
      source.splice(index, 1);
    },
    getElement: function (id) {
      return source.find((elem) => elem.id == id);
    },
    create: function () {
      source = [];
    },
    updateFullPrice: function () {
      fullPrice = [...source].reduce((acc, item) => {
        return item.price + acc;
      }, 0);
      return fullPrice;
    },
    updateMainCounter: function () {
      return [...source].length;
    },
  };
}
export const sourceDataprovider = createDataProvider();
export const cardDataprovider = createDataProvider();
