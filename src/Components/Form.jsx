import React, { useState } from 'react';

const MyForm = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleName = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    
    if (user.name.trim().length <= 5) {
      setError('Por favor verifique su informacion nuevamente');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      setError('Por favor verifique su informacion nuevamente');
      return;
    }
    
    setError('');
    setSuccessMessage(`Gracias ${user.name}, te contactaremos cuando antes vía mail`);
  
    console.log('Datos del usuario: ', user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Nombres: </label>
        <input
          type='text'
          value={user.name}
          name='name'
          id='name'
          onChange={handleName}
        />
        <br />
        <label htmlFor='email'>Email: </label>
        <input
          type='email'
          value={user.email}
          name='email'
          id='email'
          onChange={handleEmail}
        />
        <br />
        <button style={{cursor: "pointer"}} type="submit">ENVIAR</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {successMessage && <p style={{color: "darkgreen"}}>{successMessage}</p>}
    </div>
  );
};

export default MyForm;
