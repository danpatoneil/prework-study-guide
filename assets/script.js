var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

function selectTopic(topic) {
  if (topic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (topic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (topic === 'Git') {
    console.log("Let's study Git!");
  } else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }
}
function listTopics() {
  for (const topic of topics) {
    selectTopic(topic);
  }
}
listTopics();