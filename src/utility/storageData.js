const getData = ()=>{
    const storeApplication = localStorage.getItem('storeId');
    if(storeApplication){
      return JSON.parse(storeApplication)
    }
    return [];
}
const submitData = (id)=>{
     const storeApplications = getData();
     const exists = storeApplications.find((jobId)=>jobId===id);
     if(!exists){
      storeApplications.push(parseInt(id));
      localStorage.setItem('storeId',JSON.stringify(storeApplications))
     }
}
export  {getData,submitData}