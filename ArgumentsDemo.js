// Create on May 28, 2015 Thu.
// See http://coffeescript.org/

var awardMedals, contenders, gold, rest, silver,
  __slice = [].slice;

gold = silver = rest = "unknown";

awardMedals = function() {
  var first, others, second;                             // same as arguments... in coffeescript
  first = arguments[0], second = arguments[1], others = 3 <= arguments.length ? __slice.call(arguments, 2) : []; 
  gold = first;
  silver = second;
  return rest = others;
};

contenders = ["Michael Phelps", "Liu Xiang", "Yao Ming", "Allyson Felix", "Shawn Johnson", "Roman Sebrle", "Guo Jingjing", "Tyson Gay", "Asafa Powell", "Usain Bolt"];

awardMedals.apply(null, contenders);  // awardMedals contenders...  in coffeescript

console.log("Gold: " + gold);			//Gold: Michael Phelps

console.log("Silver: " + silver); 		//Silver: Liu Xiang

console.log("The Field: " + rest);  
// The Field: Yao Ming,Allyson Felix,Shawn Johnson,Roman Sebrle,Guo Jingjing,Tyson Gay,Asafa Powell,Usain Bolt