intervalRef = useRef(null)

- It is object which has state named current
- It created only once
- It will not re-render and will use the old state

intervalRef = {
    current = '123'
}