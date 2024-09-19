export default function CardContainer({titulo, children}) {
    return(
        <>
            <div>
                <h1 className="">{titulo}</h1>
                <div className="flex justify-around">
                    {children}
                </div>
            </div>
        
        
        </>
    )
}