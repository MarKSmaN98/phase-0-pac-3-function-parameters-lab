//returns a phrase with the name interpolated
function introduction(string){
    //console.log('Hi, my name is ' + string + '.');
    return 'Hi, my name is ' + string + '.';
}

//function returns a phrase with name and language learing
function introductionWithLanguage(name, lang){
    //Hi, my name is Aki and I am learning to program in Ember.js.
    //console.log("Hi, my name is " + name + " and I am learning to program in " + lang + ".");
    return "Hi, my name is " + name + " and I am learning to program in " + lang + ".";
    
}

//function returns a phrase with name and language, if no language provided it will default to JS
function introductionWithLanguageOptional(name, lang){
    if (lang != null){
        //console.log("Hi, my name is " + name + " and I am learning to program in " + lang + ".");
        return ("Hi, my name is " + name + " and I am learning to program in " + lang + ".");
    }
    else{
        //console.log("Hi, my name is " + name + " and I am learning to program in JavaScript.");
        return ("Hi, my name is " + name + " and I am learning to program in JavaScript.");
    }
}

//function introductionWithLanguageOptional(name, language)

/*
introduction("Harry");
introductionWithLanguage("Josh", "C++");
introductionWithLanguageOptional("Steve", "Python");
introductionWithLanguageOptional("Dave");
*/