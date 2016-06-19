//this is to show you how updating and replacement can be 2 different propositions
var db = db.getSiblingDB("demo") //thats cause we are explicitly dealing with the demo db

printjson({sys:"we are updating this user"});
var originalUser = db.users.find({_id:41993})[0];//find is only the cursor
printjson(originalUser);

db.users.update({_id:41993}, {email:"kneerunjun@outlook.com", alias:"Niranjan Vijay Awati", loc:"Pune"}, false, false);
user = db.users.find({_id:41993})[0];//find is only the cursor
printjson(user);
//this operation would actually replace the document and not change it
//syntax for updating is actually differre
printjson({sys:"did it get replaced? .. was not expected was it ?"});

db.users.update({_id:41993}, {$set:{email:"kneerunjun@gmail.com", alias:"NVA"}}, false, false);
user = db.users.find({_id:41993})[0];//find is only the cursor
printjson(user);
//now this is more like it. . youhave not replaced the document you have just changed it
//else you can note that the location is intact
printjson({sys:"now the updating is more like updating and less like replacement :)"});
//here is to setting the object the way it was before we made the changed
//and this time we obviously need replacement
db.users.update({_id:41993}, originalUser, false, false);
