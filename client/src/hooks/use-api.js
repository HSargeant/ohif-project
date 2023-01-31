import { useState, useEffect } from 'react';

const API_ROOT = 'http://localhost:8000';

export function useApi({ path } = { path: '' }) {
  console.log(path)
  const [response, setResponse] = useState();

  useEffect(() => {
    fetch(`${API_ROOT}/${path}`)
      .then(res => res.text())
      .then(res => setResponse(res));
  }, []);

  return {
    response
  };
}
