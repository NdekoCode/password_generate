const d_length = document.getElementById("password-length");
const password_out = document.getElementById("password-output");
d_length.addEventListener('input',()=>{
    document.getElementById("display-password-length").value = d_length.value;
});
const dataLowercase = "qwertyuiopadfghjklzxcvbnm";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "!@#$%^&*(_+}|{:\"'?><)";
const btn= document.getElementById('generateButton');

const generatePassword = ()=>{
    let pass='';
    let data =[];

    if(lowercase.checked) data.push(...dataLowercase);
    if(uppercase.checked) data.push(...dataUppercase);
    if(numbers.checked) data.push(...dataNumbers);
    if(symbols.checked) data.push(...dataSymbols);
    
    if(!data.length){
        alert("Veuillez selection un critere")
    }else{
        
    for (let i = 0; i < d_length.value; i++) {
        
        pass+=data[Math.floor(Math.random() * data.length)];
    }
    password_out.value =pass;
    password_out.select();
    // password_out
    document.execCommand('copy');
    btn.textContent="copié";
    setTimeout(()=>{
        btn.textContent="Generateur de MDP";
    },1500);
    }
}
btn.addEventListener('click',generatePassword)