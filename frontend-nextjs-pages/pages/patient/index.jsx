import React, { useState } from 'react';
import styles from '@/styles/PatientForm.module.css'

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone:', phone);
    // Add the code to submit the form data to the backend
  };

  return (
    
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 style={{color:"darkblue"}}>Patient Details</h2>
      <label htmlFor="name" className={styles.label}>Name</label>
      <input
        type="text"
        id="name"
        value={name}
        className={styles.input}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="email" className={styles.label}>Email</label>
      <input
        type="email"
        id="email"
        value={email}
        className={styles.input}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="phone" className={styles.label}>Phone</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        className={styles.input}
        onChange={(event) => setPhone(event.target.value)}
      />
    
     <label htmlFor="address" className={styles.label}>Address</label>
      <textarea
        id="address"
        value={address}
        className={styles.textarea}
        style={{minHeight:"100px"}}
        onChange={(event) => setAddress(event.target.value)}
      />


      <button type="submit" className={styles.button}>SAVE</button>
    </form>
  );
}

export default Form;

