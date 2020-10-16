import { DashBoard, Login } from "../compenents/organisms";
import { useLocalStrorage } from "../hooks";

export default function Home() {
  useLocalStrorage;
  const [id, setId] = useLocalStrorage("id");
  return (
    <div>
      {id ? <DashBoard id={id} /> : <Login onIdSubmit={setId} />}
    </div>
  );
}
