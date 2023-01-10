import { useEffect } from "react"


const useTitle =title => {
    useEffect(()=>{
        document.title = `${title}-Fetching Travel`
    }, [title])
}

export default useTitle;