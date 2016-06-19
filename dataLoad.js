var db  = db.getSiblingDB("demo");
//here we go ahead to insert the plansts  in the collection
//first we go ahead to drop the collection of plants and then re-insert
db.plants.drop();
db.plants.insert([
  {name:"Rose",soil:"humus",light:"direct",fl:"perrinial",fr:null,flPh:6,foPh:7,infect:["white aphids", "red aphids", "mealy bugs", "root rot"],fert:["fish emulsion", "urea", "rose feed"]},
  {name:"China Rose",soil:"red",light:"direct",fl:"perrinial",fr:null,flPh:7,foPh:7.4,infect:["white aphids", "root rot"],fert:["fish emulsion", "vinegar"]},
  {name:"Holy Basil",soil:"humus",light:"direct",fl:null,fr:null,flPh:null,foPh:null,infect:[],fert:["humus", "fish emulsion"]},
  {name:"Jasmine",soil:"humus",light:"direct",fl:"annual",fr:null,flPh:5.5,foPh:7.2,infect:["white aphids", "mealy bugs", "root rot"],fert:["fish emulsion"]},
  {name:"Gardenia",soil:"humus",light:"direct",fl:"annual",fr:null,flPh:5.5,foPh:7.4,infect:["white aphids", "red aphids", "mealy bugs", "root rot"],fert:["fish emulsion", "vinegar"]},
  {name:"Lemon grass",soil:"red",light:"direct",fl:null,fr:null,flPh:null,foPh:7,infect:[],fert:["worm fertilizer"]},
  {name:"Hydrangea", soil:"black", light:"shade", fl:"annual",fr:null,flPh:7,foPh:7.5,infect:["white aphids", "root rot"], fert:["fish emulsion", "urea", "vinegar"]},
  {name:"Pointsetta", soil:"black", light:"shade", fl:null,fr:null,flPh:null,foPh:7,infect:["root rot"], fert:["fish emulsion"]},
  {name:"Balsameena", soil:"red", light:"shade", fl:"perrinial",fr:null,flPh:7.5,foPh:7,infect:["root rot"], fert:[]},
  {name:"Ficus bonsai", soil:"cocopeat", light:"shade", fl:null,fr:null,flPh:null,foPh:7,infect:["root rot"], fert:[]},
  {name:"Aloe", soil:"black", light:"direct", fl:null,fr:null,flPh:null,foPh:7.3,infect:[], fert:[]},
  {name:"Spider lily", soil:"red", light:"direct", fl:"annual",fr:null,flPh:6,foPh:7,infect:["white aphids","mealy bugs", "root rot"], fert:["fish emulsion", "vinegar"]}
])
printjson({message:"plants have been inserted"});
//this is where we load the skills
db.skills.drop();
db.skills.insert([
{ _id:NumberInt(1),
  name: "AngularJS",
  group:{name:"Web development", genre :"Technical"},
  trngs:["ng-awesome", "Introduciton to AngularJS"],
  certis:["AngularJS-L100"],
},
{ _id:NumberInt(2),
  name: "HTML5CSS3JS",
  group:{name:"Web development", genre :"Technical"},
  trngs:["html5 primer", "Starting web development"],
  certis:[],
},
{ _id:NumberInt(3),
  name: "JavaScript jumpstart",
  group:{name:"Web development", genre :"Technical"},
  trngs:["js jumpstart", "Getting started with JS"],
  certis:[],
},
{ _id:NumberInt(4),
  name: "MVC4 ASP.net",
  group:{name:"Web development", genre :"Technical"},
  trngs:["mvc4 asp", "starting ASP.net"],
  certis:[],
},
{ _id:NumberInt(5),
  name: "MVC5 ASP.net",
  group:{name:"Web development", genre :"Technical"},
  trngs:["mvc4 asp with net core", "starting ASP.net core"],
  certis:[],
},
{ _id:NumberInt(6),
  name: "MongoDB",
  group:{name:"database", genre :"Technical"},
  trngs:["nosql with Mongo", "MongoDB"],
  certis:[],
},
{ _id:NumberInt(7),
  name: "Django",
  group:{name:"web services", genre :"Technical"},
  trngs:["starting with django", "Django jumpstart"],
  certis:[],
},
{ _id:NumberInt(8),
  name: "Python on Linux",
  group:{name:"linux based development", genre :"Technical"},
  trngs:["flying with python", "Python jumpstart"],
  certis:[],
},
{ _id:NumberInt(9),
  name: "WebPy",
  group:{name:"Linux based web development", genre :"Technical"},
  trngs:["web services with python"],
  certis:[],
},
{ _id:NumberInt(10),
  name: "SQL database",
  group:{name:"database", genre :"Technical"},
  trngs:["PL SQL", "T SQL"],
  certis:[],
}
]);
printjson({message:"skills have been inserted"});

