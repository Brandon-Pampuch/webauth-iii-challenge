import { useState, useEffect } from "react";
import axios from "axios";

export const useGetUsers = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    const fetchData = () => {
      const token = localStorage.getItem("jwt"); // get token form local storage?
      const requestConfig = {
        headers: {
          authorization: token
        }
      };
      axios
        .get("http://localhost:5000/api/user/", requestConfig) //pass token in headers

        .then(res => {
          console.log("in use get users", res.data);

          setUsers({
            users: res.data
          });
        })
        .catch(err => console.log(err));
    };
    fetchData();
  }, []);

  return [users];
};
