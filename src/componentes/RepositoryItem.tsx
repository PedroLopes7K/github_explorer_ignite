// const repositoryName = 'unform2'

interface RepositoryItemProps {
  repository: {
    name: string,
    description: string,
    html_url: string
  }
}


export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
    {/* transição entre html e js usa {} */}
    <strong>{props.repository?.name ?? "Default"}</strong>
    {/* o sinal ? verifica se o componente possui a propriedade ou não */}
    <p>{props.repository?.description}</p>


            {/* essas informaçoes veem direto da api no repositorylist */}
    <a href={props.repository?.html_url} target="_blank"> 
    Acessar Repositório</a>
  </li>
  )
}