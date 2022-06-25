import axios from "axios";
import { useState, useEffect } from "react";

// yep, the typings aren't great. parameters are:
// url, method, data, options
interface Props {
  url: string;
  method: string;
  data?: { [key: string]: any };
}

const useAxios = ({url, method, data}: Props) => {
  const [response, setResponse] = useState<{[key: string]: any}[] | {[key: string]: any}>(null!);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log('axios hook has been called')
  useEffect(() => {
    const fetchData = async () => {
      try {
        // @ts-ignore
        const result = data ? await axios[method](url, json.parse(data), { withCredentials: true }) 
        // @ts-ignore
        : await axios[method](url, {withCredentials: true})
        result && setResponse(result.data);
        setIsLoading(false);
       } catch (err) {
          setError(err);
       }
    };
    fetchData();
 }, []);

 return { response, error, isLoading };

}

export default useAxios;