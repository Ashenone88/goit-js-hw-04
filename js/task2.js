"use strict";
console.log("ЗАДАНИЕ 2");

const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  }
};

const invokeInventoryOperation = function(object, inventoryAction, itemName) {
  console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
  const action = inventoryAction.bind(object, itemName);
  action();
};

invokeInventoryOperation(inventory, inventory.add, "Medkit");
// Invoking add opeartion on Medkit

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryOperation(inventory, inventory.remove, "Gas mask");
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']
