import axios from "axios";
import "../styles/myurl.css";
import { useGlobalContext } from "../context";
import { useState } from "react";
import RegLogin from "./RegLogin";

const MyURLs = () => {
  const { urlArr, setUrlArr, getToken } = useGlobalContext();

  const [myUrlPageError, setMyUrlPageError] = useState("");

  const handleAllUrls = async () => {
    if (getToken) {
      try {
        const { data } = await axios("http://localhost:9000/api/v1/links");
        setUrlArr(data.links);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      setMyUrlPageError("Please login to view all URLs");
      setTimeout(() => {
        setMyUrlPageError("");
      }, 3000);
    }
  };

  return (
    <>
      <div className="url-con">
        <h2>All URLs Already Generated</h2>
        <button onClick={handleAllUrls}>View All URLs</button>
        <div className="table-con">
          <p>{myUrlPageError}</p>
          <table>
            <tbody>
              <tr>
                <th>Date Created</th>
                <th>Original Links</th>
                <th>Short Links</th>
              </tr>
            </tbody>
            {urlArr &&
              urlArr.map((each, i) => {
                const extractDate = each.createdAt.split("T")[0];
                const { fullLink, originalLink } = each;
                return (
                  <tbody key={i}>
                    <tr>
                      <td>{extractDate}</td>
                      <td>{originalLink}</td>
                      <td>{fullLink}</td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
      <RegLogin />
    </>
  );
};

export default MyURLs;
