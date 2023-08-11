import GetInfo from "./GetInfo";
import {getData} from "../get-data";
export default async function destination() {
  const data = await getData();
  const {destinations} = data;
  
  return (
      <GetInfo destination={destinations}/>
  )
}
