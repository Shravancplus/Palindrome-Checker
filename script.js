const checkbutton = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result=document.getElementById("result");

const checkpalindrome = () => {
  if(input.value===""){
    alert("Please input a value");
    return;
  }

  const s=input.value.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
  let reversed = "";
  for(let i=s.length-1;i>=0;i--)
  {
    reversed += s.charAt(i);
  }
  /*const reversed = input.value.split("").reverse().join("");*/
  if(s === reversed)
  {
    result.innerHTML = `${input.value} is a palindrome`;
  } else {
    result.innerHTML = `${input.value} is not a palindrome`;
  }
  
  
}

checkbutton.onclick = checkpalindrome;