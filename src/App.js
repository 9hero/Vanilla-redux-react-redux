import { useAxios } from "./useAxios";

function App() {
  const { loading, data, error } = useAxios({
    url: "http://localhost:8181/api/notice-board",
  });
  console.log(
    `Loading ${loading}, data ${JSON.stringify(data)}, error: ${error}`
  );

  return <div className="App"></div>;
}

export default App;
