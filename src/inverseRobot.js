'use strict';

/**
 * Situs inversus
 * Transposition of internal organs is a variant of internal anatomy, when
 * the organs are located in a mirror image.
 * Something similar happened to our robot Kolli. His keys became values,
 * and values became keys. Help to repair the robot. Create a 'inverseRobot'
 * function that takes 'robot' as a parameter and returns a new object in which
 * keys will change places with values.
 *
 * If any of the object values are repeated, return 'null'.
 *
 * Example:
 *
 * const kolli = { Kolli: 'name', 123: 'chipVer', 3: 'wheels' };
 * const robert = { Robert: 'name', 123: 'chipVer', 113: 'chipVer' };
 * inverseRobot(robert) === null
 * inverseRobot(kolli) === { name: 'Kolli', chipVer: '123', wheels: '3' }
 *
 *
 * @param {object} robot
 *
 * @return {object}
 */
function inverseRobot(robot) {
  // Итак, задача стоит следующая:
  // поменять местами ключи обьекта и значания объекта, причем если свойства
  // объекта будут повторяться, нужно будет вернуть null/
  // Пойдем через массивы.

  const robotKeys = Object.values(robot);
  const robotValues = Object.keys(robot);
  let newRobot = {};

  // Для начала определим, повторяются ли ключи, и если да, то по условию задачи
  // мы должны вернуть NULL

  for (let i = 0; i < robotKeys.length - 1; i++) {
    if (robotKeys[i] === robotKeys[i + 1]) {
      newRobot = null;

      return newRobot;
      // то есть, если условие верно, мы выходим из функции
      // со значением newRobot = null;
    }
  }

  for (let i = 0; i < robotKeys.length; i++) {
    const key = robotKeys[i];

    newRobot[key] = robotValues[i];
  }

  return newRobot;
}

module.exports = inverseRobot;
