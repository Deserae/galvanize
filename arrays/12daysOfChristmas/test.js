 //   1) returns one day of Christmas
 //   2) returns two days of Christmas
 //   3) returns three days of Christmas
 //   4) returns four days of Christmas
 //   5) returns five days of Christmas
 //   returns 'I got coal for Christmas' if there are 0 or undefined arguments passed in
 //   uses template strings

// On the 1st day of Christmas my true love gave to me, a partridge in a pear tree
// On the 2nd day of Christmas my true love gave to me, two turtle doves and a partridge in a pear tree
// On the 3rd day of Christmas my true love gave to me, three french hens two turtle doves and a partridge in a pear tree
// On the 4th day of Christmas my true love gave to me, four calling birds three french hens two turtle doves and a partridge in a pear tree
// On the 5th day of Christmas my true love gave to me, five golden rings four calling birds three french hens two turtle doves and a partridge in a pear tree


var test = require('tape');
 
var lib = require("./")

test('returns one day of Christmas', function (t) {
    t.plan(2);

    var something = lib.daysOfChristmas(0)
    t.equal('I got coal for Christmas', something)

    var something2 = lib.daysOfChristmas(undefined)
    t.equal('I got coal for Christmas', something2)
});

test('returns one day of Christmas', function (t) {
    t.plan(1);

    var something = lib.daysOfChristmas(1)
    t.equal('On the 1st day of Christmas my true love gave to me, a partridge in a pear tree', something)
});


test('returns two days of Christmas', function (t) {
    t.plan(1);

    var something = lib.daysOfChristmas(2)
    t.equal('On the 1st day of Christmas my true love gave to me, a partridge in a pear tree\nOn the 2nd day of Christmas my true love gave to me, two turtle doves and a partridge in a pear tree', something)
});

test('returns two days of Christmas', function (t) {
    t.plan(1);

    var something = lib.daysOfChristmas(3)
    t.equal('On the 1st day of Christmas my true love gave to me, a partridge in a pear tree\nOn the 2nd day of Christmas my true love gave to me, two turtle doves and a partridge in a pear tree\nOn the 3rd day of Christmas my true love gave to me, three french hens two turtle doves and a partridge in a pear tree', something)
});

test('returns two days of Christmas', function (t) {
    t.plan(1);

    var something = lib.daysOfChristmas(4)
    t.equal('On the 1st day of Christmas my true love gave to me, a partridge in a pear tree\nOn the 2nd day of Christmas my true love gave to me, two turtle doves and a partridge in a pear tree\nOn the 3rd day of Christmas my true love gave to me, three french hens two turtle doves and a partridge in a pear tree\nOn the 4th day of Christmas my true love gave to me, four calling birds three french hens two turtle doves and a partridge in a pear tree', something)
});

test('returns two days of Christmas', function (t) {
    t.plan(1);

    var something = lib.daysOfChristmas(5)
    t.equal('On the 1st day of Christmas my true love gave to me, a partridge in a pear tree\nOn the 2nd day of Christmas my true love gave to me, two turtle doves and a partridge in a pear tree\nOn the 3rd day of Christmas my true love gave to me, three french hens two turtle doves and a partridge in a pear tree\nOn the 4th day of Christmas my true love gave to me, four calling birds three french hens two turtle doves and a partridge in a pear tree\nOn the 5th day of Christmas my true love gave to me, five golden rings four calling birds three french hens two turtle doves and a partridge in a pear tree', something)
});

