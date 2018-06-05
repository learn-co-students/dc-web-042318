# Trees

A tree is a popular data structure for solving lots of problems.
- They have representational power. (i.e., they look like some structures we see in the real world)
- They have computational power (they are efficient for looking up, adding, and modifying values).

They look like:

```
          A
        /   \
      B       C
    /   \    /  \
   D     E   F   G
```

## Vocab
- Each _node_ (represented here as A, B, C, D, E, F, G) can have _children_
- most nodes also have a _parent_
- Except for the _root_ (here A), which has no parent

This tree is _'binary'_, i.e. each node has up to 2 children.
(You can have trees with more children per node, they aren't binary)

Each node in the tree might be something like this in javascript:

```js
const a = {
  name: 'A',
  leftChild: b, // assuming that b is the 'B' node
  rightChild: c,
}
```

## What should I do?

We want to write functions for operating on trees, so that we get some practice working with trees.

We'll start with a function that makes nodes.

### `makeNode`

`makeNode` should take in three arguments - a value, a left child, and a right child, and it should return a new node.

```
makeNode('A', {name: 'B'}, {name: 'C'})
// => { name: 'A', leftChild: { name: 'B' }, rightChild: { name: 'C' } }
makeNode('B')
// => { name: 'B' leftChild: undefined, rightChild: undefined }
```

### `printBranches`
We want a function `printBranches` to display all of the values of our tree.

If our tree is

```
          A
        /   \
      B       C
    /   \    /  \
   D     E   F   G
```

And if the root node is in a variable `a`, then `printBranches(a)` should log:

```
A
B
D
E
C
F
G
```

### `printLevels`
Way to go! `printBranches` went through the branches of the tree in order. Now, we want to go through the _levels_ of the tree in order - the whole level before we move on to the next level.

```
A
B
C
D
E
F
G
```

### `find`
We want to write the function `find`, which takes in a node, then searches the below that node in the tree for a node that matches the input

```js
function find(root, name) {
  // some code here
}

// expected return values
find(a, 'B') // => { name: 'B', leftChild: d, rightChild: e }
find(a, 'A') // => { name: 'A', leftChild: b, rightChild: c }
find(b, 'A') // => undefined
```

## Sorted Trees

Our find method, as written, has to (potentially) check every node in the tree. That stinks! If we have lots of data in our tree, finding elements might take a long time.

Computer scientists came up with a solution to this problem a long time ago - sorting! If we keep the nodes in the tree sorted, we can find nodes much faster.

A _Binary Search Tree_ keeps lower values to the left and higher values to the right. So, if we had the values `[1,2,3,4,5,6,7,8,9,10]`, we could store them in the tree:

```
            5
          /   \
        3      7
       / \    / \
     2    4  6   9
    /           /  \
   1           8    10
```

Left, lesser, right, greaterrrrrr

## Binary Search `find`

Let's rewrite our `find` method, but this time, we don't have to search everywhere! We can skip huge sections of the tree, since we can check whether we want to look a the right or left branch from any node.

Write a function `bfind` that, like `find`, takes a node and a value and returns a found node.

## Binary Tree Insert

We can't just go sticking any node anywhere in a Binary Tree. We have to keep the nodes sorted! Write a function `insert` that takes a node (the root of the tree) and a value, and inserts a new node into the tree with that value.

If the value is already present in the tree, don't add a new value!

## Advanced

### Balance
If you add nodes in the wrong order, you could get a tree that isn't very well balanced, like:
```
1
 \
  2
   \
    3
     \
      4
       \
        5
```

Can you write a method that takes a root node and rebalances the tree?

### More

- Size
- Max Depth
- Equals (does this tree have the same elements as another tree?)
- Check (is this tree a binary search tree, i.e. are the values sorted?)
- Create from array
- Delete (removes a node)
