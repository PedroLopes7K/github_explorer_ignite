// USANDO TYPESCRIPT

type User = {
  name: string
  email: string
  address: {
    city: string
    state?:string  // o ? significa que esse parametro nao e obrigatorio
  }
}


//   significa que o parametro recebido precisara seguir o padrao User
function showWelcomeMessage(user: User) {
  return ` Welcome ${user.name}, your e-mail is ${user.email}.
  Your city is ${user.address.city} and your state is ${user.address.state}`

}

const user = {
  name: "Pedro",
  email: "pedro@gmail.com",
  address: {
    city: "Belo Horizonte",
    state: "MG",
  }
}

console.log(showWelcomeMessage(user))