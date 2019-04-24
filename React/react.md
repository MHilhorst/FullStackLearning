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


We use parent classes to summarize tags:
  <React.Element>
    <h1> </h1>
    <div> </div>
  </React.Element>

State is used to figure out what data a component needs:

  class Counter extends Component {
    state = {
      count: 0,
      address: {
        name: "streetname",
        number:10
      }
    }
  };

To render something from the state object in render we use curly braces.
  <span>{this.state.count}</span>

Can use any kind of java expression within these curly braces.

When we want to render a list in React we cant use any templating such as in Angular.
We can however do the following to an array:
  <ul>
    { this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
  </ul>

We pass the map method to the array variable and then use arrow functions to render JSX methods which are converted by Babel to plain javascript. Remember using curly braces within li to actually access the item of the array, otherwise it will just output the string tag between the li tags

Remember dynamic values must be incorperated using curlybraces

If/Else statements need to be done in plain JavaScript
