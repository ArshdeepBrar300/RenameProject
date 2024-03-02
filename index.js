import fs from 'fs'
import path from 'path'
const __dirname=path.resolve()
const preview=true;
const folder=__dirname
function rename(replaceThis,replaceWith){
try {
    fs.readdir(folder,(err,data)=>{

        for(let i=0;i<data.length;i++){
            const file=data[i]
            let oldFile=path.join(folder,file)
            let newFile=path.join(folder,file.replaceAll(replaceThis,replaceWith))
            if(!preview){
                fs.rename(oldFile,newFile,(err)=>{
                    console.log("Success");
                })
            }else{
                if(oldFile!==newFile)
                    console.log(oldFile+' >>>> ',newFile);
            } 
        }
    })

} catch (error) {

}
}

rename('sample','test')