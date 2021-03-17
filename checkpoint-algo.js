function fnct_string(){
    let table=[]
    let voyelles = 0
    do{
        s= prompt("donnez une phrase char by char et qui se termine avec un point:")
        table.push(s)
        if (s == "e" || s =="a" || s =="i" || s =="o" || s =="u")
        {
            voyelles = voyelles+1
        }
        
        
    }while (s !="."); 
    console.log(table)
    let phrase = table.join("");
    console.log(phrase + " lenght de votre phrase est de: "+ phrase.length)
    
    let mots= phrase.split(" ")
    console.log(mots + " nombre de mots est: "+mots.length)
    console.log(voyelles)
   

}
fnct_string()
