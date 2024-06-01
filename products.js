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
 const chocChipCookieDough = new Cookie("Cookie Dough", "$12.04", 'images/cookiedough.png', "images/cookiedoughcirc.png", "Our delicious OG chocolate chip cookie batter infused with movie theater chocolate chip cookie dough! ",12.04, 0);
 const chocChip = new Cookie("OG Triple Chocolate Chip", "$12.04", '/images/chocchip.png', "/images/chocchipcirc.png", "Keep it ORIGINAL! Our deluctable chocolate chip cookies stuffed with enormous amounts of semi-sweet chocolate chips. ", 12.04, 1);
 const smores = new Cookie("Cookie and Smores", "$12.04", '/images/smores.png', "/images/smorescirc.png", "This cookie saves all the hussle and bussle of making a smore and packs TEN TIMES the flavor!", 12.04, 2);
 const whiteChocChip = new Cookie("OG White Chocolate Chip", "$12.04", '/images/whitechoc.png', "/images/whitechoccirc.png", "White chocolate chip morsels infused into a flavorful cookie!", 12.04, 3);
 const mm = new Cookie("M&M", "$12.04", '/images/mm.png', "/images/mm.png", "Simple, sweet and to the point. M&M candies packed into our OG cookie batter.", 12.04, 4);
 const whiteReesesPB = new Cookie("White Chocolate PB Cup", "$12.04", "/images/reeses.png", "/images/reesescirc.png", "Reeses Peanut Butter Cups combined with our white chocolate chip cookie batter!", 12.04, 5);
 const oreo = new Cookie("Cookie, Oreo and Cream", "$12.04", '/images/oreo.png', "/images/oreo.png", "No, youre not dreaming. We placed an Oreo cookie and Hershey Cookies and Cream chocolate bar into OUR cookie!", 12.04, 6);

 
exports.productList = [smores, chocChipCookieDough, whiteReesesPB, oreo, chocChip, mm, whiteChocChip];
exports.storeItems =  new Map([
    [0, chocChipCookieDough ],
    [1, chocChip],
    [2, smores ],
    [3, whiteChocChip ],
    [4,  mm ],
    [5, whiteReesesPB ],
    [6, oreo]
 ]);
