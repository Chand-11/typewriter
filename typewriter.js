const input = function(input,time) {
  let sec = time;
  for (const i of input) {
  setTimeout(() => {process.stdout.write(i);  }, sec);
  sec +=100;  ///delay time by incrementing +100
}
setTimeout(()=>{console.log();},sec); // adding a newline character at the end of the animation.

};
input("hi how are you", 1000);