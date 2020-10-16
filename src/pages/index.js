import { Login } from "../compenents/organisms";
import { useLocalStrorage } from "../hooks";

export default function Home() {
  const [id, setId] = useLocalStrorage("id");
  return (
    <>
      {id}
      <Login onIdSubmit={setId} />
    </>
  );
}
