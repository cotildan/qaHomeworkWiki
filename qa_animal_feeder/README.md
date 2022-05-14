<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

We have a zoo with four animals in it:

- Alex the Lion
- Marty the Zebra
- Melman the Giraffe
- Gloria the Hippopotamus

We need to make sure that we're feeding them the right foods! Each animal has a
set of food that they like, and we have a list of foods that none of them should
like.

# Instructions

## Setup

After cloning this repository, run the command `npm i`.

You should see `feedTest.test.ts` in the `__tests__` folder; feel free to review
other files, but avoid changing them until after you're done with the
assignment.

Make sure that your tests are working well; you can try the following two lines
of code anywhere in your test file to see that your animals will let you know if
they do (or don't) like the food you're giving them!

```typescript
console.log(alex.feed("meat"));
console.log(alex.feed("shrimp"));
```

Execute the code with `npx jest`, and your console.log should include the
following:

```
Alex the Lion likes meat!
Alex the Lion does not like shrimp!
```

## Testing Liked Foods

Each animal already has a test set up.

- Use a `forEach` or `for` loop for each of the liked foods for each animal!
  - The results string should include "likes"
  - The results string should _not_ include "does not like"

### Expected Results

```
 PASS  src/__tests__/feedTest.test.ts
  feeding animals
    ✓ Alex likes the food we expect (2 ms)
    ✓ Marty likes the food we expect (1 ms)
    ✓ Melman likes the food we expect (1 ms)
    ✓ Gloria likes the food we expect (1 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
```

## Testing Disliked Foods

In each animal's test:

- Use a `forEach` or `for` loop for each bad food!
  - The results string should _not_ include "likes"
  - The results string _should_ include "does not like"

### Expected Results

```
 PASS  src/__tests__/feedTest.test.ts
  feeding animals
    ✓ Alex likes the food we expect (2 ms)
    ✓ Marty likes the food we expect (1 ms)
    ✓ Melman likes the food we expect (1 ms)
    ✓ Gloria likes the food we expect (1 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
```

## Stretch Goal

So far, so good. That said, for really efficient code, you can refactor your
tests! There are a few goals that can help you have some really cool tests.

- Put the `test()`s _into_ your iteration. If you do this, it means that one
  input failing doesn't interrupt ALL of your testing.

Here's an example of how that could work...

```typescript
let list = [
  { name: "one", value: 1 },
  { name: "two", value: 2 },
  { name: "three", value: 3 },
];
list.forEach((item) => {
  test(`We're looking for ${item.name}`, () => {
    expect(item.value).toBeDefined();
  });
});
```

- You could rework the way the data is structured to wrap iteration in other
  iteration, and cut your amount of code WAY down.
  - Less than half the code for a quick check of feedTest!

## Submission

Copy and paste the content of your `feedTest.test.ts` into Canvas to submit this
assignment.

## Solutions

You can find solutions for the assignment, as well as for the stretch goals in
the `solution` branch of this repository.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and
create a pull request so we can review your changes and merge them into the
master repo and branch.

## Copyright

© DevMountain LLC, 2020. Unauthorized use and/or duplication of this material
without express and written permission from DevMountain, LLC is strictly
prohibited. Excerpts and links may be used, provided that full and clear credit
is given to DevMountain with appropriate and specific direction to the original
content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
