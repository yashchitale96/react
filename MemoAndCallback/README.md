This video provides a deep dive into **React performance optimization** techniques, focusing on preventing unnecessary component re-renders. Here are the comprehensive notes on the key hooks discussed:

1. React.memo
* **Purpose:** Prevents a functional component from re-rendering if its props haven't changed.
* **How it works:** It performs a **shallow comparison** of the incoming props. If the props are identical to the previous render, it reuses the last rendered output, skipping the re-render of that component entirely.
* **Use Case:** Useful when a parent component re-renders frequently, but its children do not need to update because their inputs (props) remain constant.

2. useMemo
* **Purpose:** Caches the result of an **expensive calculation** across renders.
* **How it works:** It takes a callback function and a dependency array. The function executes only when one of the dependencies changes. Otherwise, it returns the stored (memoized) value.
* **Benefit:** Prevents heavy logic (like complex loops or data processing) from running on every single render, which avoids UI "lag" (26:48).

3. useCallback
* **Purpose:** Memoizes a **function definition** so that it remains the same reference across re-renders.
* **Why it's needed:** In JavaScript, functions are objects. Every time a component re-renders, any function defined inside it is recreated as a new object reference, which can trigger child components (wrapped in `React.memo`) to re-render unnecessarily.
* **Dependency Array:** Like `useMemo`, it only recreates the function if the items in the dependency array change.

4. Handling Objects and Functions as Props
* **The Challenge:** Passing objects or functions directly as props to a memoized component will always cause a re-render because, in JavaScript, every new object/function has a unique reference.
* **The Solution:** Use `useMemo` to memoize the object or `useCallback` to memoize the function before passing them as props. This ensures the prop reference remains stable across renders, allowing `React.memo` to work effectively.



--------------------------------------------------------Difference between useMemo and useCallback ---------------------------------------------------------

The fundamental difference lies in **what** they memoize (remember) across component re-renders:

*   **useMemo:** Primarily used to cache the **result of a calculation** (a value, number, object, or array). It prevents expensive functions from running repeatedly on every render

*   **useCallback:** Specifically used to memoize a **function definition**. Because functions are objects in JavaScript, a new reference is created every time a component re-renders. `useCallback` keeps the function reference stable, which is crucial when passing functions as props to components wrapped in `React.memo`

**Key Takeaways:**
*   Use **useMemo** when you want to store a value to avoid heavy computation.
*   Use **useCallback** when you need a stable function reference to prevent unnecessary child component re-renders.
*   Both hooks use a **dependency array** to determine when to re-run the calculation or redefine the function (31:05, 38:36).