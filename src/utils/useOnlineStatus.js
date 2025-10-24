import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{    //browser gives us the access to this window object
            setOnlineStatus(false);
        });
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });
    })

return onlineStatus;
}

export default useOnlineStatus;