import React from 'react';

function Master({master}) {
  const category = master.category
  const mastername = master.name

  return (
    <>
    
      <div>
        <li>Мастер: {mastername}. Категория: {category}</li>
      </div>

    </>
  );
}

export default Master;
