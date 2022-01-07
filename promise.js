// promise
// 비동기 수행 때 콜백 함수 대신에 사용 가능

// 1. Producer
// 새로운 Promise가 만들어 질 때 전달한 콜백함수가 바로 실행됨
const promise = new Promise((resolve, reject) => {
  // promise 안에서는 무거운 일을 주로 함(비동기적이기 때문)
  // 네트워크에서 데이터를 받거나, 파일을 읽는 등의 동작
  console.log("doing something...");
  setTimeout(() => {
    resolve("success");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  // finally -> 성공, 실패와 관계없이 무조건 마지막에 호출됨
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("닭"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 계란`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 요리 끝`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));
// 밑 코드와 동일한 기능 (catch 제외)

getHen() //
  .then(getEgg)
  .catch((error) => {
    return "빵";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
