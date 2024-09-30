import React, { useEffect, useState } from 'react';

function Fetch() {
  const [data, setData] = useState([]);
  async function datafetch() {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/users')
      const data = await response.json()
      setData(data)
    }
    catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    datafetch()
  }, []);
  return (
    <>
      {data.map((data, index) => (
        <div key={index}>
          <h1>{data.email}</h1>
          <h1>{data.role}</h1>
          <img src={data.avatar} alt="" />
        </div>
      ))}
    </>
  );
}


export default Fetch;
