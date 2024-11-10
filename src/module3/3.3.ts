// type guerds
{
  type Alphaneumeric = string | number;
  const add = (num1: Alphaneumeric, num2: Alphaneumeric): Alphaneumeric => {
    // typeof operator
    if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 + num2;
    } else {
      return num1.toString() + num2.toString();
    }
  };
  console.log(add(4, "fs"));

  // in guard

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`Hello im ${user.name}.My role is ${user.role}`);
    } else {
      console.log(`Hello im ${user.name}`);
    }
  };
  const user1: NormalUser = {
    name: "Sweet",
  };

  const user2: AdminUser = {
    name: "Abdullah Al Mamun Sweet",
    role: "admin",
  };
  getUser(user1);
  getUser(user2);
}
