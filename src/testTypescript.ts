const processData = (input: number): void => {
  console.log(input);
};

processData(2);

interface UserValueType {
  name: string;
}

const processObject = (userData: UserValueType): void => {
  console.log(userData.name);
};

processObject({ name: "Davey" });
