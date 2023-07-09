import { useState } from "react";
// import homeStyles from "@/styles/Home.module.css";
// import Sidebar from "@/components/Sidebar";
// import Navbar from "@/components/Navbar";
import Head from "next/head";

const HomePage = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [transcript, setTranscript] = useState("");

//   const handleFileInputChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     const res = await fetch(`http://127.0.0.1:5000/upload`, {
//       method: "POST",
//       body: formData,
//     });

//     const { Transcript } = await res.json();
//     setTranscript(Transcript);
//   };
//   return (
//     <>
//     <Head> <title>Home</title></Head>
//       {/* <Navbar />
//       <Sidebar /> */}
//       <div className={homeStyles.container}>
      
//         <form onSubmit={handleSubmit}>
//           <input type="file" onChange={handleFileInputChange} />
//           <br />
//           <br />
//           <button type="submit" id="upload">
//             SUBMIT
//           </button>
//         </form>
//       </div>
//       <br />
//       <br />
//       {transcript.length > 0 && (
//         <textarea name="name" value={transcript} id="" cols="100"></textarea>
//       )}
//     </>
//   );
};

export default HomePage;
