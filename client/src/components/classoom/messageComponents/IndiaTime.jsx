import React, { useEffect, useState } from 'react'


function IndiaTime({timeString}) {
    const [indianDateTime, setIndianDateTime] = useState('');

    useEffect(() => {
        const dateStr = timeString;
        const date = new Date(dateStr);
    
        // Convert to Indian time zone
        const options = {
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        };
    
        const formattedDateTime = date.toLocaleString('en-IN', options);
        setIndianDateTime(formattedDateTime);
      }, []);

  return (
    <><span>{indianDateTime}</span></>
  )
}

export default IndiaTime