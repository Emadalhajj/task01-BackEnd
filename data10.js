let fs = require("fs")

let allData = require("./app")

let addPreson = (id , fname , lname, age ,city)=>{
   //////////////// 

allData = loadData()
const dublctData = allData.filter((obj)=>{
   return obj.id === id
})
console.log(dublctData.length);

if(dublctData.length == 0){
    allData.push({
    id : id ,
    fname : fname,
    lname : lname,
    age : age,
    city : city
})
saveData(allData)

}else  {
    console.log("have a dublected id"); }

}

let loadData = ()=>{
    
   try{
    const dataJson = fs.readFileSync("data10.json").toString()
    return JSON.parse(dataJson)
   }
   catch{
       return[]
   }
}
/////////////

const deleteData = (id) =>{
    const allData = loadData()
    const keepdata = allData.filter((obj)=>{
        return obj.id !== id 
    })
    saveData(keepdata);
    console.log("you have already declear");
}

//////////////
const readData = (id)=>{
    const allData = loadData()
    const reading = allData.find((obj)=>{
        return obj.id == id
    })
    // console.log(reading);
    if(reading){
        console.log(reading.fname);
    }else{
        console.log("not thare any info"); 
    }
}

////////////////

const listdata =()=>{
const allData = loadData()

allData.forEach((obj)=>{
    console.log(obj.fname, obj.city , obj.age);
})

} 


////////////////

let saveData = (allData)=>{

    let alldatajson = JSON.stringify(allData)
    fs.writeFileSync("data10.json",alldatajson) 

}
module.exports ={
    addPreson,
    deleteData,
    readData,
    listdata
}