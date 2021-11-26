import axios from 'axios';

export const actionUserName =()=>(dispatch)=>{
  setTimeout(()=>{
    return dispatch({type:'CHANGE_USER', value:"Prawito Hudoro"})
  },2000)
}


export const loginUserAPI =(data)=>(dispatch)=>{
  //promise utk response ke user
  return new Promise((resolve, reject)=>{
    const options = {
      method: 'post',
      url: `https://petronasdemo.aa.assetdata.xyz/api/v1/a/hash-login/`,
      data: {
        "email": data.email,
        "password" : data.password
      }
    };
          axios(options)
          .then((res) => {
            // Signed in
          const dataUser ={
            email: data.email,
            token : res.data.token
          }

            dispatch({type : 'CHANGE_ISLOGIN', value:true})
            dispatch({type : 'CHANGE_USER', value:dataUser})
            console.log("userCredential ",JSON.stringify(res.data.token));
            resolve(dataUser)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error ",error);
            dispatch({type : 'CHANGE_ISLOGIN', value:false})
            // ..
            reject(false)
          })

  })
}

  export const getDataProfilAPI =(dataToken)=>(dispatch)=>{
    //promise utk response ke user
    return new Promise((resolve, reject)=>{
      const options = {
        method: 'GET',
        url: `https://petronasdemo.aa.assetdata.xyz/api/v1/a/me`,
        headers: {"Authorization" : `Bearer ${dataToken}`}
      };
            axios(options)
            .then((res) => {
              console.log("profil ",res);
              const resProfil=res.data.data;
              // Signed in
              const profilUser ={
                img: resProfil.photos[0],
                email : resProfil.email,
                account_type : resProfil.account_type,
                role_name : resProfil.role_name,
                role_label : resProfil.roles[0]['label'],
                first_name : resProfil.first_name,
                last_name : resProfil.last_name,
                company : resProfil.company.name,
                company_department : resProfil.company_department,
                job_title : resProfil.job_title,
                employee_number : resProfil.employee_number,
                phone_number : resProfil.phone_number
              }
              dispatch({type : 'SET_PROFILES', value:profilUser})
              console.log("profil ",profilUser);
              resolve(profilUser)
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log("error ",error);
              // ..
              reject(false)
            })
    })
}

export const getDataSupplierAPI =(data)=>(dispatch)=>{
  console.log("data get Supllier ",data);
  //promise utk response ke user
  return new Promise((resolve, reject)=>{
    const options = {
      method: 'GET',
      url: `https://petronasdemo.aa.assetdata.xyz/api/v1/setting/supplier/filter?orderCol=name&orderDir=asc&limit=${data.limitPage}&page=${data.activePage}`,
      headers: {"Authorization" : `Bearer ${data.token}`}
    };
          axios(options)
          .then((res) => {
            console.log("resSupllier ",res);
            const resSupllier=res.data.data;
            const dataSupplier=[];

            Object.keys(resSupllier).map(key=>
              {
                const supplier=resSupllier[key];
                //console.log("resSupllier ",dataSupplier);

                  dataSupplier.push({
                    name : supplier.name,
                    contact_person : supplier.contact_person,
                    contact_number : supplier.contact_number,
                    country_code : supplier.country_code,
                    state : supplier.state,
                    city : supplier.city,
                    street : supplier.street,
                    postcode : supplier.postcode,
                    contact_number_alternate : supplier.contact_number_alternate,
                    email : supplier.email,
                    website : supplier.website,
                    registration_number : supplier.registration_number,
                  })
              }
            );

            dispatch({type : 'SET_SUPLLIER', value:dataSupplier})
            console.log("dataSupplier ",dataSupplier);
            resolve(dataSupplier)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error ",error);
            // ..
            reject(false)
          })
  })
}
