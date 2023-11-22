import React, { useEffect, useState } from "react";

const UUseEffect = () => {
    const [count, setCount] = useState(0);

    // This only runs once when it is mounting because dependency array is empty
    useEffect(() => {
      console.log("App Component Mounting..")
    }, [])

    // This runs evertime when count is updated beacuse dependency array consisting count 
    useEffect(() => {
      console.log("Count got udated ", count)
    }, [count])
    
    return (
        <div>
          <p>
            count is {count}
          </p>
          <button onClick={() => setCount(count + 1)}>Update</button>
        </div>
    )
}
export default UUseEffect;