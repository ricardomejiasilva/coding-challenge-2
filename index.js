let set1 = [
  ['Kournikova', 'Ann', 'F', 'F', '6-3-1975', 'Red'],
  ['Hingis', 'Martina', 'M', 'F', '4-2-1979', 'Green'],
  ['Seles', 'Monica', 'H', 'F', '12-2-1973', 'Black'],
];

let set2 = [
  ['Abercrombie', 'Neil', 'Male', 'Tan', '2/13/1943'],
  ['Bishop', 'Timothy', 'Male', 'Yellow', '4/23/1967'],
  ['Kelly', 'Sue', 'Female', 'Pink', '7/12/1959'],
];

let set3 = [
  ['Smith', 'Steve', 'D', 'M', 'Red', '3-3-1985'],
  ['Bonk', 'Radek', 'S', 'M', 'Green', '6-3-1975'],
  ['Bouillon', 'Francis', 'G', 'M', 'Blue', '6-3-1975'],
];

// moves the arrays to the right position
function moveArr(arr, from, to) {
  var element = arr[from];
  arr.splice(from, 1);
  arr.splice(to, 0, element);
}

set1.map(arr => arr.splice(2, 1));
set1.map(arr => arr.splice(2, 1, 'Female'));
set1.forEach(arr => (arr[3] = arr[3].replace(/-/g, '/')));

set2.map(arr => moveArr(arr, 3, 4));

set3.map(arr => arr.splice(2, 1));
set3.map(arr => arr.splice(2, 1, 'Male'));
set3.map(arr => moveArr(arr, 3, 4));
set3.forEach(arr => (arr[3] = arr[3].replace(/-/g, '/')));

//organized arrays with right positions, descriptions and date formats 
let sets = set1.concat(set2, set3);


// sort by date
setsDateLast = sets.sort((a, b) => {
  aDate = new Date(a[3]);
  bDate = new Date(b[3]);
  if (aDate === bDate) {
    return a[0] < b[0] ? -1 : 1
  }
  return aDate - bDate;
})

// sort by last name (needs fix)
setsDateLast.map(arr => {
  if (arr[3] === '6-3-1975') {
    sets.sort(function (a, b) {
      if (a[0] < b[0]) {
        return -1;
      }
      if (a[0] > b[0]) {
        return 1;
      }
      return 0;
    });
  }
});
console.log(setsDateLast);