const getSum = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string')
    return false;

  if (str1.replace(/\d/g, '') !== '' || str2.replace(/\d/g, '') !== '')
    return false;

  let num1 = (str1 === '') ? 0 : parseInt(str1);
  let num2 = (str2 === '') ? 0 : parseInt(str2);

  return (num1 + num2).toString();
};

const getQuantityPostsByAuthor = (listOfPosts, authorName) => {
  let qtPosts = 0;
  let qtComments = 0;

  for (let i = 0; i < listOfPosts.length; i++) {
    const post = listOfPosts[i];

    if (!post.hasOwnProperty('author'))
      continue;

    if (post.author === authorName)
      qtPosts ++;

    if (!post.hasOwnProperty('comments'))
      continue;

    const comments = post.comments;
    
    for (let k = 0; k < comments.length; k++) {
      const comment = post.comments[k];
      if (comment.author === authorName)
        qtComments ++;
    }
  }

  return 'Post:' + qtPosts.toString() + ',comments:' + qtComments.toString();
};

const tickets = (people) => {
  let ticketPrice = 25;
  let balanceArr = [];

  if (people.length === 0)
    return 'YES';

  if (people[0] % ticketPrice !== 0 || people[0] > ticketPrice)
    return 'NO';
  else
    balanceArr[0] = ticketPrice;
  
  for (let i = 1; i < people.length; i++) {
    if (people[i] % ticketPrice !== 0)
      return 'NO';

    if (people[i] === ticketPrice) {
      balanceArr[i] = ticketPrice;
      continue;
    }

    let change = people[i] - ticketPrice;
    for (let k = 0; k < balanceArr.length; k++) {
      if (change === balanceArr[k]) {
        change = 0;
        balanceArr[k] = 0;
        break;
      } else if (change - balanceArr[k] > 0) {
        change = change - balanceArr[k];
      }
    } 
    
    balanceArr[i] = people[i];

    if (change !== 0)
      return 'NO'; 
    
  }

  return 'YES';
};


module.exports = {getSum, getQuantityPostsByAuthor, tickets};
