import _ from "lodash"

export const timelineProgress = (array, current = "currently") => {

  const activeItems = (() => {
    const arrayWithIndex = array.map((item, _index) => ({ ...item, _index }))
    const index = array.map(item => item.status).indexOf(current);

    if (index + 1 === arrayWithIndex.length) return arrayWithIndex.slice(index - 2, Infinity)
    else if (index === 0) return arrayWithIndex.slice(index, 3);
    else return arrayWithIndex.slice(index - 1, index + 2);
  })().map(item => item._index)

  return array.map((item, index) => ({ ...item, active: activeItems.includes(index) }))
}

/***
 * Format price
 */
export const formatPrice = (price, currency, pattern = "sp c") => {
  const currencies = {
    usd: ["$", "USD"],
  };
  const sign = _.get(currencies, [currency, 0], "$");
  const currency_ = _.get(currencies, [currency, 1], "USD");

  return pattern
    .replace("s", sign)
    .replace("p", Number(price).toLocaleString())
    .replace("c", currency_)
}

/**
 * Get card component data
 */
export function getComponent(indexes = []) {
  if (!_.isArray(indexes)) return [];

  const data = (index) => {
    const Component = _.get(this.components, [index, "component"], null);
    const componentProps = _.get(this.components, [index, "props"], {});
    const title = _.get(this.tableHead, [index, "label"], null);
    const props = _.get(this.data, index, {});

    return { Component, title, props: { ...componentProps, ...props } };
  }

  return indexes.map(index => data(index))
};