import React from 'react';
import Presentacion from './Presentacion';
import CosasPerrunas from './CosasPerrunas';

// paso mi nombre y el nombre del proyecto a uno de mis componentes
const props = { nombre: 'Daniela Fonseca', proyecto: 'Proyecto 5 - React' };

function App() {
  return (
    <div>
     {/* El componente presentación con mis datos */} 
      <Presentacion {...props}/>
      {/* El componente que llama a la api de perritos */} 
      <CosasPerrunas  {...props}/>
    </div>
  );
}

export default App;