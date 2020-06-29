const randomChar = () => {
  let randomRater;
  const randomC = Math.floor((Math.random() * 5));
  switch (randomC) {
    case 0:
      randomRater = 'A'
      break;
    case 1:
      randomRater = 'B'
      break;
    case 2:
      randomRater = 'C'
      break;
    case 3:
      randomRater = 'D'
      break;
    case 4:
      randomRater = 'E'
      break;
  };
  return randomRater;
}

const randomCorrect = () => {

  let randomCorrect3or5;
  const randomC = Math.floor((Math.random() * 3));
  switch (randomC) {
    case 0:
      randomCorrect3or5 = 'Low'
      break;
    case 1:
      randomCorrect3or5 = 'Average'
      break;
    case 2:
      randomCorrect3or5 = 'High'
      break;
  };
  return randomCorrect3or5;
}

const randomRaterAnswer = () => {
  let randomRaterAnswer3or5;
  const randomC = Math.floor((Math.random() * 5));
  switch (randomC) {
    case 0:
      randomRaterAnswer3or5 = 'Bad'
      break;
    case 1:
      randomRaterAnswer3or5 = 'Ok'
      break;
    case 2:
      randomRaterAnswer3or5 = 'Intermediate'
      break;
    case 3:
      randomRaterAnswer3or5 = 'Great'
      break;
    case 4:
      randomRaterAnswer3or5 = 'Exceptional'
      break;
  };
  return randomRaterAnswer3or5;
}

function randomDate(start, end) {
  let d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  let dateString = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
  return dateString;
}

const databaseFunc = () => {
  let arr = [];
  for (let i = 1; i <= 10000; i++) {
    const database = {
      date: randomDate(new Date(2005, 9, 1), new Date(2005, 9, 30)),
      rater: randomChar(),
      correct3: randomCorrect(),
      correct5: randomCorrect(),
      rater3: randomRaterAnswer(),
      rater5: randomRaterAnswer(),
    };
    arr.push(database);

  }
  return arr;
}

console.log(JSON.stringify(databaseFunc()));
