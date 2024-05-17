console.log("<=== Ex Stack in ES6 ===>");

/**
 * Implement a stack using ES6 classes.
 * push() -> Adding an object to the stack
 * pop() -> Removing an object from top of the stack
 * It has properties -> count 0 items.
 * Prototype 3 methods -> peek, pop, push
 * peek is same as pop. Returns item at top but not remove it.
 * */

const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []); // Empty array
  }

  // Methods
  push(obj) {
    _items.get(this).push(obj);
  }

  pop() {
    const itemsArray = _items.get(this);
    if (itemsArray.length === 0) {
      throw new Error("Stack is empty");
    }
    return itemsArray.pop();
  }

  peek() {
    const itemsArray = _items.get(this);
    if (itemsArray.length === 0) {
      throw new Error("Stack is empty");
    }
    return itemsArray[itemsArray.length - 1];
  }

  // Getter
  get count() {
    const itemsArray = _items.get(this);
    return itemsArray.length;
  }
}

const s = new Stack();

