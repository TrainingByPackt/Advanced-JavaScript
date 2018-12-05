function tagFunction( strings ){ console.log( strings.raw[0] ); }
tagFunction`This is line 1. \n This is line 2.`
// Expected output: 'This is line 1. \n This is line 2.' The characters '\' and 'n' are not parsed into a newline character
