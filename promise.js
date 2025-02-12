let ice_cream= new Promise((resolve, reject)=>{
    let got_ice_cream=true;
    setTimeout(()=>{
        got_ice_cream=true;
        if(got_ice_cream){
            resolve(got_ice_cream);
        }else{
            reject(got_ice_cream);
        }
    },3000)
})
ice_cream.then(()=>{
    console.log('eat ice cream');  
}).catch(()=>{
    console.log('error');
})