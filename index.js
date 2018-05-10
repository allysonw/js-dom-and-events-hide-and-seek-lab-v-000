function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let listItems = document.querySelectorAll('.ranked-list li');

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = parseInt(listItems[i].innerHTML) + n;
  }
}

function deepestChild() {
  // let children = document.querySelectorAll('#grand-node div');
  let current = document.querySelector('#grand-node')

  while (current.children.length > 0) {
    current = current.querySelector('div')
  }

  return current;
}
