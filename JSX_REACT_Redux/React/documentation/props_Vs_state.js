/**
 * 
 * 

Use STATE to store the data your current page needs in your controller-view.

Use PROPS to pass data & event handlers down to your child components.

These lists should help guide you when working with data in your components.

Props

1) are immutable, props are read only, are sent from the parent to the children comp and the children comp cannot make any changes to the props
2) which lets React do fast reference checks
3)are used to pass data down from your view-controller
4)your top level component
5)have better performance
6)use this to pass data to child components, React’s data flow between components is uni-directional (from parent to child only)

State
1) State is the local state of the component which cannot be accessed and modified outside of the component. 
It's equivalent to local variables in a function.

2)should be managed in your view-controller
3)is mutable, state can be modified using this.setState
4)should not be accessed from child components
5)pass it down with props instead
6) the state object is initialized in the constructor
7) State can only be used in class component
 */