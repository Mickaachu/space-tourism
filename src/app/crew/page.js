import GetInfo from "./GetInfo";
import {getData} from "../get-data";
export default async function crew() {
  const data = await getData();
  const {crew} = data;
  
  
return (
    <GetInfo crew={crew}/>
)
  }
