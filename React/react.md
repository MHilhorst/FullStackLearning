# React

What exactly is React?

React is meant to build components that are reusable.

There is 1 main component and is called the App and is built out of several child components. A child component can have its own child components again.

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

The basic setup of a component can be seen as follow:

  class Tweet {
    state = {};
    render() {

    }

  }

React.Component (subclasses):

  class ShoppingList extends React.Component {
    render() {
      return (

        <div className="shopping-list">
        <h1> Shopping List for {this.props.name}</h1>
        </div>
        );
    }

  }
  // This can be used with <ShoppingList name="Mark" />

ShoppingList is a React component class that takes in parameters (props) This is rendered as a display.

Render method returns a description of what you want to see on the screen. Render returns a React element which is a lightweight description of what to render.

The weird thing of React is that in the render() we return HTML markup however, it is not a string this is not a type that is available in JS, This is called JSX. Babel will take this JSX and convert it to plain javascript that browsers can understand.

So this is JSX:
  const element = <h1>Hello World</h1>;

In Babel (to plain javascript):
  var element = React.createElement(
    "h1",
    null,
    "Hello World"
    );
