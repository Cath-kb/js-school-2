/**
 * Реализовать такие методы работы над массивами
 */

/**
 * метод создает новый массив элементов, состоящий из элементов массива array за вычетом элементов массива itemsToExclude
 */
function difference(arr, itemsToExclude) {
  return arr.filter(el => !itemsToExclude.includes(el))
}

difference([2, 1, 5], [2, 3])
// => [1, 5]

/**
 * метод принимает массив обьектов array и ключ value по которому нужно эти обьекты сгруппировать
 */
function groupBy(array, value) {
  return array.reduce((groups, el) => {
    if (!(value in el)) return groups
    const key = el[value]
    if (groups.hasOwnProperty(key)) {
      groups[key].push(el)
    } else {
      groups[key] = [el]
    }
    return groups
  }, {})
}

groupBy([{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}, { gender: 'female', name: 'Jane'}], 'gender');

/**
 * => {
 *  male: [{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}],
 *  female: [{ gender: 'female', name: 'Jane'}]
 * }
 */

/**
 *  если метод принимет многомерный массив, он должен "сплюснуть" его на одно измерение
 */
function flatten(array) {
  return array.reduce((arr, el) => arr.concat(el), [])
}

flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]

flatten([1, 2, 3, 4, 5]);
// => [1, 2, 3, 4, 5]

flatten([1, [2, 3], 4, 5]);
// => [1, 2, 3, 4, 5]

/**
 * метод должен убрать все повторяющиеся элементы из массива
 */
function uniq(array) {
  return array.reduce((result, el) => {
    if (!result.includes(el)) {
      result.push(el)
    }
    return result
  }, [])
}

uniq([2, 1, 2])
// => [2, 1]

/**
 *
 * метод должен собирать элементы массива в группы с заданным размером
 */
function chunk(array, size) {
  let temp = []
  return array.reduce((result, el, i) => {
    temp.push(el)
    if (temp.length === size || i === array.length-1) {
      result.push(temp)
      temp = []
    }
    return result
  }, [])
}

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
