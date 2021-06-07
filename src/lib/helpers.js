import _ from "lodash"

import { EthereumCoinGrey } from "components/Icons/CryptoGrey";
import { BinanceCoinGrey } from "components/Icons/CryptoGrey";
import { BitcoinCoinGrey } from "components/Icons/CryptoGrey";
import { BitcoinColorIcon } from "components/Icons/Crypto";
import { TronColorIcon } from "components/Icons/Crypto";
import { TronCoinGrey } from "components/Icons/CryptoGrey";
import { LitecoinCoinGrey } from "components/Icons/CryptoGrey";

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

  return indexes.map(index => data(index)).filter(item => !_.isEmpty(item.Component))
};

/**
 * Crypto currencies
 */
export const cryptoCurrency = (currency) => {
  return _.chain([
    { currency: 'btc', name: "Bitcoin", CryptoColored: BitcoinColorIcon, CryptoGrey: BitcoinCoinGrey },
    { currency: 'bnb', name: "Binance BNB", CryptoColored: BitcoinColorIcon, CryptoGrey: BinanceCoinGrey },
    { currency: 'eth', name: "Ethereum", CryptoColored: BitcoinColorIcon, CryptoGrey: EthereumCoinGrey },
    { currency: 'trx', name: "Tron", CryptoColored: TronColorIcon, CryptoGrey: TronCoinGrey },
    { currency: 'ltc', name: "Litecoin", CryptoColored: LitecoinCoinGrey, CryptoGrey: LitecoinCoinGrey },
  ])
    .map(({ currency, ...props }) => ({
      [currency]: {
        currency: String(currency).toUpperCase(),
        ...props
      }
    }))
    .reduce((p, n) => ({ ...p, ...n }), {})
    .get(String(currency).toLocaleLowerCase(), {})
    .value()
}

/**
 * Crypto chart colors
 */
export const CRYPTO_CHART_COLORS = ["#6233CF", "#FFB993", "#71F3FC", "#FEECA8", "#F48A5B"];