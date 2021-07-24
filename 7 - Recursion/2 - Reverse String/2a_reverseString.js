function reverseString(str) {
    // this is the Terminal Case that will end the recursion
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
        /* how it works: 
                        function(str)         .substr(1) + .charAt(0)
        1st Call:       ('Hello')             ('ello')     'h'
        2nd Call:       ("ello")              ("llo")      'e'                        
        3rd Call:       ('llo')               ('lo')       'l'          
        4th Call:       ('lo')                ('o')        'l'          
        5th Call:       ('o')                 ('')         'o'          
        */

        // once stored, they will be returned with the o on top of the call-stack
        // call stack is where the values are stored & being pushed 
        
    }
}

console.log(reverseString("when"));