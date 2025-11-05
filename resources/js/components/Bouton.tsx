function inscrire(){
    alert('Je fais mon inscription')
}

function connecter(){
    alert('Je me connecte...')
}
export default function Bouton({value}: {value:string}){
   return (
    (
      value === "Se connecter" ? 
      <button id='btn' onClick={connecter}>
       {value}
      </button> :
      <button id='btn' onClick={inscrire}>
       {value}
       </button>
    )
   )
}