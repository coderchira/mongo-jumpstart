/*
this assignment entails to get the candidates to be familiar with aggregation and map reduce queries onto mongo

*/

var drugs  = [{"name":"Alternaria alternata","code":"36987-1862","email":"Aquamarine","mfg_nation":"Austria","banned":true},
{"name":"Sodium Fluoride","code":"50227-0541","email":"Khaki","mfg_nation":"United States","banned":false},
{"name":"Psyllium Husk","code":"53041-650","email":"Mauv","mfg_nation":"China","banned":false},
{"name":"green bell pepper","code":"54575-437","email":"Red","mfg_nation":"China","banned":false},
{"name":"Duloxetine hydrochloride","code":"24236-845","email":"Turquoise","mfg_nation":"Malaysia","banned":false},
{"name":"Metformin Hydrochloride","code":"52125-279","email":"Aquamarine","mfg_nation":"Croatia","banned":true},
{"name":"Oatmeal","code":"58232-0049","email":"Maroon","mfg_nation":"Thailand","banned":true},
{"name":"Methocarbamol","code":"52959-167","email":"Green","mfg_nation":"Cyprus","banned":true},
{"name":"Penicillin V Potassium","code":"54569-2935","email":"Purple","mfg_nation":"Russia","banned":true},
{"name":"Heparin Sodium","code":"25021-402","email":"Maroon","mfg_nation":"Albania","banned":false},
{"name":"Ampicillin sodium and Sulbactam sodium","code":"0409-2689","email":"Fuscia","mfg_nation":"Sudan","banned":true},
{"name":"SODIUM FLUORIDE","code":"51442-546","email":"Goldenrod","mfg_nation":"Czech Republic","banned":true},
{"name":"TRICLOSAN","code":"54340-651","email":"Khaki","mfg_nation":"Vietnam","banned":true},
{"name":"Apis Phosphorus","code":"48951-1060","email":"Khaki","mfg_nation":"Russia","banned":false},
{"name":"Utah Juniper","code":"36987-2712","email":"Puce","mfg_nation":"China","banned":false},
{"name":"Chlorpheniramine Maleate","code":"66424-034","email":"Pink","mfg_nation":"Philippines","banned":false},
{"name":"Triclosan","code":"37000-607","email":"Orange","mfg_nation":"Latvia","banned":false},
{"name":"SULFUR","code":"11410-812","email":"Maroon","mfg_nation":"Tanzania","banned":false},
{"name":"lactic acid, l-","code":"60681-6300","email":"Crimson","mfg_nation":"Ethiopia","banned":true},
{"name":"Daphne indica, Eugenia jambosa, Caladium seguinum, Staphysagria, Anacardium orientale, Nux vomica, Tabaccum","code":"10578-023","email":"Goldenrod","mfg_nation":"Philippines","banned":false},
{"name":"Ropivacaine HCl","code":"52533-066","email":"Indigo","mfg_nation":"Nigeria","banned":true},
{"name":"Nonoxynol","code":"34362-0300","email":"Puce","mfg_nation":"Thailand","banned":false},
{"name":"Cows Milk","code":"36987-1180","email":"Khaki","mfg_nation":"China","banned":true},
{"name":"OCTINOXATE, OCTISALATE, ZINC OXIDE, TITANIUM DIOXIDE","code":"76344-4001","email":"Khaki","mfg_nation":"Mexico","banned":true},
{"name":"Phenylephrine Hydrochloride","code":"24385-603","email":"Maroon","mfg_nation":"Indonesia","banned":true},
{"name":"ACYCLOVIR","code":"60429-012","email":"Crimson","mfg_nation":"Philippines","banned":true},
{"name":"cocoa butter, phenylephrine HCl","code":"41163-279","email":"Mauv","mfg_nation":"Portugal","banned":false},
{"name":"Etomidate","code":"23155-160","email":"Yellow","mfg_nation":"Russia","banned":false},
{"name":"Hackberry Celtis occidentalis","code":"65044-1664","email":"Green","mfg_nation":"Japan","banned":false},
{"name":"CHLORZOXAZONE","code":"16590-478","email":"Green","mfg_nation":"France","banned":true},
{"name":"Lamotrigine","code":"65862-227","email":"Yellow","mfg_nation":"Indonesia","banned":true},
{"name":"Aluminum Zirconium Trichlorohydrex Gly","code":"37000-205","email":"Indigo","mfg_nation":"China","banned":true},
{"name":"Pyrithione Zinc","code":"64942-1233","email":"Indigo","mfg_nation":"Indonesia","banned":true},
{"name":"Heparin Sodium","code":"0069-0058","email":"Maroon","mfg_nation":"Greece","banned":true},
{"name":"calendula officinalis, lycopodium clavatum, thuja occidentalis","code":"61077-021","email":"Red","mfg_nation":"Sweden","banned":false},
{"name":"Aspirin","code":"41163-397","email":"Maroon","mfg_nation":"Brazil","banned":false},
{"name":"Arsenicum album, Baptisia tinctoria, Chloramphenicolum, Echinacea, Elais guineensis, Hydrastis canadensis, Mercuris solubilis, Myrrha, Nasturtium aquaticum, Nux vomica, Phosphorus, Phytolacca decandra, Pulsatilla, Ricinus communis, Sepia, Xanthoxylum fraxineum","code":"68703-125","email":"Green","mfg_nation":"Montenegro","banned":false},
{"name":"doxycycline hyclate","code":"0430-0114","email":"Aquamarine","mfg_nation":"Czech Republic","banned":true},
{"name":"Salicylic Acid","code":"67718-963","email":"Mauv","mfg_nation":"Jamaica","banned":true},
{"name":"polymyxin B sulfate and trimethoprim","code":"21695-335","email":"Maroon","mfg_nation":"Macedonia","banned":true},
{"name":"Desmopressin Acetate","code":"68084-084","email":"Purple","mfg_nation":"Czech Republic","banned":false},
{"name":"BETHANECHOL CHLORIDE","code":"52125-707","email":"Khaki","mfg_nation":"France","banned":false},
{"name":"Morphine Sulfate","code":"0591-3741","email":"Indigo","mfg_nation":"Indonesia","banned":true},
{"name":"TRIAMCINOLONE ACETONIDE","code":"16590-234","email":"Fuscia","mfg_nation":"Syria","banned":true},
{"name":"Famciclovir","code":"0054-0198","email":"Turquoise","mfg_nation":"Russia","banned":true},
{"name":"Glipizide","code":"53808-0259","email":"Maroon","mfg_nation":"United States","banned":false},
{"name":"Sulfamethoxazole and Trimethoprim","code":"10544-525","email":"Pink","mfg_nation":"Sweden","banned":false},
{"name":"balsalazide disodium","code":"55154-6775","email":"Purple","mfg_nation":"Russia","banned":false},
{"name":"Red Maple","code":"36987-2764","email":"Goldenrod","mfg_nation":"Indonesia","banned":false},
{"name":"Stibium 20","code":"48951-8211","email":"Violet","mfg_nation":"France","banned":true}]


/*
first write script to get the data injected into the database.
then query to get the aggregate of banned drugs across nations.
do the same query with map-reduce as well.

*/
