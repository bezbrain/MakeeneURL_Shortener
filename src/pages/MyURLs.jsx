import axios from "axios";
import "../styles/myurl.css";

const MyURLs = () => {
  const handleAllUrls = async () => {
    try {
      const { data } = await axios("http://localhost:9000/api/v1/links");
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="url-con">
      <h2>All URLs Already Generated</h2>
      <button onClick={handleAllUrls}>View All URLs</button>
    </div>
  );
};

export default MyURLs;
