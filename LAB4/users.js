// we use in memory database
let users = [
  {
    id: 1,
    name: "Amit Sharma",
    mob: "98345xxxxx",
    email: "amit.example@exam.com",
  },
  {
    id: 2,
    name: "Monika Verma",
    mob: "92345xxxxx",
    email: "moni.example@exam.com",
  },
];

let nextId = 3;

export const getAllUsers = () =>{
  return users;
}

export const getUserById = (pid) => {
  return users.find((user) => user.id === pid);
};


export const getUsers = () => users;

export const addUser = (user) => {
  user.id = nextId++;
  users.push(user);
  return user;
};

  export const updateUser = (pid, updatedData) => {
  const userIndex = users.findIndex((user) => user.id === pid);
  if (userIndex == -1) { 
    return false;
  }
  updateData.id = pid;
  users[userIndex] = updatedData;
  return updatedData;
    
}; 

  export const deleteUser = (pid) => {
  const userIndex = users.findIndex((user) => user.id === pid);
  if (userIndex == -1) {
    return false;
  }
  users.splice(userIndex, 1);
};
