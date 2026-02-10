import React from 'react'

function card() {
  return (
    <>
     <div>card</div>
     <div className="card">
       <img x
        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
        alt="Delba"
      />

      <div className="content">
        <h2>Delba</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi, debitis?
        </p>

        <button onClick={() => alert("Viewing Delba's profile")}>
          View Profile →
        </button>
      </div>
    </div>
    </>
  )
}

export default card