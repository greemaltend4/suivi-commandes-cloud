import React, { useEffect, useState } from 'react';

function CommandList() {
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    // Simulation d'une fetch à une API
    fetch('https://api.example.com/commands') // Remplacez par votre API
      .then(response => response.json())
      .then(data => setCommands(data));
  }, []);

  return (
    <ul>
      {commands.map(command => (
        <li key={command.id}>{command.details}</li>
      ))}
    </ul>
  );
}

export default CommandList;