import { getData } from "../get-data";
import GetInfo from "./GetInfo";
export default async function technology() {
  const data = await getData();
  const {technologies} = data;
  
    return (
        <GetInfo technologies={technologies}/>
    )
  }
