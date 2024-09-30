import { getFirestore } from "firebase/firestore"; //first step 
// second =>
    import {app} from "./config/logion"; 
import { collection , addDoc } from "firebase/firestore"; //add doc and collection 
//import doc and get doc
import { doc , getDoc } from "firebase/firestore"; //add doc and collection 

const Firestore = getFirestore(app)

function Database() {
    const wrtedata = async ()=>{
 const result = await       addDoc(collection(Firestore , 'product') ,
    {
        title : "pen",
        rps :30
    })
    console.log(result);  }
//  make another function 
 const another =async()=>{
const aontherresult =await addDoc(collection(Firestore , "product/MecJuczG1QAhGnUUxed7/city"),{
   name : "ayesha" ,
   FaNAME : "RAFIQUE " ,
   rOLL : 23
    
})
console.log(aontherresult);

 }
 const getdocument =async ()=>{
    const ref = doc(Firestore , 'product/MecJuczG1QAhGnUUxed7')
 const snap = await getDoc(ref);
 console.log(snap.data());
 
}
    
  return ( <>
    <div>db</div>
    <button className="black border border-red-500" onClick={wrtedata}>data</button> <br/>
    <button className="black border-red-50" onClick={another}>put data</button><br/>
    <button className="bg-pink-200 border-red-50" onClick={getdocument}>get data</button>

     </>
  )
}
export default Database