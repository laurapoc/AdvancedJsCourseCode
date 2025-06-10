class UserProfile {
  constructor(username, email, birthdate) {
    this.username = this.userName(username);
    this.email = this.validateEmail(email);
    this.birthdate = this.validateBirthdate(birthdate);
  }

  get userInfo() {
    return `${this.username}, email: ${this.email}, born on ${this.birthdate}`;
  }

  set userInfo(newInfo) {
    const [username, email, birthdate] = newInfo.split(", ");
    this.userName(username)
    this.username = this.userName(username);
    this.email = this.validateEmail(email);
    this.birthdate = this.validateBirthdate(birthdate);
  }

  userName(newName) {
    if (!newName || newName === " " || typeof newName !== "string") {
      throw new Error("Invalid username.");
    }
    return newName;
  }

  validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      throw new Error("Invalid email.");
    }
    return email;
  }

  validateBirthdate(birthdate) {
    const date = new Date(birthdate);
    const date_regex = /^\d{4}-\d{2}-\d{2}$/;
    console.log(date_regex.test(birthdate));
    if (!date_regex.test(birthdate) || isNaN(date.getTime())) {
      throw new Error("Invalid birthdate.");
    }

    return date.toISOString().split("T")[0]; // Return in YYYY-MM-DD format
  }
}

const user = new UserProfile("testUser", "testUser@test.lt", "1999-01-01");
console.log(user.userInfo);
user.userInfo = "userName, newTest@test.lt, 1995-05-05";
console.log(user.userInfo);