db.tweets.drop();

db.tweets.insert([
{content:"Well, Now deal with them , I told you so", user :"@saddamh", stamp: Date("2016-06-16T12:00:00"),nation:"Iraq", continent:"middleeast",tags:["#waroniraq", "#isismenace", "#westgoback", "#404wmd"]},
{content:"Let them spread, I would wan to get free oil", user :"@erdogantayyip", stamp: Date("2016-06-20T12:00:00"),nation:"turkey", continent:"middleeast",tags:["#waroniraq", "#isismenace", "#westgoback", "murkeyturkey", "#wedontcare"]},
{content:"We are not opening our borders, cringe as much as you like", user :"@crownprince", stamp: Date("2016-06-16T12:00:00"),nation:"Saudi Arabia", continent:"middleeast",tags:["#middleeastfalling", "#oilislife", "#balckgold", "#petrodollar"]},
{content:"Sanctions are off, live life king size ", user :"@khamnei", stamp: Date("2016-06-16T12:00:00"),nation:"Iran", continent:"middleeast",tags:["#downwithkafirs", "#isismenace", "#hejbollahcanfixit"]},
{content:"Get back to gold standards, Yelp! life in danger", user :"@mugadaffi", stamp: Date("2016-06-30T12:00:00"),nation:"Libya", continent:"africa",tags:["#libyaisinnocent", "#notdemented", "#diepetrodollar"]},
{content:"Time for some entertainment, **grabs some popcorn", user :"@benjnetanhenyu", stamp: Date("2016-06-16T12:00:00"),nation:"Israel", continent:"middleeast",tags:["#israelisrelaxed", "#downwithpalestine", "#bokoyouaredead"]},
{content:"We are next, need to close borders", user :"@basharasad", stamp: Date("2016-07-01T12:00:00"),nation:"Syria", continent:"middleeast",tags:[ "#atcrosshairs", "#rekt"]},
{content:"Tell me if you need some arsenal toys of mine :)", user :"@kimjung", stamp: Date("2016-07-02T12:00:00"),nation:"North Korea", continent:"asia",tags:["#worldaprt", "#wehateusouthies", "#nptmyfoot"]},
{content:"never nuke twice .. no more energy", user :"@sabbe", stamp: Date("2016-06-16T12:00:00"),nation:"Japan", continent:"asia",tags:["#horrorsofwar", "#wewouldbeback", "#horribleavgage"]},
{content:"Largest democracy, friends to all, all for friends", user :"@namo", stamp: Date("2016-06-16T12:00:00"),nation:"India", continent:"asia",tags:["#nobeef", "#development", "#onroadNSG"]},
{content:"Dump those federal bonds, stash more gold", user :"@jixiping", stamp: Date("2016-06-16T12:00:00"),nation:"China", continent:"asia",tags:["#norespite", "#longliveleft", "#stateownedcapt"]},
{content:"Never wake the bear , We dont warn twice !", user :"@vputin", stamp: Date("2016-06-16T12:00:00"),nation:"Russia", continent:"eurasia",tags:["#king", "#nochallenge", "#getmevodka"]},
{content:"Leave us alone, we aint getting in that shit again", user :"@merkelA", stamp: Date("2016-06-16T12:00:00"),nation:"Germany", continent:"middleeast",tags:["#gobacksalafist", "#disinterested", "#getusaspotinbric"]},
{content:"Brexit, I shall leave it to you now, debt cannot sustain", user :"@dcameron", stamp: Date("2016-06-16T12:00:00"),nation:"Iraq", continent:"middleeast",tags:["#nocolonisation", "#largedebt"]},
])
printjson({message:"tweets have been inserted"});

db.users.drop();

db.users.insert([
  {_id:NumberInt(41993), email:"niranjan_awati", alias:"Niranjan Awati", loc :"Pune", roles:["Developer", "Manager", "Admin", "User"]},
  {_id:NumberInt(106456), email:"ruchira_agarwal", alias:"Ruchira Agarwal", loc :"Pune", roles:["Developer", "Manager", "Admin", "User"]},
  {_id:NumberInt(52698), email:"victor_s", alias:"A Victor Sundararaj", loc :"Bangalore", roles:["Manager", "Admin", "User"]},
  {_id:NumberInt(9037), email:"neena_mc", alias:"Neena MC", loc :"Bangalore", roles:["Manager", "Admin", "User"]}
]);
printjson({message:"users have been inserted"});
