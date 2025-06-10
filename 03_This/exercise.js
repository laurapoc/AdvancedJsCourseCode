class UserProfile {
  constructor(username, email, birthdate) {
    // Use setters to validate and assign initial values
    this.username = username;
    this.email = email;
    this.birthdate = birthdate;
  }

  // Getter for username
  get username() {
    return this._username;
  }

  // Setter for username with validation
  set username(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Invalid username.");
    }
    this._username = value;
  }

  // Getter for email
  get email() {
    return this._email;
  }

  // Setter for email with validation
  set email(value) {
    if (typeof value !== "string" || !value.includes("@")) {
      throw new Error("Invalid email.");
    }
    this._email = value;
  }

  // Getter for birthdate
  get birthdate() {
    return this._birthdate;
  }

  // Setter for birthdate with validation
  set birthdate(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid birthdate.");
    }

    // Check the format: YYYY-MM-DD
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(value)) {
      throw new Error("Invalid birthdate.");
    }

    // Check if the date is valid
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid birthdate.");
    }

    // Optional: ensure the date string matches the ISO string (should be same as input)
    const isoString = date.toISOString().split("T")[0];
    if (isoString !== value) {
      throw new Error("Invalid birthdate.");
    }

    this._birthdate = value;
  }

  // Optional: method to get user info as string
  get userInfo() {
    return `${this.username}, email: ${this.email}, born on ${this.birthdate}`;
  }
}

const user = new UserProfile("name", "testUser@test.lt", "1999-01-01");
console.log(user.userInfo);
user.userInfo = "userName, newTest@test.lt, 1995-05-05";
console.log(user.userInfo);
user.birthdate = "1995-05-05"; // Valid date
console.log(user.birthdate); // Should print "1995-05-05"
console.log(user.userInfo);