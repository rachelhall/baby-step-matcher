const userInput = document.querySelector('.userInput');
const returnStatement = document.querySelector('.returnStatement')
const modal = document.querySelector('.modal');

function handleSubmit(e) {
  e.preventDefault();
   const first = e.currentTarget.first.value;
   const last = e.currentTarget.last.value;
   const step = e.currentTarget.step.value;
   const content = getBabyFriends(step, data, first, last);
   updateParagraph(content);
   openModal();
   
 }

 // Event listeners
 userInput.addEventListener('submit', handleSubmit);
 modal.addEventListener('click', handleClickOutside);


 const data = [
   ["Dave", "Ramsey", "2"],
   ["Jacob", "Allen", "3"],
   ["Margaret", "Kloess", "2"],
   ["Corrine", "Rochotte", "4"],
   ["Jamie", "Cordair", "3"],
   ["Beth", "McCart", "2"]
 ];
 
 function fullName(friend) {
   return ` ${friend[0]} ${friend[1]}`;
 }
 
 function getNamesString(friends) {
   const fullNames = friends.map(f => fullName(f));
   return fullNames.join(" ");
 }

 function getNamesString2(friends) {
  const fullNames = friends.map(f => fullName(f));
  console.log(fullNames);
  const finalName = fullNames.pop();
  return `${fullNames} and ${finalName}`


}
 
 function getBabyFriends(step, friends, first, last) {
   const closeFriends = friends.filter(f => f[2] === step);
   return formatSentance(step, closeFriends, first, last);
 }
 
 function formatSentance(step, friends, first, last) {
   let message = ``;
   const numOfFriends = friends.length;
   const formattedFriends = getNamesString(friends);
   const formattedFriends2 = getNamesString2(friends);
 
   if (numOfFriends === 1) {
     message = `🎉Congratulations <span>${first} ${last}</span>🎉<br> ${formattedFriends} is also in Baby Step #${step}.`;
   } else if (numOfFriends === 1) {
     message = `🎉Congratulations <span>${first} ${last}</span>🎉 <br>${formattedFriends} are also in Baby Step #${step}.`;
   } else if (numOfFriends > 1) {
    message = `🎉Congratulations <span>${first} ${last}</span>🎉 <br>${formattedFriends2} are also in Baby Step #${step}.`;
  } else {
     message = `None of your friends are on Baby Step #${step}`;
   }
   return message;
 }
 

 function updateParagraph(content) {
  returnStatement.innerHTML = `${content}`
}

// Handles Modal
function openModal() {

  if (modal.matches('.open')) {
    console.info('Modal already open');
    return;
  }
  modal.classList.add('open');

  // Event listeners to be bound when we open the modal:
  window.addEventListener('keyup', handleKeyUp);
}

function closeModal() {
  modal.classList.remove('open');
  // TODO: add event listeners for clicks and keyboard..
  window.removeEventListener('keyup', handleKeyUp);
}

function handleClickOutside(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}
function handleKeyUp(event) {
  if (event.key === 'Escape') return closeModal();
}


 


