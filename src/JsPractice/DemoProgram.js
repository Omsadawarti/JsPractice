let obj = {
  om: 12,
  akanksha: 45,
  sankalp: 64,
  badak: 90,
};

// for in loop
for (let a in obj) {
  console.log(`Name: ${a} | Marks: ${obj[a]}`);
}

// for of loop (only applied on iterable objects)
for (let b of "Om Mahesh Sadawati") {
  console.log(b);
}
