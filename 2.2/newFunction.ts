export function myFunction(mynum: number): string {
    //returns the word 'true' if I pass the function the number 5
    if (mynum == 5){
        return 'true'

    //returns the word 'false' if I pass in a number less than 5
    } else  if (mynum < 5 && mynum >=0){
        return 'false'

    //returns the word 'big' if I pass in a numbewr greater than 5 
    } else if (mynum > 5 ){
        return 'big'

    //returns the word 'negative' if a negative number is passed in
    }else 
        return 'negative'

}