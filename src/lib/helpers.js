export const timelineProgress = (array, current = "currently") => {

  const activeItems = (() => {
    const arrayWithIndex = array.map((item, __index) => ({ ...item, __index }))
    const index = array.map(item => item.status).indexOf(current);

    if (index + 1 === arrayWithIndex.length) return arrayWithIndex.slice(index - 2, Infinity)
    else if (index === 0) return arrayWithIndex.slice(index, 3);
    else return arrayWithIndex.slice(index - 1, index + 2);
  })().map(item => item.__index)

  return array.map((item, index) => ({ ...item, active: activeItems.includes(index) }))
}