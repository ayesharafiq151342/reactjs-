function Challange() {
    let date = new Date()
    date = date.getHours()
    let heading = ''
    if (date >= 8 && date < 12) {
        heading = 'good morning'
    } else if (date >= 12 && date < 19) {
        heading = 'good afternoon'

    }
    else {
        heading = 'good night'

    }
    return (
        <>
 
    
            <h1>Challenge 4</h1>
            <h5 className="text-center  text-2xl">
                -------------1 to 12---------hello Ash , good morning------ </h5>
            <h5 className="text-center  text-2xl">
                ------------12 to 19--------hello Ash , good after noon---</h5>
            <h5 className="text-center  text-2xl">
                 ----------19 son on----------hello Ash , good night -------</h5>
            <h1 className="flex justify-center  bg-red-200 h-52 items-center text-3xl"> hello Ash ,
                <span className="text-red-900 text-3xl"> {heading} </span>

            </h1>
            <div>
   
    </div>
        </>
    )
}
export default Challange