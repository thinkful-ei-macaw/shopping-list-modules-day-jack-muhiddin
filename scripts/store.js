import item from './item.js';

const items = [];
let hideCheckedItems = false;

function findByID(id) {
  return items.find(item => item.id === id);
}

function addItem(name) {
  try {
    item.validateName(name);
    const newItem = item.create(name);
    this.items.push(newItem);
  } catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked(id) {
  const currentItem = this.findByID(id);
  currentItem.checked = !currentItem.checked;
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    const currentItem = this.findByID(id);
    currentItem.name = newName;
  } catch(error) {
    console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
  const currentItem = this.findByID(id);
  const itemIndex = this.items.indexOf(currentItem);
  this.items.splice(itemIndex, 1);
}

export default {
  items,
  hideCheckedItems,
  findByID,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};

