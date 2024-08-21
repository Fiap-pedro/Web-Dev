import MainInfo from "./MainInfo";
import Contato from "./Contato";

function ConteudoPrincipal() {
    return ( 
        <div className='mainInfo'>
            <MainInfo/>
            <Contato/>
        </div>
     );
}

export default ConteudoPrincipal;