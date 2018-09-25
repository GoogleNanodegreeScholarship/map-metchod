let array = ['hello', 'world']

console.log(
  array.map( x => x ),
  array.map( (x) => (x) ),
  array.map( x => (x + ' third console') ),
  array.map( x => { return x } ),
  array.map( (x, index) => (index) ),
  array.map( (x, index) => ( index === 0 ? x+array[index+1] : x ) )
)


let arr = []
for(let i = 0; i < array.length; i++) {
  arr.push(array[i] === 0 ? array[i] + array[i + 1] : array[i])
}

console.log(arr + ' from for loop output')
var i = 0;
while( i < array.length ) {
  console.log(array[i] + ' from while loop output');
  i++;
}

// ['helloworld', 'world']
