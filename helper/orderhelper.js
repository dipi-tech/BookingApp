var Order = require('../models/orders');

async function saveOrder(orderInfo) {
    let val = new Order;
    try {
        val = await Order.forge(orderInfo).save();
        console.log(val.toJSON());
    } catch (e) {
        console.log(`Failed to save data: ${e}`);
    } finally {
        return val;
    }
}

async function updateOrder(orderInfo) {
    let val = new Order;
    try {
        val = await Order.forge({ orderId: orderInfo.orderId })
            .fetch({ require: true })
            console.log(val.toJSON())
        val = await val.save({
            quantity: orderInfo.quantity || val.get('quantity'),
            trackingStatus: orderInfo.trackingStatus,
            isPaid: orderInfo.isPaid || val.get('isPaid')
        })
} catch (e) {
        console.log(`Failed to save data: ${e}`);
    } finally {
        return val;
    }
}

module.exports = {
    saveOrder,
    updateOrder
}