# @rekajs/core

## 0.1.5

### Patch Changes

- [`c1aba8e`](https://github.com/prevwong/reka.js/commit/c1aba8ee761cc4969a18817289604392504cb5ed) Thanks [@prevwong](https://github.com/prevwong)! - Fix memory leaks

- [`2203e89`](https://github.com/prevwong/reka.js/commit/2203e8956b9f26c49bedabc3b6a4b8180a449be0) Thanks [@prevwong](https://github.com/prevwong)! - Update Extension type

- [`61435db`](https://github.com/prevwong/reka.js/commit/61435dbfb88326eabe7857e43318a45459b08343) Thanks [@prevwong](https://github.com/prevwong)! - Inject package version to browser window

- Updated dependencies [[`61435db`](https://github.com/prevwong/reka.js/commit/61435dbfb88326eabe7857e43318a45459b08343)]:
  - @rekajs/utils@0.1.2

## 0.1.4

### Patch Changes

- [`b5aec26`](https://github.com/prevwong/reka.js/commit/b5aec26d55685cbc3ade66a16413ef7bf3f46e4a) Thanks [@prevwong](https://github.com/prevwong)! - Add CJS bundle

- Updated dependencies [[`b5aec26`](https://github.com/prevwong/reka.js/commit/b5aec26d55685cbc3ade66a16413ef7bf3f46e4a)]:
  - @rekajs/utils@0.1.1

## 0.1.3

### Patch Changes

- [`1cc0cfb`](https://github.com/prevwong/reka.js/commit/1cc0cfb19cf75f55bc61ba06d6b9b32e503d13f6) Thanks [@prevwong](https://github.com/prevwong)! - Remove unnecessary options for `reka.watch()`

- [`ea0a075`](https://github.com/prevwong/reka.js/commit/ea0a075059557a7143ffeae7edb632856896f137) Thanks [@prevwong](https://github.com/prevwong)! - Fix `@each` directive bugs

- [`d8cc124`](https://github.com/prevwong/reka.js/commit/d8cc124df6ec9836d996b9eb533fa6b180197e83) Thanks [@prevwong](https://github.com/prevwong)! - Fix `Observer` not automatically transforming newly inserted `Type` into Mobx observables.

  For example, given the following template where `each` is initially null:

  ```tsx
  const template = t.tagTemplate({
    tag: 'div',
    props: {},
    children: [],
    each: null,
  });
  ```

  Then, if we were to set `each` to a new `ElementEach` type object:

  ```tsx
  template.each = t.elementEach({
      ...
  })
  ```

  The above `ElementEach` should automatically be made into a Mobx observable.

## 0.1.2

### Patch Changes

- [#13](https://github.com/prevwong/reka.js/pull/13) [`dd95dd2`](https://github.com/prevwong/reka.js/commit/dd95dd26784147dacdb6feb5cff421da7b53021e) Thanks [@prevwong](https://github.com/prevwong)! - Fix classlist not cascading to components

- [`1fcfc21`](https://github.com/prevwong/reka.js/commit/1fcfc2155c15c4038fbdbf90167460cff8ab9fc5) Thanks [@prevwong](https://github.com/prevwong)! - Add `DisposableComputation` to dispose keepAlive computed values to prevent memory leaks.

- [#15](https://github.com/prevwong/reka.js/pull/15) [`170c6e3`](https://github.com/prevwong/reka.js/commit/170c6e32842c56d20c09d675b33e7b5cf4e11fb9) Thanks [@prevwong](https://github.com/prevwong)! - Rename External Globals => External Functions

## 0.1.1

### Patch Changes

- da3c4c8: fix: peer deps
  fix: ts error
  fix: sync on update frame props
  feat: improve environment store (#7)
  fix: add missing function scope
  fix: ensure mutations happen within .change() callback
  feat: catch side effect error
  feat: improved externals separation (#6)
  hotfix: alias variable in element @each directive
  feat: support expressions as template iterator (#5)
  fix: add error boundary for invalid iterator (#4)
  fix: resolver cleanup deleted global bindings (#3)
  fix: stringify each template directive (#1)

## 0.1.0

### Patch Changes

- bcdb728: - Improved APIs and better typings
  - Separate shared utils package
  - Update Lezer grammer for Codemirror Extension
- Updated dependencies [bcdb728]
  - @rekajs/types@0.1.0
  - @rekajs/utils@0.1.0
