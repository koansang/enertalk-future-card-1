# Stateless or Stateful Component

### Stateless
Component 내에 state or [refs](https://facebook.github.io/react/docs/more-about-refs.html)가 없는 경우
`React.Component` class extended component 선언
```jsx
function Hello({ greeting }) {
    return (
        <div>{greeting}</div>
    );
}
```


### Stateful
Component 내에 state or refs가 있는 경우
```jsx
class Hello extends React.Component {
    // Handle life cycles
    // Add helper methods
    // ...
    render() {
        return (
            <div>{this.props.hello}</div>
        );
    }
}
```


### References
* [airbnb style guide](https://github.com/airbnb/javascript/tree/master/react#class-vs-reactcreateclass-vs-stateless)
* [react documentation](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions)
