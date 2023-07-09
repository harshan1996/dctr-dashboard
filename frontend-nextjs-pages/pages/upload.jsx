import React from 'react';
import styles from '@/styles/UploadButton.module.css';
import UploadFileIcon from '@mui/icons-material/UploadFile';

function UploadButton() {
  return (
    <div className={styles.container}>
      <input type="file" id="upload" className={styles.input} />
      <label htmlFor="upload" className={styles.label}><UploadFileIcon/>Upload</label>
    </div>
  );
}

export default UploadButton;
