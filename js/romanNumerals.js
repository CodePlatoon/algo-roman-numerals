exports.toRoman = function(num) 
{

  var lookup = {'M':1000,
                'CM':900,
                'D':500,
                'CD':400,
                'C':100,
                'XC':90,
                'L':50,
                'XL':40,
                'X':10,
                'IX':9,
                'V':5,
                'IV':4,
                'I':1}, // lookup array
  roman = ''; // empty string 

  if(num<=0)
  {
    console.log('Please enter an Arabic number greater than 0!!')
  }

  // if(num>3000)
  // {
  //   console.log('Anything greater than 3000 might not be accurately presented now!!!')
  // }

  else
  {
    for ( i in lookup ) 
    {
      while ( num >= lookup[i] ) // initiate while loop 
      {
        roman += i;
        num -= lookup[i]; // need this to get out of while loop 
      }
    }
  return roman;
  }
  


};




