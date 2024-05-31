const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const { storeItems } = require('../products');

exports.checkoutCtrlFunction = async (req, res) => {
    let total = 0;
    req.body.cookieItems.map(cookieItem => {
         total += cookieItem.qty;
     });
     if (total === 6 || total === 12){
         try{
             const session = await stripe.checkout.sessions.create({
                 payment_method_types: ['card'],
                 mode: 'payment',
                 line_items: req.body.cookieItems.map(cookieItem => {
                     const productItem = storeItems.get(cookieItem.id);
                     return{
                         price_data: {
                             currency: 'usd',
                             product_data: {
                                 name: productItem.name
                             },
                             unit_amount: productItem.priceInCents
                         },
                         quantity: cookieItem.qty
                     }
                     
                 }),
                 shipping_address_collection:{
                     allowed_countries: ['US']
                 },
                 success_url: `${process.env.SUCCESS_URL}`,
                 cancel_url: `${process.env.SERVER_URL}`,
             })
             res.json({ url: session.url });
         }catch (e){
             res.status(500).json({ error: e.message });
         }
     }
}

exports.cartSuccessFunction = (req, res) =>{
    res.render('confirmPurch');
}