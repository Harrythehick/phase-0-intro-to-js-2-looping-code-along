const names = ["Charlie", "Samip", "Ali"];
const event = "birthday";
const messages = [];
function writeCards(names, event){
    for (let i = 0; i < names.length; i++){
       messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    console.log(messages);
    return messages;
    }

function countDown() {let i = 10;
while (i >= 0) {
    console.log(i--);
}}
