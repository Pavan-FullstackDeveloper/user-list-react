
import UserProfile from "./components/UserProfile"

import './App.css';


const userDetails=[{uniqueNo:1,imgUrl:"Pictures/pavan1.jpg",name:"Pavan Thoti",role:"Software Engineer"},
{uniqueNo:2,imgUrl:"Pictures/Mahesh.jpg",name:"mahesh Babu",role:"Data entry"},{uniqueNo:3,imgUrl:"Pictures/Kanna.jpg",name:"Kanna Kadapa",role:"Ncc Trainer"},{uniqueNo:4,imgUrl:"Pictures/susith.jpg",name:"susith mayen",role:"Child Administrator"},];

function App() {
  return (
    <div className="App">
      <h1 className="head">USER PROFILES</h1>
      <ul>
        {userDetails.map(item=> 
         <UserProfile userDetails={item} key={item.uniqueNo}/>
      )}
      </ul>
      
    </div>
  );
}

export default App;
