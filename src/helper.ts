export var arrayShuffle = function (array: any[]) {
  for (var i = 0, length = array.length, swap = 0, temp = ""; i < length; i++) {
    swap = Math.floor(Math.random() * (i + 1));
    temp = array[swap];
    array[swap] = array[i];
    array[i] = temp;
  }
  return array;
};

export var percentageChance = function (values: any[], chances: number[]) {
  for (var i = 0, pool = []; i < chances.length; i++) {
    for (var i2 = 0; i2 < chances[i]; i2++) {
      pool.push(i);
    }
  }
  return values[arrayShuffle(pool)["0"]];
};

export function randomPick(array: any[]){
    return array[Math.floor(Math.random() * array.length)];
}