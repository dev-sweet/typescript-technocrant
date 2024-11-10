{
  // problem 6
  //Define an interface Profile with properties name, age, and email. Create a function updateProfile that
  // accepts an object of type Profile and an object of type Partial representing the updates. The
  //function should return the updated profile.

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (
    profile: Profile,
    updateInfo: Partial<Profile>
  ): Profile => {
    return { ...profile, ...updateInfo };
  };

  const result = updateProfile(
    { name: "sweet", age: 23, email: "sweetmmjjss@gmail.com" },
    { age: 24 }
  );

  console.log(result);
}
