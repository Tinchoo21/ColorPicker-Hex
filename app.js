
const values = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click" , function()
{
    let randomN = "";
    let randomNum = "#";
   function hex()
   {
        for(let i= 0; i < 3 ; i++)
      {
          randomN = values[getRandomNum()];
           randomNum += randomN;
      } 

      return randomNum;
   }
     


  document.body.style.backgroundColor = hex();
    color.textContent = hex();

})
function getRandomNum()
{
    return Math.floor(Math.random() * values.length);
}