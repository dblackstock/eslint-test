const processData = (input: number): void => {
  console.log(input);
};

processData("2");

interface userValueTypes {
  name: string;
}

const processObject = (userData: userValueTypes): void => {
  console.log(userData.name);
};

processObject({ name: "Davey" });
