/*
for the demo of aggregation commands on mongo
kneerunjun, 26-JUN-2016
*/

var db  = db.getSiblingDB("demo");

var remakeCollection = function(){
  if(db.getCollectionNames().filter(function(el){return el =="servers"}).length >0){
    db.servers.remove({});
  }
  else {
      db.createCollection("servers");
  }
}
remakeCollection(); //this woudl create or flush the existing createCollection
//this is where we go ahead to insert the server details.
db.servers.insert(
  [{"_id":ObjectId("576f6870fc13ae1001000064"),"server":"https://purevolume.com","ip":"12.93.113.118","geo":"Poland","running":false,"load":10},
  {"_id":ObjectId("576f6870fc13ae1001000065"),"server":"https://yandex.ru","ip":"165.79.75.17","geo":"Indonesia","running":false,"load":47},
  {"_id":ObjectId("576f6870fc13ae1001000066"),"server":"http://elegantthemes.com","ip":"20.197.130.110","geo":"Moldova","running":false,"load":76},
  {"_id":ObjectId("576f6870fc13ae1001000067"),"server":"https://elegantthemes.com","ip":"104.64.252.140","geo":"Tanzania","running":false,"load":69},
  {"_id":ObjectId("576f6870fc13ae1001000068"),"server":"http://rambler.ru","ip":"108.110.199.5","geo":"Tanzania","running":true,"load":154},
  {"_id":ObjectId("576f6870fc13ae1001000069"),"server":"https://ning.com","ip":"185.232.154.65","geo":"Philippines","running":true,"load":135},
  {"_id":ObjectId("576f6870fc13ae100100006a"),"server":"https://edublogs.org","ip":"40.199.66.156","geo":"Portugal","running":false,"load":46},
  {"_id":ObjectId("576f6870fc13ae100100006b"),"server":"http://smugmug.com","ip":"200.162.55.192","geo":"Cameroon","running":true,"load":68},
  {"_id":ObjectId("576f6870fc13ae100100006c"),"server":"https://4shared.com","ip":"188.106.19.172","geo":"Ukraine","running":false,"load":21},
  {"_id":ObjectId("576f6870fc13ae100100006d"),"server":"http://deliciousdays.com","ip":"158.50.158.13","geo":"China","running":false,"load":8},
  {"_id":ObjectId("576f6870fc13ae100100006e"),"server":"http://list-manage.com","ip":"204.30.210.73","geo":"North Korea","running":false,"load":104},
  {"_id":ObjectId("576f6870fc13ae100100006f"),"server":"http://wsj.com","ip":"155.107.160.240","geo":"Iran","running":true,"load":22},
  {"_id":ObjectId("576f6870fc13ae1001000070"),"server":"https://sphinn.com","ip":"137.20.30.126","geo":"Greece","running":true,"load":98},
  {"_id":ObjectId("576f6870fc13ae1001000071"),"server":"https://jalbum.net","ip":"247.141.109.15","geo":"China","running":false,"load":11},
  {"_id":ObjectId("576f6870fc13ae1001000072"),"server":"http://google.com.hk","ip":"104.158.144.138","geo":"Portugal","running":false,"load":52},
  {"_id":ObjectId("576f6870fc13ae1001000073"),"server":"https://salon.com","ip":"10.253.37.146","geo":"Russia","running":true,"load":25},
  {"_id":ObjectId("576f6870fc13ae1001000074"),"server":"https://home.pl","ip":"56.115.51.213","geo":"Indonesia","running":false,"load":147},
  {"_id":ObjectId("576f6870fc13ae1001000075"),"server":"http://wikispaces.com","ip":"153.129.67.52","geo":"Indonesia","running":false,"load":3},
  {"_id":ObjectId("576f6870fc13ae1001000076"),"server":"https://cdc.gov","ip":"61.75.243.103","geo":"Brazil","running":false,"load":102},
  {"_id":ObjectId("576f6870fc13ae1001000077"),"server":"https://oaic.gov.au","ip":"11.51.55.218","geo":"Colombia","running":true,"load":166},
  {"_id":ObjectId("576f6870fc13ae1001000078"),"server":"https://acquirethisname.com","ip":"242.61.209.124","geo":"Brazil","running":false,"load":173},
  {"_id":ObjectId("576f6870fc13ae1001000079"),"server":"https://yelp.com","ip":"229.105.243.10","geo":"Zambia","running":false,"load":180},
  {"_id":ObjectId("576f6870fc13ae100100007a"),"server":"http://biglobe.ne.jp","ip":"190.229.87.231","geo":"China","running":false,"load":17},
  {"_id":ObjectId("576f6870fc13ae100100007b"),"server":"https://ox.ac.uk","ip":"221.46.222.63","geo":"Indonesia","running":false,"load":157},
  {"_id":ObjectId("576f6870fc13ae100100007c"),"server":"https://economist.com","ip":"15.203.200.141","geo":"China","running":false,"load":152},
  {"_id":ObjectId("576f6870fc13ae100100007d"),"server":"http://amazon.co.uk","ip":"67.66.187.192","geo":"China","running":false,"load":174},
  {"_id":ObjectId("576f6870fc13ae100100007e"),"server":"http://alibaba.com","ip":"0.175.210.132","geo":"China","running":true,"load":142},
  {"_id":ObjectId("576f6870fc13ae100100007f"),"server":"https://bigcartel.com","ip":"149.25.213.105","geo":"Peru","running":false,"load":84},
  {"_id":ObjectId("576f6870fc13ae1001000080"),"server":"http://china.com.cn","ip":"40.222.175.125","geo":"Russia","running":true,"load":118},
  {"_id":ObjectId("576f6870fc13ae1001000081"),"server":"http://vinaora.com","ip":"76.40.22.2","geo":"Thailand","running":true,"load":128},
  {"_id":ObjectId("576f6870fc13ae1001000082"),"server":"https://uol.com.br","ip":"174.230.61.172","geo":"Argentina","running":true,"load":73},
  {"_id":ObjectId("576f6870fc13ae1001000083"),"server":"https://diigo.com","ip":"220.47.205.100","geo":"Argentina","running":false,"load":191},
  {"_id":ObjectId("576f6870fc13ae1001000084"),"server":"https://uiuc.edu","ip":"21.154.86.50","geo":"Greece","running":false,"load":58},
  {"_id":ObjectId("576f6870fc13ae1001000085"),"server":"https://networkadvertising.org","ip":"72.56.67.199","geo":"Czech Republic","running":false,"load":23},
  {"_id":ObjectId("576f6870fc13ae1001000086"),"server":"https://bravesites.com","ip":"4.219.236.192","geo":"Uganda","running":false,"load":129},
  {"_id":ObjectId("576f6870fc13ae1001000087"),"server":"https://ow.ly","ip":"131.241.187.143","geo":"Brazil","running":true,"load":173},
  {"_id":ObjectId("576f6870fc13ae1001000088"),"server":"https://google.com.br","ip":"86.161.101.121","geo":"France","running":false,"load":20},
  {"_id":ObjectId("576f6870fc13ae1001000089"),"server":"https://barnesandnoble.com","ip":"61.134.204.251","geo":"China","running":false,"load":50},
  {"_id":ObjectId("576f6870fc13ae100100008a"),"server":"http://ca.gov","ip":"85.81.200.49","geo":"Pakistan","running":true,"load":50},
  {"_id":ObjectId("576f6870fc13ae100100008b"),"server":"https://thetimes.co.uk","ip":"170.235.235.123","geo":"Colombia","running":false,"load":197},
  {"_id":ObjectId("576f6870fc13ae100100008c"),"server":"http://un.org","ip":"68.23.237.148","geo":"China","running":true,"load":188},
  {"_id":ObjectId("576f6870fc13ae100100008d"),"server":"http://meetup.com","ip":"157.73.16.75","geo":"United States","running":true,"load":166},
  {"_id":ObjectId("576f6870fc13ae100100008e"),"server":"https://icq.com","ip":"205.166.201.93","geo":"Costa Rica","running":false,"load":190},
  {"_id":ObjectId("576f6870fc13ae100100008f"),"server":"https://reddit.com","ip":"27.217.243.204","geo":"Philippines","running":true,"load":14},
  {"_id":ObjectId("576f6870fc13ae1001000090"),"server":"http://fotki.com","ip":"169.37.21.105","geo":"Finland","running":true,"load":128},
  {"_id":ObjectId("576f6870fc13ae1001000091"),"server":"https://163.com","ip":"237.149.8.246","geo":"Benin","running":false,"load":112},
  {"_id":ObjectId("576f6870fc13ae1001000092"),"server":"http://independent.co.uk","ip":"187.84.75.144","geo":"Indonesia","running":true,"load":144},
  {"_id":ObjectId("576f6870fc13ae1001000093"),"server":"http://opensource.org","ip":"32.56.191.224","geo":"Poland","running":false,"load":10},
  {"_id":ObjectId("576f6870fc13ae1001000094"),"server":"http://meetup.com","ip":"176.129.216.55","geo":"Russia","running":false,"load":92},
  {"_id":ObjectId("576f6870fc13ae1001000095"),"server":"http://live.com","ip":"60.21.173.37","geo":"Chile","running":false,"load":77},
  {"_id":ObjectId("576f6870fc13ae1001000096"),"server":"http://hibu.com","ip":"13.229.93.212","geo":"Poland","running":true,"load":26},
  {"_id":ObjectId("576f6870fc13ae1001000097"),"server":"http://nifty.com","ip":"208.248.19.158","geo":"Canada","running":false,"load":134},
  {"_id":ObjectId("576f6870fc13ae1001000098"),"server":"https://loc.gov","ip":"232.109.238.74","geo":"Mexico","running":true,"load":195},
  {"_id":ObjectId("576f6870fc13ae1001000099"),"server":"http://alibaba.com","ip":"74.120.21.83","geo":"Indonesia","running":true,"load":42},
  {"_id":ObjectId("576f6870fc13ae100100009a"),"server":"http://weebly.com","ip":"135.1.27.252","geo":"Indonesia","running":true,"load":139},
  {"_id":ObjectId("576f6870fc13ae100100009b"),"server":"https://sina.com.cn","ip":"170.251.197.16","geo":"Indonesia","running":false,"load":52},
  {"_id":ObjectId("576f6870fc13ae100100009c"),"server":"https://icio.us","ip":"247.194.85.157","geo":"Central African Republic","running":false,"load":191},
  {"_id":ObjectId("576f6870fc13ae100100009d"),"server":"http://ocn.ne.jp","ip":"238.184.11.250","geo":"Philippines","running":true,"load":108},
  {"_id":ObjectId("576f6870fc13ae100100009e"),"server":"https://posterous.com","ip":"98.47.218.247","geo":"Vietnam","running":true,"load":111},
  {"_id":ObjectId("576f6870fc13ae100100009f"),"server":"https://wiley.com","ip":"206.52.126.40","geo":"South Africa","running":false,"load":57},
  {"_id":ObjectId("576f6870fc13ae10010000a0"),"server":"https://mozilla.com","ip":"166.79.238.47","geo":"Russia","running":true,"load":101},
  {"_id":ObjectId("576f6870fc13ae10010000a1"),"server":"http://cloudflare.com","ip":"26.54.99.137","geo":"China","running":true,"load":152},
  {"_id":ObjectId("576f6870fc13ae10010000a2"),"server":"http://nydailynews.com","ip":"206.16.89.27","geo":"China","running":false,"load":169},
  {"_id":ObjectId("576f6870fc13ae10010000a3"),"server":"http://ycombinator.com","ip":"169.28.232.62","geo":"Japan","running":false,"load":169},
  {"_id":ObjectId("576f6870fc13ae10010000a4"),"server":"http://npr.org","ip":"214.47.182.101","geo":"Colombia","running":true,"load":126},
  {"_id":ObjectId("576f6870fc13ae10010000a5"),"server":"http://yolasite.com","ip":"153.33.99.157","geo":"Russia","running":true,"load":38},
  {"_id":ObjectId("576f6870fc13ae10010000a6"),"server":"http://chron.com","ip":"208.254.182.114","geo":"Burundi","running":true,"load":45},
  {"_id":ObjectId("576f6870fc13ae10010000a7"),"server":"http://newsvine.com","ip":"239.208.99.68","geo":"Indonesia","running":true,"load":109},
  {"_id":ObjectId("576f6870fc13ae10010000a8"),"server":"http://list-manage.com","ip":"8.58.81.56","geo":"Sri Lanka","running":false,"load":77},
  {"_id":ObjectId("576f6870fc13ae10010000a9"),"server":"http://dmoz.org","ip":"237.228.148.232","geo":"Philippines","running":true,"load":72},
  {"_id":ObjectId("576f6870fc13ae10010000aa"),"server":"http://woothemes.com","ip":"191.176.161.68","geo":"Haiti","running":true,"load":198},
  {"_id":ObjectId("576f6870fc13ae10010000ab"),"server":"https://github.io","ip":"79.138.110.93","geo":"China","running":true,"load":141},
  {"_id":ObjectId("576f6870fc13ae10010000ac"),"server":"https://yellowbook.com","ip":"154.125.218.4","geo":"Liberia","running":false,"load":198},
  {"_id":ObjectId("576f6870fc13ae10010000ad"),"server":"https://smh.com.au","ip":"14.45.183.1","geo":"China","running":true,"load":86},
  {"_id":ObjectId("576f6870fc13ae10010000ae"),"server":"https://twitter.com","ip":"123.90.166.140","geo":"Georgia","running":false,"load":121},
  {"_id":ObjectId("576f6870fc13ae10010000af"),"server":"http://theglobeandmail.com","ip":"55.104.243.212","geo":"Russia","running":false,"load":26},
  {"_id":ObjectId("576f6870fc13ae10010000b0"),"server":"https://flickr.com","ip":"62.225.11.82","geo":"Canada","running":false,"load":106},
  {"_id":ObjectId("576f6870fc13ae10010000b1"),"server":"https://time.com","ip":"238.40.70.236","geo":"Brazil","running":true,"load":94},
  {"_id":ObjectId("576f6870fc13ae10010000b2"),"server":"https://ezinearticles.com","ip":"31.247.60.179","geo":"China","running":false,"load":122},
  {"_id":ObjectId("576f6870fc13ae10010000b3"),"server":"https://netvibes.com","ip":"177.49.222.238","geo":"Portugal","running":false,"load":49},
  {"_id":ObjectId("576f6870fc13ae10010000b4"),"server":"http://webs.com","ip":"120.19.154.49","geo":"China","running":true,"load":35},
  {"_id":ObjectId("576f6870fc13ae10010000b5"),"server":"https://sfgate.com","ip":"28.225.140.87","geo":"China","running":true,"load":54},
  {"_id":ObjectId("576f6870fc13ae10010000b6"),"server":"https://yelp.com","ip":"104.37.131.162","geo":"Palestinian Territory","running":false,"load":20},
  {"_id":ObjectId("576f6870fc13ae10010000b7"),"server":"http://state.tx.us","ip":"229.21.63.155","geo":"Russia","running":true,"load":83},
  {"_id":ObjectId("576f6870fc13ae10010000b8"),"server":"https://microsoft.com","ip":"180.171.190.225","geo":"Czech Republic","running":false,"load":119},
  {"_id":ObjectId("576f6870fc13ae10010000b9"),"server":"https://opensource.org","ip":"9.145.48.48","geo":"Philippines","running":false,"load":34},
  {"_id":ObjectId("576f6870fc13ae10010000ba"),"server":"https://indiegogo.com","ip":"108.161.181.61","geo":"China","running":false,"load":141},
  {"_id":ObjectId("576f6870fc13ae10010000bb"),"server":"https://tiny.cc","ip":"213.69.89.81","geo":"Philippines","running":false,"load":26},
  {"_id":ObjectId("576f6870fc13ae10010000bc"),"server":"http://t-online.de","ip":"210.94.85.131","geo":"Argentina","running":false,"load":11},
  {"_id":ObjectId("576f6870fc13ae10010000bd"),"server":"https://digg.com","ip":"177.165.76.49","geo":"Vietnam","running":true,"load":134},
  {"_id":ObjectId("576f6870fc13ae10010000be"),"server":"https://netvibes.com","ip":"216.106.97.146","geo":"Brazil","running":false,"load":45},
  {"_id":ObjectId("576f6870fc13ae10010000bf"),"server":"http://homestead.com","ip":"248.15.75.13","geo":"Indonesia","running":true,"load":160},
  {"_id":ObjectId("576f6870fc13ae10010000c0"),"server":"https://about.com","ip":"153.31.221.245","geo":"Russia","running":false,"load":64},
  {"_id":ObjectId("576f6870fc13ae10010000c1"),"server":"https://scribd.com","ip":"92.176.224.50","geo":"France","running":true,"load":18},
  {"_id":ObjectId("576f6870fc13ae10010000c2"),"server":"https://sciencedaily.com","ip":"58.41.200.238","geo":"China","running":false,"load":108},
  {"_id":ObjectId("576f6870fc13ae10010000c3"),"server":"http://yellowpages.com","ip":"95.211.229.201","geo":"China","running":false,"load":103},
  {"_id":ObjectId("576f6870fc13ae10010000c4"),"server":"http://hc360.com","ip":"204.244.139.230","geo":"Czech Republic","running":false,"load":83},
  {"_id":ObjectId("576f6870fc13ae10010000c5"),"server":"https://netscape.com","ip":"99.42.92.133","geo":"China","running":true,"load":164},
  {"_id":ObjectId("576f6870fc13ae10010000c6"),"server":"http://e-recht24.de","ip":"130.86.246.140","geo":"Ukraine","running":true,"load":88},
  {"_id":ObjectId("576f6870fc13ae10010000c7"),"server":"http://nytimes.com","ip":"26.218.2.49","geo":"Slovenia","running":true,"load":75}]
);

//just to confirm we have all the entries in the database.
print("We have #count# entries in the database".replace(/#count#/, db.servers.count()));


//this is to get aggregates

//this query would help us get the running servers across geo locations
var result  = db.servers.aggregate([
  {$match: {running:true}},
  {$group:{_id:"$geo", total:{$sum: "$load"}}}
]);
printjson(result.toArray());


//the same effect can also be achieved by map-reduce function

var mapReduce = db.servers.mapReduce(
  function(){
    emit(this.geo, this.load);
  },
  function(key,values){return Array.sum(values); },
  {
    query:{running: true},
    out:"runningServers"
  }
);
//it woudl actually make a collection in the database that can be accessed with a separate query
printjson(db.runningServers.find({}).toArray());
