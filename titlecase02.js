function titleCase(str){
    let array = str.toLowerCase().split(' ');
    let newSentence = "";
    for(i = 0; i < array.length; i++){
        newSentence += array[i][0].toUpperCase() + array[i].substr(1) + " "; 
    }
    
    let newWord = "";

    for( i = 0; i < str.length; i++){
        newWord = newWord + str[i];
     

        if(str[i] == " "){
            newWord = newWord + str[i+1].toUpperCase();
            i++;
        }     
        }
         console.log(newWord);
    return str;
}

titleCase("I'm a little tea pot");
