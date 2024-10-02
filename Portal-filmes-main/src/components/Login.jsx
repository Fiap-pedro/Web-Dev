export default function Login( { isLogged, handleLogin } ) {

    return(
        <>
            <div className="flex gap-4 items-center">
                
                {/* && ==> um if sem else */}
                
                {isLogged && <p>Olá, Usuário</p>}

                <button 
                onClick={handleLogin} 
                className={`bg-${isLogged ? 'white' : 'black'} text-purple-800 px-4 py-1 rounded`}>
                    {isLogged ? 'Logout' : 'Login'}
                </button>

            </div>
        </>
    )
}