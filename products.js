function Cookie(name, price, image, circImg, description, priceNum, id){
    this.name = name;
    this.price = price;
    this.image = image;
    this.circImg = circImg;
    this.description = description
    this.qty = 1;
    this.priceNum = priceNum;
    this.priceInCents = priceNum * 100;
    this.id = id;
 }
 const pumpkinOreo = new Cookie("Oreo Pumpkin Spice", "$8.00", '/images/pumpkinSpice.PNG', "/images/pumpkinSpice.PNG", "Oreo Pumpkin Spice White Chocolate Chip Cookie, perfect for fall! This limited-edition cookie combines the gooey cookie texture with the flavors of pumpkin spice, white chocolate chips, and Oreo Pumpkin Spice cookies for a decadent, seasonal treat.",8.00, 0);
 const chocChip = new Cookie("OG Triple Chocolate Chip", "$8.00", '/images/chocchip.PNG', "/images/chocchipcirc.PNG", "Keep it ORIGINAL! Our deluctable chocolate chip cookies stuffed with enormous amounts of semi-sweet chocolate chips. ", 8.00, 1);
 const reesesPumpkin = new Cookie("Peanut Butter Pumpkin Head", "$8.00", '/images/reesesPumpkin.PNG', "/images/reesesPumpkin.PNG", "Cookie that has a chunky, gooey texture indulgence of Reeses Peanut Butter Cup Pumpkins and Peanut Butter M&Ms to give you that halloween vibe! This is a large, thick cookie that is soft and chewy on the inside, with the signature crisp outer edges.", 8.00, 2);
 const whiteChocChip = new Cookie("Ghost Pillsbury", "$8.00", '/images/whiteChoc.PNG', "/images/whiteChocCirc.PNG", "White Chocolate Chip Cookie Kingpin-Style Cookie infused with a Ghost Pillsbury Sugar Cookie** on top. These cookies are decadent, with a soft, gooey interior, and combining the white chocolate chip cookie with a fun seasonal twist makes it extra special!", 8.00, 3);

 
exports.productList = [pumpkinOreo, chocChip, whiteChocChip,reesesPumpkin];
exports.storeItems =  new Map([
    [0,  pumpkinOreo],
    [1, chocChip],
    [2,  reesesPumpkin],
    [3,  whiteChocChip]
 ]);