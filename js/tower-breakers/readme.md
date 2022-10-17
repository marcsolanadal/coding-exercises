# Tower breakers

The problem is really poorly layed out in HackerRank.

At the end the solution that passes the tests is,

```js
if (n % 2 === 0 || m === 1) {
    return 2;
} else {
    return 1;
}
```

I was solving it by just creating a tree of all the different solutions and having
the two agents play the actual game.
