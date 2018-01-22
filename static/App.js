const contentNode = document.getElementById('contents');

const continents = ['china', 'japan', 'California'];
const message = continents.map(c => `Hello ${c}`).join(' ');
var component = React.createElement(
  'h1',
  null,
  message
); // A simple component, written in JSX

ReactDOM.render(component, contentNode); // Render the component inside the content Node