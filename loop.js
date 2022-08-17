const userInfoObj = {
  name: 'ryosuke',
  age: 25,
  height: 172
};

for (key in userInfoObj) {
  console.log(userInfoObj[key]);
}

// ryosuke
// 25
// 172

const userInfoArray = ['ryosuke', 25, 172];

for (val of userInfoArray) {
  console.log(val);
}

// ryosuke
// 25
// 172

for (i = 0; i < 2; i++) {
  console.log(userInfoArray[i]);
}

// ryosuke
// 25

userInfoArray.forEach((val) => {
  console.log(val);
}

// ryosuke
// 25
// 172
