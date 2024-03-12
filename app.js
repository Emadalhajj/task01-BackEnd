// const { fstat } = require("fs");
// const { demand, demandOption } = require("yargs");
let yargs = require("yargs")
let data10 = require("./data10.js")

yargs.command({
    command: "add",
    describe : "this is addational",
    builder:{
        fname :{
            describe:"farst name ",
            demandOption:true ,
            type:"tring"
        },
        lname:{
            describe :"last name",
            demandOption: true,
            type : "string"
        },
        age:{
            describe :"this age",
            demandOption: false,
            type : "number"
        }
    }, 
    handler : (y)=>{ 
       data10.addPreson(y.id, y.fname, y.lname,y.age ,y.city);
    }
})
yargs.command({
    command:"delete",
    describe:"deteation",
    handler:(x)=>{
        data10.deleteData(x.id);
    }

})

yargs.command({
    command:"read",
    describe:"to read file by id",
    builder:{
        id : {
            describe : "by id will read info",
            demandOption:true,
            type:"number"
         }   
    },
    handler:(x)=>{
        data10.readData(x.id);
    }

})

yargs.command({
    command:"list",
    describe:"show list ",
   
    handler:()=>{
        data10.listdata();
    }

})

// console.log(yargs.argv);
yargs.parse()


// let deleted = require("yargs")
// deleted.command({
//     command:"delete",
//     describe:"this is for deletatian",
//     handler:()=>{
//         console.log("for delete only");
//     }
// })
// console.log(deleted.argv);

// let pars = {
//     fname:"emad",
//     lname:"alhajj",
//     age:"33"
// }

// let tojson = JSON.stringify(pars)
// console.log(tojson);
// let toopject = JSON.parse(tojson)
// console.log(toopject);
// let savefile =require("fs")
// savefile.writeFileSync("dataofspations.json",tojson)  