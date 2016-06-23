/*
demo    : showcasing the performance of mongo  using the indexes and without them
author  : kneerunjun
created : 23 JUN 2016
*/

var db = db.getSiblingDB("demo");
if(db ==null){
  print("We are unable to connect to the database at this time ");
}
else {
    if(db.getCollectionNames().filter(function(el){return el == "shopItems"}).length >0){
        //the collection seems to be already existing , we need to dorp the same
        db.shopItems.drop();
        print("found the collection already existing, so dropped it ")
    }
    //now you can add the shoptItems afresh to set this up
    db.shopItems.insert([
      { "_id" : 1, "item" : "f1", type: "food", quantity: NumberInt(500) },
      { "_id" : 2, "item" : "f2", type: "food", quantity: NumberInt(100) },
      { "_id" : 3, "item" : "p1", type: "paper", quantity: NumberInt(200) },
      { "_id" : 4, "item" : "p2", type: "paper", quantity: NumberInt(150) },
      { "_id" : 5, "item" : "f3", type: "food", quantity: NumberInt(300) },
      { "_id" : 6, "item" : "t1", type: "toys", quantity: NumberInt(500) },
      { "_id" : 7, "item" : "a1", type: "apparel", quantity: NumberInt(250) },
      { "_id" : 8, "item" : "a2", type: "apparel", quantity: NumberInt(400) },
      { "_id" : 9, "item" : "t2", type: "toys", quantity: NumberInt(50) },
      { "_id" : 10, "item" : "f4", type: "food", quantity: NumberInt(75) },
    ]); //and hopefully w would have almost about 10 items in thedatabase
    //see carefully they dont have any index
    print("just inserted #count# items  in the collection".replace(/#count#/, db.shopItems.count()));
    //now we fire a query on the database with range filteron the quantity
    var q = db.shopItems.find({quantity: {$gt:NumberInt(150), $lte:NumberInt(500)}}).explain();
    printjson(q);
    //this time we go ahead to apply some index on the quantity field.
    db.shopItems.createIndex({quantity:1});
    //and this would cause drastic change in the query exaplnation
    print("After the index was applied, you have a better performing query");
    q = db.shopItems.find({quantity: {$gt:NumberInt(150), $lte:NumberInt(500)}}).explain();
    printjson(q);
    
    print("end of script  .. goodbye!");
  /*  q.forEach(function(el){
      printjson(el);
    })*/
}
