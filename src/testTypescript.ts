const processData = (input: number): void => {
  console.log(input);
};

processData("2");

interface userValueType {
  name: string;
}

const processObject = (userData: userValueType): void => {
  console.log(userData.name);
};

processObject({ name: "Davey" });
