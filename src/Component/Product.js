import React, { useEffect, useState } from 'react';

function Product() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);

  return (
    <>
      <h2>Products</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {state.map((e) => (
        <div
          key={e.id}
          style={{
            boxShadow: '0 0 10px black',
            width: '30%',
            height: '560px',
            marginLeft: '20px',
            marginBottom: '20px',
            boxSizing: 'border-box', // Include padding and border in the width and height
            padding: '10px',
            borderRadius:'5%'
          }}
        >
          <img src={e.image} style={{ width: '100%', height: '80%' }} alt="images" />
          <p>{e.title}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default Product;
