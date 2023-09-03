import { useRouter } from "next/router"
import { useState } from "react"
import patientStyles from "@/styles/Patient.module.css";
import TabNew from '@/components/TabNew'

const patientName = () => {

    const router=useRouter()
    const {patientName}=router.query

    const [selectedFile, setSelectedFile] = useState(null);
  const [transcript, setTranscript] = useState("");

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", selectedFile);

    const res = await fetch(`http://127.0.0.1:5000/upload`, {
      method: "POST",
      body: formData,
    });

    const { Transcript } = await res.json();
    setTranscript(Transcript);
  };
  return (
    <section className={patientStyles.wholeBody}>
    <div style={{textAlign:"center"}}>
      <h3 className={patientStyles.name}> {patientName}</h3>
      <hr style={{border:"2px solid black"}} />
      </div>
      <h2>Upload New Session</h2>
      <div className={patientStyles.container}>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileInputChange} className={patientStyles.input} />
          <br />
          <br />
          <button type="submit" id={patientStyles.upload}>
            UPLOAD
          </button>
          
        </form>
      </div>
      <br />
      <br />
      <TabNew />
    </section>
  )
}

export default patientName;