/*
created to demonstrate saving and inserting of documents in Mongo
kneerunjun
25-06-2016
*/


var db = db.getSiblingDB("demo"); //thats the database we are gonna use
//if the rerequired collection is not present then go ahead to create collection
var remakeCollection = function(){
//this is where we test if the collection is present
  if(db.getCollectionNames().filter(function(el){return el=="ipAddrs"}).length ==0){
     db.createCollection("ipAddrs");
    //this is the collection that would host all the ip addresses
  }
  else {
    //clearing off all the documents in the collection
    db.ipAddrs.remove({});
  }
}
//this woudl create the collection if it was not there, else would flush the collection and get you a fresh one
remakeCollection ();
db.ipAddrs.insert([{
  "_id": "https://shop-pro.jp",
  "ip": "27.201.57.169"
}, {
  "_id": "http://yale.edu",
  "ip": "80.154.115.213"
}, {
  "_id": "https://foxnews.com",
  "ip": "68.128.73.240"
}, {
  "_id": "https://about.me",
  "ip": "9.76.109.43"
}, {
  "_id": "http://sitemeter.com",
  "ip": "71.68.98.183"
}]); //this would get us some dummy sites entered  in the database.

print("Populated the database, we now have #count# addresses in the database".replace(/#count#/, db.ipAddrs.count()));
//see here its the same site that we are inserting and recollect that we have unique index on it
var result =db.ipAddrs.insert({
  "_id": "https://shop-pro.jp",
  "ip": "27.201.57.345"
});
printjson(result); //this would throw an error  ..
var shopPro  = db.ipAddrs.findOne({_id:"https://shop-pro.jp"});
printjson(shopPro);

//but here with the save operation things could get a bit different
result =db.ipAddrs.save({
  "_id": "https://shop-pro.jp",
  "ip": "27.201.57.345"
});
printjson(result)
shopPro  = db.ipAddrs.findOne({_id:"https://shop-pro.jp"});
printjson(shopPro);
