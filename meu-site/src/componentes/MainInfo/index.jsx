import Habilidades from "../Habilidades";
import InfosPessoais from "../InfosPessoais";

function MainInfo() {
    return ( 
        <div className="mainInfo">
            <section id="info">
                
                <InfosPessoais/>
                <Habilidades/>
                

            </section>
        </div>
     );
}

export default MainInfo;