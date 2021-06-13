let sourceElement = null;

export const addHandlerDragDrop = function () {
  const items = document.querySelectorAll('.todos__item');
  items.forEach(item => item.addEventListener('dragstart', handleDragStart));
  items.forEach(item => item.addEventListener('drop', handleDrop));
  items.forEach(item => item.addEventListener('dragover', handleDragOver));
};

const handleDragStart = function (e) {
  sourceElement = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
};

const handleDragOver = function (e) {
  e.preventDefault();
  return false;
};

const handleDrop = function (e) {
  e.stopPropagation();
  if (sourceElement !== this) {
    sourceElement.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
};
