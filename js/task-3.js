function gamePlayTime(name) {
  const profile = {
    userName: name.userName,
    playTime: name.playTime,

    changeUsername(newName) {
      this.userName = newName;
    },

    updatePlayTime(hours) {
      this.playTime += hours;
    },

    getInfo() {
      return `${this.userName} has ${this.playTime} active hours!`;
    },
  };
  return profile;
}

const userProfile = gamePlayTime({ userName: "Jacob", playTime: 300 });

console.log(userProfile.getInfo()); // "Jacob has 300 active hours!"

userProfile.changeUsername("Marco");
console.log(userProfile.getInfo()); // "Marco has 300 active hours!"

userProfile.updatePlayTime(20);
console.log(userProfile.getInfo()); // "Marco has 320 active hours!"

// Метод changeUsername(newName) повинен приймати рядок (нове ім’я) в параметр newName та змінювати значення властивості username на нове. Нічого не повертає.
// Метод updatePlayTime(hours) повинен приймати число (кількість годин) у параметр hours та збільшити на нього значення властивості playTime. Нічого не повертає.
// Метод getInfo() має повертати рядок формату <Username> has <amount> active hours!, де <Username> — це ім’я профілю, а <amount> — кількість ігрових годин.
