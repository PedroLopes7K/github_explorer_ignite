import { RepositoryItem } from "./RepositoryItem"
import { useState, useEffect } from "react"

import '../styles/repositories.scss'
// const repository = {
//   name: 'unform',
//   description: "Form in React",
//   link: 'https://github.com/PedroLopes7K'
// }


interface Repository {
  name: string;
  description: string;
  html_url: string
}
  
// https://api.github.com/users/PedroLopes7K/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]) // iniciar a variavel useState sempre com o mesmo tipo da variavel que voce ira utilizar


  // importante sempre usar os dois parametros do useEffect, a função ea dependencia, se nao ele entra em loop
  useEffect(() => {
fetch('https://api.github.com/users/PedroLopes7K/repos').then(response => response.json()).then(data => setRepositories(data))
  }, [repositories])
  return (


    <section className="repository-list">
      <h1>Lista de Repositórios</h1>


      <ul>
{repositories.map( repository => {
  return <RepositoryItem key={repository.name} repository={repository}  />
})}

      
      {/* <RepositoryItem repository={repository}  />
      <RepositoryItem repository={repository}  /> */}

      </ul>
    </section>
  )
}