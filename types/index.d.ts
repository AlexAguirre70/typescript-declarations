declare module 'lodash' {
// the multiply method
    function multiply(num1:number,num2:number):number
// generic type reverse function
    function reverse<Type>(arr:Type[]):Type[]
// Drop right function
    function dropRight (arr:(string |number)[],dropped:number):(string | numnber)[]
}
