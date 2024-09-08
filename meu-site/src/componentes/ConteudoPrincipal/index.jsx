import Contato from "../Contato";
import MainInfo from "../MainInfo";


function ConteudoPrincipal() {
    return ( 
        <div className='mainInfo'>
            <MainInfo/>
            <Contato/>
        </div>
     );
}

export default ConteudoPrincipal;