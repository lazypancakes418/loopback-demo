'use strict';

module.exports = function(Product) {
  const validQuantity = quantity => quantity > 0;
  /**
 * Buy this Product
 * @param {number} quantity Number of products to buy
 * @param {Function(Error, object)} callback
 */

  Product.prototype.buy = function(quantity, callback) {
    if (!validQuantity(quantity)){
      return callback(`Invalid Quantity ${quantity}`);
    }
    var results = {
      status: `you bought ${quantity} product`,
    };
    // TODO
    callback(null, results);
  };
};
