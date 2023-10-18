let formData = addEventListener("submit", (e) => {
    e.preventDefault()
    let firstName=e.target[0].value
    let secondName=e.target[1].value
    let userName=e.target[2].value
    let createPassword=e.target[3].value
    let confirmPassword=e.target[4].value
    
    let arrData={
        fname:firstName,
        sname:secondName,
        uname:userName,
        cpassword:createPassword,
        password:confirmPassword
    }
    fetch('http://localhost:3000/posts',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(arrData)
    }).then((val)=>val.json()).then((val)=>{console.log(val)})

})