function duplicateEncode(str) {
    str = str.toLowerCase();
    str = str.split('');
    var new_str = "";
    
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i])==str.lastIndexOf(str[i])) {
           new_str+="(";
        }
        else
        {
            new_str+=")";
        }
    }
    console.log(new_str);
}

duplicateEncode("din") //  "((("
duplicateEncode("recede") //  "()()()"
duplicateEncode("Success") //  ")())())"
duplicateEncode("(( @") // -"))(("
duplicateEncode("))")
duplicateEncode("((")