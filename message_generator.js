//first create a  function that will select a random value from zero up to but not including  that number
function random_generator(num){

return Math.floor(Math.random()*num)


}

//Create the object with three array properties. 
const repo =  {
ai: ["Grok","ChatGPT","Gemini","Claude"],
adjactive:["good","bad","amazing","horrible","great","garbage","fantastic"],
purpose:["coding","writing","answering",'video genration',"creating memes"]



};

const message_generator = (repo) => {
let words = [];
for(let i in repo){
let random_index = random_generator(repo[i].length);

let word = repo[i][random_index];

words.push(word);


}

console.log(`${words[0]} is ${words[1]} at ${words[2]}.`);
};

message_generator(repo);