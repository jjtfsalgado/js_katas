const str = "I.was.going.fishing.that.morning.at.ten.o'clock";



function code(t) {
    const l = t.length;


    let n = 1;
    while((n * n) < l){
        t += t.charCodeAt(10);
        ++n;
    }

    console.log(t)
}


function decode(s) {

}

const codedS = code(str);

console.log(codedS)

// decode(codedS);

//code -> "c.nhsoI\nltiahi.\noentinw\ncng.nga\nk..mg.s\n\voao.f.\n\v'trtig"

//
// A squared string has n lines, each substring being n characters long: For example:
//
//     s = "abcd\nefgh\nijkl\nmnop" is a squared string of size 4.
//
// We will use squared strings to code and decode texts. To make things easier we suppose that our original text doesn't include the character '\n'.
//
// Coding
// Input:
//
//     a text t of length l.
//     Consider the smallest integer n such that n * n be greater or equal to l.
//     Complete t with the char of ascii code 11 (we suppose that this char is not in our original text) until the length of t is n * n.
//     From now on we can transform the new t in a squared string s of size n by inserting '\n' where needed.
//     Apply a clockwise rotation of 90 degrees to s: that's it for the coding part.
// Decoding
// Input:
//
//     a squared string s resulting from the coding
// Apply a counter-clockwise rotation of 90 degrees to s
// Do some cleaning to have the original text t
// You can see clockwise rotation of 90 degrees: http://www.codewars.com/kata/56dbeec613c2f63be4000be6 You can see counter-clockwise rotation of 90 degrees: http://www.codewars.com/kata/56dbf59b0a10feb08c000227
//
//     Example:
//         t = "I.was.going.fishing.that.morning.at.ten.o'clock"
//
// code(t) -> "c.nhsoI\nltiahi.\noentinw\ncng.nga\nk..mg.s\n\voao.f.\n\v'trtig"
//
// decode(code(t)) == "I.was.going.fishing.that.morning.at.ten.o'clock"
//
// (Dots indicate spaces since they are quite invisible).
//
// Notes:
//     Swift : character 11 is replaced by "\u{F7}" (ie "÷" - alt 246 -)
// Ocaml : character 11 is replaced by '&'
// Fortran: Your returned string for both functions are not permitted to contain redundant leading/trailing whitespace. In return, you may safely assume that all input strings passed into your function(s) will not contain redundant leading/trailing whitespace, i.e. you do not and should not trim the input string before operating on it
// Don't use this coding to keep your secrets:-)
