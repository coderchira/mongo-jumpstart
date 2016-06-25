/*
demo    : demonstrating the concept of compund indexes
author  : kneerunjun
created : 23 JUN 2016
*/

var db = db.getSiblingDB("demo");
var flushCollection = function(){
  //this takes care of the clean up activity
  db.domainEarnings.drop();
  //just to be sure that we have dropped the collection once the task is done
  printjson(db.getCollectionNames());
}
if(db ==null){
  print("We are unable to connect to the database at this time ");
}

else {
  var col = "domainEarnings"
  //this is where we go ahead to add the data into the database
  if(db.getCollectionNames().filter(function(el){return el == col}).length >0){
      //the collection seems to be already existing , we need to dorp the same
      db.domainEarnings.drop();
      print("found the collection already existing, so dropped it ");
      print("we can restore the data again.. ");
  }
  db.createCollection(col);
  db.domainEarnings.insert([{"id":"wix.com","first_name":"Mary","last_name":"Rivera","email":"mrivera0@techcrunch.com","ip_address":"169.19.113.176","sales":738,"ethnic":"Seminole"},
{"id":"state.gov","first_name":"Carol","last_name":"Banks","email":"cbanks1@unc.edu","ip_address":"149.80.138.156","sales":769,"ethnic":"Bolivian"},
{"id":"angelfire.com","first_name":"Ann","last_name":"Jackson","email":"ajackson2@yolasite.com","ip_address":"75.68.7.74","sales":863,"ethnic":"Micronesian"},
{"id":"newyorker.com","first_name":"Paula","last_name":"Ramos","email":"pramos3@examiner.com","ip_address":"227.105.102.163","sales":531,"ethnic":"Asian"},
{"id":"webs.com","first_name":"Mary","last_name":"Ramos","email":"mramos4@naver.com","ip_address":"10.161.0.112","sales":591,"ethnic":"Honduran"},
{"id":"cafepress.com","first_name":"Matthew","last_name":"White","email":"mwhite5@ted.com","ip_address":"224.75.253.180","sales":998,"ethnic":"Chickasaw"},
{"id":"ed.gov","first_name":"Sandra","last_name":"Ray","email":"sray6@buzzfeed.com","ip_address":"162.168.95.166","sales":912,"ethnic":"Cheyenne"},
{"id":"scientificamerican.com","first_name":"Eugene","last_name":"Cook","email":"ecook7@cyberchimps.com","ip_address":"152.231.252.152","sales":746,"ethnic":"Panamanian"},
{"id":"bbc.co.uk","first_name":"Kelly","last_name":"Richardson","email":"krichardson8@economist.com","ip_address":"219.58.76.235","sales":736,"ethnic":"Cree"},
{"id":"tripod.com","first_name":"Ruth","last_name":"Young","email":"ryoung9@marketwatch.com","ip_address":"163.24.250.91","sales":863,"ethnic":"Micronesian"},
{"id":"phpbb.com","first_name":"Judy","last_name":"Hamilton","email":"jhamiltona@elegantthemes.com","ip_address":"213.145.225.138","sales":673,"ethnic":"Cambodian"},
{"id":"fc2.com","first_name":"Justin","last_name":"Hamilton","email":"jhamiltonb@yellowpages.com","ip_address":"91.207.188.228","sales":975,"ethnic":"Sri Lankan"},
{"id":"so-net.ne.jp","first_name":"Mildred","last_name":"Washington","email":"mwashingtonc@nytimes.com","ip_address":"187.83.57.135","sales":684,"ethnic":"Yakama"},
{"id":"1688.com","first_name":"Samuel","last_name":"James","email":"sjamesd@earthlink.net","ip_address":"229.135.43.159","sales":874,"ethnic":"Cree"},
{"id":"bizjournals.com","first_name":"Jason","last_name":"Moreno","email":"jmorenoe@youtu.be","ip_address":"199.130.207.67","sales":920,"ethnic":"Shoshone"},
{"id":"washington.edu","first_name":"David","last_name":"Snyder","email":"dsnyderf@myspace.com","ip_address":"66.0.222.134","sales":618,"ethnic":"Indonesian"},
{"id":"bravesites.com","first_name":"Barbara","last_name":"Taylor","email":"btaylorg@cpanel.net","ip_address":"48.66.251.107","sales":793,"ethnic":"Paraguayan"},
{"id":"360.cn","first_name":"Shirley","last_name":"Richards","email":"srichardsh@archive.org","ip_address":"51.113.252.31","sales":789,"ethnic":"Cree"},
{"id":"pcworld.com","first_name":"Melissa","last_name":"Hunt","email":"mhunti@marketwatch.com","ip_address":"80.202.113.142","sales":558,"ethnic":"Cheyenne"},
{"id":"globo.com","first_name":"Stephanie","last_name":"Meyer","email":"smeyerj@un.org","ip_address":"28.122.34.113","sales":790,"ethnic":"Choctaw"},
{"id":"about.com","first_name":"Mark","last_name":"Carroll","email":"mcarrollk@a8.net","ip_address":"189.213.115.37","sales":585,"ethnic":"Crow"},
{"id":"wordpress.com","first_name":"Walter","last_name":"Ramos","email":"wramosl@abc.net.au","ip_address":"73.198.156.49","sales":616,"ethnic":"Menominee"},
{"id":"last.fm","first_name":"Cheryl","last_name":"George","email":"cgeorgem@imdb.com","ip_address":"17.115.133.160","sales":694,"ethnic":"Alaskan Athabascan"},
{"id":"themeforest.net","first_name":"Karen","last_name":"Johnston","email":"kjohnstonn@eventbrite.com","ip_address":"93.169.97.127","sales":812,"ethnic":"Yaqui"},
{"id":"ted.com","first_name":"Lillian","last_name":"Reid","email":"lreido@google.co.jp","ip_address":"161.139.225.129","sales":568,"ethnic":"Cambodian"},
{"id":"bizjournals.com","first_name":"Gloria","last_name":"Greene","email":"ggreenep@mlb.com","ip_address":"35.227.112.209","sales":918,"ethnic":"Japanese"},
{"id":"bbc.co.uk","first_name":"Jack","last_name":"Dixon","email":"jdixonq@ihg.com","ip_address":"136.47.243.165","sales":550,"ethnic":"Guatemalan"},
{"id":"networksolutions.com","first_name":"Rachel","last_name":"Garrett","email":"rgarrettr@mail.ru","ip_address":"138.176.164.193","sales":545,"ethnic":"Taiwanese"},
{"id":"plala.or.jp","first_name":"Dorothy","last_name":"Andrews","email":"dandrewss@sogou.com","ip_address":"131.124.26.129","sales":830,"ethnic":"Latin American Indian"},
{"id":"ifeng.com","first_name":"Johnny","last_name":"Walker","email":"jwalkert@infoseek.co.jp","ip_address":"9.70.47.59","sales":869,"ethnic":"Filipino"},
{"id":"merriam-webster.com","first_name":"James","last_name":"Schmidt","email":"jschmidtu@nps.gov","ip_address":"71.84.192.84","sales":552,"ethnic":"Lumbee"},
{"id":"cargocollective.com","first_name":"Juan","last_name":"Morgan","email":"jmorganv@pagesperso-orange.fr","ip_address":"102.79.0.220","sales":953,"ethnic":"Spaniard"},
{"id":"ning.com","first_name":"Angela","last_name":"James","email":"ajamesw@cyberchimps.com","ip_address":"140.6.222.179","sales":601,"ethnic":"Menominee"},
{"id":"myspace.com","first_name":"Chris","last_name":"Romero","email":"cromerox@ox.ac.uk","ip_address":"11.156.134.114","sales":926,"ethnic":"Japanese"},
{"id":"aboutads.info","first_name":"Philip","last_name":"Hawkins","email":"phawkinsy@npr.org","ip_address":"106.133.44.252","sales":794,"ethnic":"Black or African American"},
{"id":"com.com","first_name":"Paul","last_name":"Stevens","email":"pstevensz@cbc.ca","ip_address":"118.131.254.95","sales":732,"ethnic":"Dominican (Dominican Republic)"},
{"id":"digg.com","first_name":"Edward","last_name":"Gutierrez","email":"egutierrez10@oakley.com","ip_address":"195.197.12.32","sales":561,"ethnic":"Iroquois"},
{"id":"deviantart.com","first_name":"Adam","last_name":"Mcdonald","email":"amcdonald11@elpais.com","ip_address":"103.105.53.5","sales":926,"ethnic":"Seminole"},
{"id":"businessweek.com","first_name":"Nancy","last_name":"Moore","email":"nmoore12@tamu.edu","ip_address":"135.232.136.30","sales":978,"ethnic":"Mexican"},
{"id":"github.com","first_name":"Paula","last_name":"Franklin","email":"pfranklin13@cnet.com","ip_address":"57.204.161.75","sales":660,"ethnic":"Laotian"},
{"id":"histats.com","first_name":"Irene","last_name":"Diaz","email":"idiaz14@ox.ac.uk","ip_address":"215.105.76.253","sales":764,"ethnic":"Chippewa"},
{"id":"dion.ne.jp","first_name":"Barbara","last_name":"Rivera","email":"brivera15@dyndns.org","ip_address":"215.186.29.212","sales":810,"ethnic":"Tohono O'Odham"},
{"id":"newsvine.com","first_name":"Gregory","last_name":"Griffin","email":"ggriffin16@devhub.com","ip_address":"180.94.119.118","sales":884,"ethnic":"Sioux"},
{"id":"storify.com","first_name":"Robert","last_name":"Ruiz","email":"rruiz17@apache.org","ip_address":"97.155.145.202","sales":622,"ethnic":"Vietnamese"},
{"id":"chronoengine.com","first_name":"Paul","last_name":"Walker","email":"pwalker18@chicagotribune.com","ip_address":"255.74.221.208","sales":564,"ethnic":"Guamanian"},
{"id":"hatena.ne.jp","first_name":"Stephanie","last_name":"Matthews","email":"smatthews19@exblog.jp","ip_address":"23.174.7.187","sales":996,"ethnic":"Chamorro"},
{"id":"about.com","first_name":"Angela","last_name":"James","email":"ajames1a@bloomberg.com","ip_address":"63.101.238.96","sales":981,"ethnic":"Micronesian"},
{"id":"topsy.com","first_name":"Shirley","last_name":"West","email":"swest1b@va.gov","ip_address":"121.63.139.201","sales":923,"ethnic":"Native Hawaiian and Other Pacific Islander (NHPI)"},
{"id":"51.la","first_name":"Ralph","last_name":"Lewis","email":"rlewis1c@sbwire.com","ip_address":"148.179.117.65","sales":856,"ethnic":"Mexican"},
{"id":"columbia.edu","first_name":"Anthony","last_name":"Hernandez","email":"ahernandez1d@ycombinator.com","ip_address":"185.210.85.112","sales":746,"ethnic":"Latin American Indian"},
{"id":"clickbank.net","first_name":"Bruce","last_name":"Price","email":"bprice1e@princeton.edu","ip_address":"209.158.216.42","sales":630,"ethnic":"Micronesian"},
{"id":"biblegateway.com","first_name":"Kenneth","last_name":"Greene","email":"kgreene1f@csmonitor.com","ip_address":"189.174.60.28","sales":518,"ethnic":"Menominee"},
{"id":"answers.com","first_name":"David","last_name":"Wright","email":"dwright1g@goodreads.com","ip_address":"63.252.23.244","sales":879,"ethnic":"Samoan"},
{"id":"issuu.com","first_name":"Ruth","last_name":"Franklin","email":"rfranklin1h@zdnet.com","ip_address":"197.134.73.59","sales":773,"ethnic":"Samoan"},
{"id":"bigcartel.com","first_name":"Jacqueline","last_name":"Lane","email":"jlane1i@liveinternet.ru","ip_address":"194.190.185.104","sales":707,"ethnic":"Salvadoran"},
{"id":"vimeo.com","first_name":"Sharon","last_name":"Wilson","email":"swilson1j@utexas.edu","ip_address":"19.3.148.120","sales":795,"ethnic":"Spaniard"},
{"id":"latimes.com","first_name":"Johnny","last_name":"Robinson","email":"jrobinson1k@illinois.edu","ip_address":"12.7.11.47","sales":985,"ethnic":"Honduran"},
{"id":"deviantart.com","first_name":"Brian","last_name":"Wagner","email":"bwagner1l@buzzfeed.com","ip_address":"220.7.13.18","sales":541,"ethnic":"Honduran"},
{"id":"si.edu","first_name":"Ann","last_name":"Hernandez","email":"ahernandez1m@oakley.com","ip_address":"199.18.173.85","sales":993,"ethnic":"Alaskan Athabascan"},
{"id":"google.co.uk","first_name":"Kathy","last_name":"Larson","email":"klarson1n@mapy.cz","ip_address":"117.116.104.80","sales":895,"ethnic":"Sioux"},
{"id":"unc.edu","first_name":"Charles","last_name":"Weaver","email":"cweaver1o@people.com.cn","ip_address":"126.150.108.54","sales":694,"ethnic":"Costa Rican"},
{"id":"bbb.org","first_name":"Lawrence","last_name":"Moore","email":"lmoore1p@youtube.com","ip_address":"238.57.28.153","sales":523,"ethnic":"Malaysian"},
{"id":"cdbaby.com","first_name":"Melissa","last_name":"Porter","email":"mporter1q@blogspot.com","ip_address":"80.188.97.251","sales":794,"ethnic":"Melanesian"},
{"id":"irs.gov","first_name":"Joe","last_name":"Perry","email":"jperry1r@vinaora.com","ip_address":"44.209.129.48","sales":616,"ethnic":"Colombian"},
{"id":"squidoo.com","first_name":"Andrew","last_name":"Weaver","email":"aweaver1s@latimes.com","ip_address":"113.2.45.117","sales":728,"ethnic":"Yakama"},
{"id":"hatena.ne.jp","first_name":"Mary","last_name":"Arnold","email":"marnold1t@netscape.com","ip_address":"143.178.114.219","sales":512,"ethnic":"Argentinian"},
{"id":"storify.com","first_name":"Andrew","last_name":"Bradley","email":"abradley1u@europa.eu","ip_address":"216.165.15.46","sales":670,"ethnic":"Creek"},
{"id":"archive.org","first_name":"Barbara","last_name":"Meyer","email":"bmeyer1v@hubpages.com","ip_address":"237.229.71.197","sales":616,"ethnic":"Potawatomi"},
{"id":"tuttocitta.it","first_name":"Peter","last_name":"Boyd","email":"pboyd1w@goo.ne.jp","ip_address":"223.75.83.202","sales":863,"ethnic":"Tohono O'Odham"},
{"id":"fda.gov","first_name":"Brenda","last_name":"Reid","email":"breid1x@mozilla.com","ip_address":"135.97.106.101","sales":745,"ethnic":"Micronesian"},
{"id":"dropbox.com","first_name":"Antonio","last_name":"Hansen","email":"ahansen1y@nymag.com","ip_address":"53.105.66.180","sales":881,"ethnic":"Ecuadorian"},
{"id":"addthis.com","first_name":"Denise","last_name":"Lewis","email":"dlewis1z@typepad.com","ip_address":"114.230.168.43","sales":978,"ethnic":"Chilean"},
{"id":"elegantthemes.com","first_name":"Christine","last_name":"Thompson","email":"cthompson20@mit.edu","ip_address":"88.154.161.199","sales":592,"ethnic":"Hmong"},
{"id":"g.co","first_name":"Gary","last_name":"Snyder","email":"gsnyder21@nba.com","ip_address":"191.97.247.128","sales":679,"ethnic":"Asian"},
{"id":"archive.org","first_name":"Carol","last_name":"Duncan","email":"cduncan22@cisco.com","ip_address":"232.236.108.75","sales":643,"ethnic":"Asian Indian"},
{"id":"addthis.com","first_name":"Benjamin","last_name":"Rice","email":"brice23@elegantthemes.com","ip_address":"66.64.96.143","sales":837,"ethnic":"Colville"},
{"id":"toplist.cz","first_name":"Sharon","last_name":"Peterson","email":"speterson24@g.co","ip_address":"200.0.203.120","sales":547,"ethnic":"Guamanian"},
{"id":"mtv.com","first_name":"Joe","last_name":"Davis","email":"jdavis25@nbcnews.com","ip_address":"139.37.116.7","sales":799,"ethnic":"Panamanian"},
{"id":"goodreads.com","first_name":"Virginia","last_name":"Bailey","email":"vbailey26@unesco.org","ip_address":"150.123.254.238","sales":614,"ethnic":"Malaysian"},
{"id":"ning.com","first_name":"Anne","last_name":"Chavez","email":"achavez27@theatlantic.com","ip_address":"247.105.245.155","sales":839,"ethnic":"Argentinian"},
{"id":"privacy.gov.au","first_name":"Shirley","last_name":"Boyd","email":"sboyd28@meetup.com","ip_address":"177.169.168.203","sales":778,"ethnic":"Potawatomi"},
{"id":"netvibes.com","first_name":"Teresa","last_name":"Richards","email":"trichards29@google.de","ip_address":"31.77.183.24","sales":896,"ethnic":"Houma"},
{"id":"twitpic.com","first_name":"Ann","last_name":"King","email":"aking2a@edublogs.org","ip_address":"208.4.115.79","sales":697,"ethnic":"Alaska Native"},
{"id":"youtu.be","first_name":"Paul","last_name":"Austin","email":"paustin2b@wikimedia.org","ip_address":"231.106.48.216","sales":986,"ethnic":"Melanesian"},
{"id":"eventbrite.com","first_name":"Clarence","last_name":"Lane","email":"clane2c@fc2.com","ip_address":"117.143.142.224","sales":578,"ethnic":"Native Hawaiian"},
{"id":"pbs.org","first_name":"Ernest","last_name":"Sims","email":"esims2d@jimdo.com","ip_address":"155.163.59.192","sales":982,"ethnic":"Central American"},
{"id":"spiegel.de","first_name":"Diane","last_name":"Bishop","email":"dbishop2e@uol.com.br","ip_address":"242.92.22.57","sales":874,"ethnic":"Chamorro"},
{"id":"ehow.com","first_name":"Robert","last_name":"Wilson","email":"rwilson2f@alexa.com","ip_address":"24.46.185.49","sales":944,"ethnic":"Chamorro"},
{"id":"nps.gov","first_name":"Ernest","last_name":"Hunt","email":"ehunt2g@technorati.com","ip_address":"58.79.205.253","sales":861,"ethnic":"Yuman"},
{"id":"telegraph.co.uk","first_name":"Jane","last_name":"Boyd","email":"jboyd2h@bloglines.com","ip_address":"88.14.155.114","sales":796,"ethnic":"Thai"},
{"id":"shareasale.com","first_name":"Peter","last_name":"Warren","email":"pwarren2i@ca.gov","ip_address":"240.218.169.59","sales":971,"ethnic":"Chippewa"},
{"id":"house.gov","first_name":"Diana","last_name":"Sims","email":"dsims2j@economist.com","ip_address":"15.122.239.132","sales":725,"ethnic":"Apache"},
{"id":"blinklist.com","first_name":"Jimmy","last_name":"Frazier","email":"jfrazier2k@pbs.org","ip_address":"158.42.130.101","sales":564,"ethnic":"Ottawa"},
{"id":"ustream.tv","first_name":"Jeffrey","last_name":"Smith","email":"jsmith2l@sina.com.cn","ip_address":"94.28.163.161","sales":587,"ethnic":"Tohono O'Odham"},
{"id":"addtoany.com","first_name":"Michelle","last_name":"Thompson","email":"mthompson2m@godaddy.com","ip_address":"45.139.5.165","sales":602,"ethnic":"Crow"},
{"id":"mapquest.com","first_name":"Paul","last_name":"Carter","email":"pcarter2n@goodreads.com","ip_address":"34.114.21.230","sales":851,"ethnic":"Cheyenne"},
{"id":"pcworld.com","first_name":"Annie","last_name":"Robertson","email":"arobertson2o@examiner.com","ip_address":"109.173.113.243","sales":533,"ethnic":"Sioux"},
{"id":"multiply.com","first_name":"Gerald","last_name":"Baker","email":"gbaker2p@ted.com","ip_address":"206.81.94.141","sales":512,"ethnic":"Cree"},
{"id":"zimbio.com","first_name":"Gloria","last_name":"Scott","email":"gscott2q@ucoz.com","ip_address":"146.214.220.222","sales":851,"ethnic":"Ute"},
{"id":"scientificamerican.com","first_name":"Carlos","last_name":"Austin","email":"caustin2r@purevolume.com","ip_address":"37.167.155.237","sales":965,"ethnic":"Asian Indian"}]);

  //just checking if we have the entries in the database safely
  print("our database now has about #count# entries to query for".replace(/#count#/, db.domainEarnings.count()));

  //lets define the compund index on gender and sales.
  db.domainEarnings.createIndex({ethnic:1, sales:1},name="myindex");
  var query = db.domainEarnings.find({ethnic:"Cree", sales:{$gt:700, $lte:1000}});
  var result  = query.map(function(el){return el.id}).forEach(function(el){
    printjson(el);
  });
  printjson(query.explain());

  db.domainEarnings.dropIndex("myindex");
  db.domainEarnings.createIndex({sales:1,ethnic:1},name="myindex");
  print("and now with the index order reversed in the sequence..");
  printjson(query.explain());
  //we would then need to clear the collection
  flushCollection();
}
