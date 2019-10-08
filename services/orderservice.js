var orderHelper = require('../helper/orderhelper')

async function addOrderToCard(orderInfo) {
    console.log(orderInfo)
    try {
        return await orderHelper.saveOrder(orderInfo)
    } catch (e) {
        console.log(`Error @ registerNewUser: ${e}`);
        throw e
    }
}

async function placeORUpdateOrder(orderInfo) {
    console.log(orderInfo)
    try {
        return await orderHelper.updateOrder(orderInfo)
    } catch (e) {
        console.log(`Error @ registerNewUser: ${e}`);
        throw e
    }
}



module.exports = {
    addOrderToCard,
    placeORUpdateOrder
}