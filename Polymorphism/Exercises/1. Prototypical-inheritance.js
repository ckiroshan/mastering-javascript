console.log("<=== Ex Prototypical inheritance ===>");

/**
 * Design 2 objects
 *  HTMLElement -> Prototype Object
 *    function click() - console log only
 *    on HTMLElement.prototype -> function focus() - console log only
 *  HTMLSelectElement -> A dropdown list
 *    Can pass an arry of values or leave empty.
 *    function addItem() - console log only
 *    function removeItem() - console log only
 * They have prototypical inheritance to each other.
 */

function HTMLElement() {
  this.click = function () {
    console.log("clicked!");
  };
}

HTMLElement.prototype.focus = function () {
  console.log("focused!");
};

function HTMLSelectElement(items = []) {
  this.items = items;

  this.addItem = function () {
    this.items.push(this.item);
  };
  this.removeItem = function () {
    this.items.splice(this.items.indexOf(item), 1);
    // splice -> deletes an item. indexOf -> at given index.
  };
}

HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

const e = new HTMLElement();
const s = new HTMLSelectElement();

