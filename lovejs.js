window.onload = function(){
    let trybutton = document.getElementById("btn-tryagain");
    let button = document.getElementById("btn-show");
    button.addEventListener('click',calculate);
    trybutton.addEventListener('click',resetfileds);
    trybutton.style.display='none';
}

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }

function calculate(){
    let name1 = document.getElementById("name1").value.toLowerCase();
    let name2 = document.getElementById("name2").value.toLowerCase();

    if(name1 != "" && name2 != "")
    {
        //remove space
        n1 = name1.replaceAll(" ","");
        n2 = name2.replaceAll(" ","");
    
        //replace matching letters to '*'
        for(i=0;i<n1.length;i++)
        {
            for(j=0;j<n2.length;j++)
            {
            
                if(n1[i] == n2[j])
                {
                    n1 = replaceAt(n1,i,'*');
                    n2 = replaceAt(n2,j,'*');
                }
            }
        }

    
        //counting unmatch letters from name1
        let count = 0;
        for(i=0;i<n1.length;i++){
            if(n1[i]!='*')
            {
                count++;
            }
        }

        //counting unmatch letters from name2
        for(i=0;i<n2.length;i++){
            if(n2[i]!='*')
            {
                count++;
            }
        }
    
        let res = Math.floor((100/count)*(count-1));
        document.getElementById("btn-show").style.display='none';
        // let percentage = Math.floor(Math.random() * 101);
        document.getElementById("result-note").innerHTML = `${name1.toUpperCase()} and ${name2.toUpperCase()} your LOVE strength is`;
        document.getElementById("result-percentage").innerHTML = `${res.toString()}%`;
        document.getElementById("btn-tryagain").style.display='block';
    }
    else{
        document.getElementById("result-note").innerText = "Please Enter Name!"
    }
}

function resetfileds(){
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("result-note").innerText = "";
    document.getElementById("result-percentage").innerText = "";
    document.getElementById("btn-show").style.display='block';
    document.getElementById("btn-tryagain").style.display='none';
}