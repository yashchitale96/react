intervalRef = useRef(null)

- It is object which has state named current
- It created only once
- It will not re-render and will use the old state

intervalRef = {
    current = '123'
}

### Detailed Notes on React’s useRef Hook and Its Practical Uses

#### 1. What is useRef Hook and Why Do We Need It?
- **useRef** is a React hook that returns a mutable object whose `.current` property can hold any value.
- This value persists across component re-renders without causing the component to re-render when it changes.
- Unlike state variables, changing a `useRef` value does not trigger a UI update, making it ideal for storing mutable values that don’t affect rendering.
- It’s particularly useful for keeping references to DOM elements or mutable variables that need to survive across renders.

#### 2. Stopwatch Example and Initial Issues
- When creating a stopwatch using `setInterval` to increase the timer every second, a common problem arises where the timer stops updating after showing "1".
- This happens due to JavaScript closures capturing the initial value of the timer variable (which was zero) and repeatedly using that value.
- Hence, the incremented timer value is not updated as expected because the callback keeps referring to the stale closed-over value.

#### 3. Understanding JavaScript Closures and the useRef Solution
- A **closure** is when a function “remembers” and accesses variables from its lexical scope even after that scope has finished execution.
- The problem was that the `setInterval` callback closed over the initial time (`0`), never picking up the new values.
- The solution is to use `useRef` to store the interval ID and the timer value because `useRef` object is stable between renders.
- This allows you to always refer to the latest value without triggering re-renders.

#### 4. How useRef Works in the Stopwatch Implementation
- The interval ID is stored in a `useRef` (`intervalIdRef.current`) so that the interval can be cleared properly when the stopwatch is stopped.
- **Start, Stop, Reset** buttons are implemented with handlers:
  - **Start**: Initiates `setInterval` and saves its ID in `useRef`.
  - **Stop**: Calls `clearInterval` using the stored interval ID.
  - **Reset**: Clears the interval and resets the timer to zero.
- Because the ref persists and changes don’t cause re-renders, the stopwatch functions smoothly without stale closure issues.

#### 5. Managing Multiple Intervals and Preventing Issues
- Repeated clicking on the start button causes multiple intervals to run simultaneously, leading to performance problems or app freezing.
- To avoid this, before starting a new interval, the code checks if an interval is already running (`intervalIdRef.current !== null`), and if so, prevents creating another interval.
- This logic ensures only one interval runs at a time.

#### 6. Using useRef in Login Forms for Optimized Rendering
- Instead of using state for inputs like email and password, managing input values using `useRef` prevents excessive re-renders.
- React normally re-renders the component on every keystroke when using `useState` for inputs, which can slow down large forms.
- With `useRef`, the DOM input values are accessed directly, and React is instructed to not re-render on input changes.
- This optimizes performance, especially when dealing with many input fields or complex forms.

#### 7. Controlling a Video Player Using useRef
- The HTML5 video element exposes methods like `play()`, `pause()`, and `currentTime` to control playback.
- To use these methods in React, you need a direct DOM reference which `useRef` provides.
- The video file is put in the `public` folder to avoid it being processed by React’s build system and to reduce unnecessary re-renders.
- Buttons linked to event handlers (`start`, `pause`, `restart`) reference the video element via `useRef` to control playback.
- This illustrates a powerful use case of `useRef` for managing non-React controlled DOM APIs.

#### 8. Advantages of useRef
- Preserves mutable values across re-renders without causing unnecessary UI updates.
- Maintains stable references to DOM elements enabling direct manipulation.
- Helps in managing external APIs like `setInterval`, event listeners, etc., with stable references.
- Improves performance by avoiding redundant rendering cycles.

#### 9. React Re-renders and useRef Behavior
- Normal variables get reset on each re-render, and changing state causes the component to re-render.
- `useRef` creates an object that stays the same throughout renders.
- Updating `.current` does not cause re-render, making it a perfect place to store mutable values that don’t affect the visual output immediately.

#### 10. Further Exploration and Homework
- Implement “skip 10 seconds forward or backward” buttons in the video player to practice DOM control.
- Research why placing videos in the `public` folder works better and how React’s relative paths behave with assets.
- Future lessons will dive deeper into React hooks and form handling using these techniques.

---

### Summary:
This session demonstrated the **power of React’s useRef hook** through practical examples like a stopwatch, login form, and video player. It highlighted issues caused by JavaScript closures, re-renders, and showed how `useRef` offers a way to persist mutable values and DOM references efficiently. The hook is essential for improving performance and handling external imperative APIs within React’s declarative model.

---

These notes aim to give a comprehensive understanding of useRef in React and its practical benefits, providing clarity on key JavaScript concepts like closures and React lifecycle optimizations, all crucial for real-world React development.
