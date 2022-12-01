export function createDataProvider() {
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
  };
}
