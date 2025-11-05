

function Btninput({nom,placeholder,type}:{nom:string,placeholder:string,type:string}){
   return (
      <input type={type} placeholder={placeholder} name={nom} id="input"/>
   );
}

export default Btninput