import InfosPessoais from "./InfosPessoais";
import Habilidades from "./Habilidades";
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