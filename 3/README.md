# Challenge 3 - Dinner Dating Disaster 

## Description
It’s the Christmas party at the BBC and people are working out who they want to take as a date! For a set of men {A,B,…,Z} and a set of women {a,b,...,z} they have a preference table - A would prefer to go with b, but would be satisfied with going with c; c would prefer to go with B, but would be ok to go with C, etc.

Matches are considered unstable if there exists a pair who likes each other more than their current date. The challenge is then to construct a stable set of dates, given their preferences.

## Input Description
A file containing a json object with key being the id of a person (uppercase for men, lowercase for women), and value is an array of identifiers for their preference for of the members of the other set.

Eg.
```js
{
    'A': ['b', 'c', 'a'],
    'B': ['b', 'a', 'c'],
    'C': ['c', 'a', 'b'],
    'a': ['C', 'B', 'A'],
    'b': ['A', 'C', 'B'],
    'c': ['A', 'C', 'B']
}
```

## Output Description
You'll emit the list of pairs that satisfy the constraints.

Eg.
```
A: b
B: a
C: c
```

## Points
This challenge is worth 20 points.
