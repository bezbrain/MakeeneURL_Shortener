import axios from "axios";
import "../styles/myurl.css";
import { useGlobalContext } from "../context";

const MyURLs = () => {
  const { urlArr, setUrlArr } = useGlobalContext();

  const handleAllUrls = async () => {
    try {
      const { data } = await axios("http://localhost:9000/api/v1/links");
      // console.log(data);
      setUrlArr(data.links);
      // console.log(urlArr);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="url-con">
      <h2>All URLs Already Generated</h2>
      <button onClick={handleAllUrls}>View All URLs</button>
      <div className="table-con">
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
  );
};

export default MyURLs;
