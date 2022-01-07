// 1. asyne

// 네트워크 통신에 10초가 걸리는 프로그램으로 가정
async function fetchUser() {
  return "here!";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// function getApple() {
//     return delay(3000)
//     .then(() => "사과");
// }

async function getApple() {
  await delay(2000);
  return "사과";
}

async function getBanana() {
  await delay(1000);
  return "바나나";
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]) //
    .then((fruits) => {
      fruits.join(" + ");
    });
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
