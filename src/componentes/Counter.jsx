import { useState } from "react"
// imutabilidade - o valor da variavel nao pode ser alterado, mas ela pode receber um novo valor
// exemplo: 
// sem a imutabilidade:
// usuarios =['pedro', 'lucas']
// usuarios.push('gabriel')
// com imutabilidade:
// novoUsuarios = [...usuarios, 'gabriel']
export function Counter() {
  // usando estado do componente
  // let num = 0
const [num, setNum] = useState(0)
  function increment() {
    // alert('clicou')
    setNum(num += 1)
    // console.log(num)
  }
  return (
<div>
  <h2>{num}</h2>
  <button type="button" onClick={increment}>INCREMENT </button>
</div>
  )
}