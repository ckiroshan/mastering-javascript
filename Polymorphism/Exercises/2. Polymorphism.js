console.log("<=== Ex Polymorphism ===>");

/**
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

  this.render = function () {
    return `<select>${this.items.map((item) => `<option>${item}</option>`).join("")}
    </select>`;
  };
}

HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

const e = new HTMLElement();
const s = new HTMLSelectElement();

// Image Element
function HTMLImageElement(src) {
  this.src = src;

  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}

HTMLImageElement.prototype = new HTMLElement();
HTMLImageElement.prototype.constructor = HTMLImageElement;
