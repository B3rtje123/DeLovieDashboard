/* eslint-disable react-refresh/only-export-components */


export default (props:any) => {
    let counter = 0;

    return (
        <div className="flex max-h-44 overflow-y-scroll pr-2 m-4 relative">
            <div>
                <h1 className="px-4 py-2 text-xl sticky top-0 bg-white cursor-default">Tijd</h1>
                {
                <ul>
                    {props.data.map((item : any) => {
                        counter++;
                        console.log(item)
                        return(
                            <li key={counter} className="odd:bg-green/40 px-4 py-2 whitespace-nowrap md:pr-[6.75rem] lg:pr-[13.5rem] cursor-default">{item.timeStamp}</li>
                    )})}
                </ul>
                }
            </div>
            <div>
                <h1 className="px-4 py-2 text-xl sticky top-0 bg-white cursor-default">Naam</h1>
                {
                    <ul>
                        {props.data.map((item : any) => {
                            counter++;
                            return(
                            <li key={counter} className="odd:bg-green/40 px-4 py-2 whitespace-nowrap md:pr-[6.75rem] lg:pr-[13.5rem] cursor-default">{item.movement}</li>
                        )})}
                    </ul>
                }
            </div>
        </div>
    )
}