import { Link} from 'react-router-dom';

function Error(){
    
    return (
        <div>
            <h1>ERRO! ESSA PÁGINA NÃO EXISTE</h1>
            <Link to={"/"}>Voltar para a página inicial</Link>
        </div>
        
    );
}
  
export default Error;