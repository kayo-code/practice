/*月を1〜12の整数として指定すると、その月が属する四半期に整数として返されます。
例：月2（2月）は第1四半期の一部です。6月（6月）は第2四半期の一部です。11か月目（11月）は第4四半期の一部です。
*/
const quarterOf = (month) => {
    // Your code here
   if( 1 <= month < 4){
    return 1;
    }else if( 4 <= month < 6 ){
      return 2;
    }else if( 6 <= month < 9){
      return 3;
    }else{
      return 4;
  }
  }
/*
入力されたmonthが、1~3,4~6,7~9,10~12 の時、
return 1; return 2; return 3; return 4;
と返せばよいとイメージしたができていない、、、
 */
