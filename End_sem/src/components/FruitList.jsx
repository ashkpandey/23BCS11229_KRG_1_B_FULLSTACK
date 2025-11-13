import React from 'react'

function FruitList() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']

  return (
    <section aria-labelledby="fruits-heading">
      <h2 id="fruits-heading">Fruits</h2>
      <ul>
        {fruits.map((fruit, idx) => (
          <li key={idx}>
            <button type="button" onClick={() => alert(fruit)}>
              {fruit}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FruitList
