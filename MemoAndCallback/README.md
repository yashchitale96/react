Video Ref = https://www.youtube.com/watch?v=0-hl7me5dk4&t=2833s

---

### In-Depth Notes on the Video: Understanding React Hooks — React.memo, useMemo, and useCallback

**Introduction:**
- The video opens with a warm greeting and states the objective: learning three important React hooks — `React.memo`, `useMemo`, and `useCallback`.
- The instructor emphasizes a conceptual approach called the "first thought principle" to deeply understand the hooks without rote memorization.
- A simple React project setup is demonstrated first to explain these hooks in context.

---

#### Basic React Setup and Problem Statement:
- A counter app is created with a state variable `count` incremented by a button click.
- Another component (`Sum`) is implemented to calculate and display the sum of the first N natural numbers (N=1000 in this case).
- The initial flow: 
  - `App` component renders the counter and sum component.
  - Each time the counter changes, React rerenders the entire `App`.
  - This triggers rerender/recalculation of child components like `Sum`.

---

#### Core Problem of Unnecessary Rerenders:
- When `count` increments, the entire `App` reruns, which means:
  - The counter display rerenders.
  - The `Sum` component reruns the expensive sum calculation, even though the sum should always remain the same (since the prop `N` hasn't changed).
- This inefficiency causes performance issues, as unnecessary calculations are performed, leading to lag and wasted memory.

---

#### React.memo: Memoizing Components
- `React.memo` is introduced to optimize components by memoizing their output.
- It prevents child components from rerendering unless their props actually change.
- Example:
  - Wrapping `Sum` component with `React.memo` stops it from rerendering on `count` change when props passed to `Sum` remain identical.
- However, if props change (like passing a new number), `Sum` will rerender appropriately.
- This relies on shallow comparison of props — works well with primitive values like numbers but has caveats with objects.

---

#### useMemo Hook: Memoizing Expensive Calculations
- Heavy computations (like counting prime numbers up to a large N) cause performance lag when recalculated on every rerender.
- `useMemo` hook memorizes the result of an expensive function and recalculates it only when its dependencies change.
- Usage pattern:
  ```js
  const memoizedValue = useMemo(() => expensiveCalculation(number), [number]);
  ```
- When the dependency `number` doesn't change, the expensive function is skipped, and the cached result is reused.
- Practical example: calculating prime numbers count is memoized with `useMemo` and only recomputed when the input number changes.

---

#### useCallback Hook: Memoizing Functions
- Functions are objects in JavaScript, which means new functions are recreated on each render causing unnecessary rerenders down the component tree when passed as props.
- `useCallback` memoizes a function reference, preventing recreation unless dependencies change.
- Usage pattern:
  ```js
  const memoizedCallback = useCallback(() => {
    console.log('Handler');
  }, [dependencies]);
  ```
- This is crucial when passing functions as props to child components wrapped in `React.memo`, so they don't rerender unnecessarily.
- Dependency array works exactly like in `useMemo`: the function only changes when dependencies change.

---

#### Common Pitfalls and Solutions:
- Passing objects or functions as props directly causes shallow comparison to always consider them different because new references are created every render.
- For example, passing an object literal like `{name: 'Rohit', age: 20}` to a memoized component forces it to rerender.
- Solution: Use `useMemo` to memoize such objects and pass them to children to maintain reference equality.
- Similarly, use `useCallback` for functions passed as props to avoid unnecessary rerenders.

---

#### Understanding React's Rendering Behavior:
- React rerenders components when parent rerenders. Without memoization, all children rerender regardless of prop changes.
- Memoization hooks allow React to "remember" previous results and skip redundant renders/calculations.
- This optimization reduces memory allocations and improves smoothness, especially in apps with complex computations or large component trees.

---

### Summary and Takeaways:
- **React.memo**: Memoizes component rendering based on props equality; useful to prevent child rerenders if props don’t change.
- **useMemo**: Memoizes the result of expensive calculations; recalculates only when dependencies change.
- **useCallback**: Memoizes functions; prevents recreation of function objects unless dependencies change, aiding render performance.
- Memoization is crucial for optimizing React apps, allowing components to avoid unnecessary rerenders and costly computations.
- Proper use of dependency arrays in hooks avoids bugs related to stale closures and ensures correct, efficient updates.
- Passing primitives as props is straightforward, but objects and functions require memoization to prevent unnecessary rerenders by reference inequality.
- React’s virtual DOM reconciler works with these hooks to optimize real DOM updates, reducing processing load.

---

In essence, this video thoroughly explains how these three fundamental React hooks contribute to performance optimization by controlling component rerenders and caching expensive calculations or function references, illustrated with practical code examples and explanations.

---

If you want, I can also help with concise summaries, code examples, or practical applications of these hooks!
