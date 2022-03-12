function InpVals({ vals }) {
    return (
        <div>
            {
                vals.map((val) => {
                    return (
                        <div key={val.id} className="inpDiv">
                            <input key={val.id} value={val.num}  onChange={e => InpVals(e.target.value)}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default InpVals;