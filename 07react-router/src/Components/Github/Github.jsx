import { useLoaderData } from "react-router-dom";

function Github() {
    // const [data ,setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Coderx011')
    //   .then(response => response.json())
    //   .then(data => {
    //     setData(data);
       
    //   }
    //     )
    
     
    // }, [])
    const data = useLoaderData();
    console.log(data);
  return (
    <>
    <div>Github : {data.login}</div>
    <img src={data.avatar_url} alt="text" />
    </>
    
  )
}

export default Github;

export const githubInfoloader = async ()=>{
    const response = await fetch('https://api.github.com/users/Coderx011')
    return response.json()
}
