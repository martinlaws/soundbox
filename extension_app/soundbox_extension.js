// var React = require('react');
// var Sidebar = require('react-sidebar');

var SoundBox = React.createClass({
  displayName: 'SoundBox',

  render: function () {
    return React.createElement(
      'button',
      { onClick: function () {
          alert("ouch! you've clicked me!");
        } },
      'Add song to a box!'
    );
  }
});

// var App = React.createClass({
//   getInitialState: function() {
//     return {sidebarOpen: false};
//   },
//
//   onSetSidebarOpen: function(open) {
//     this.setState({sidebarOpen: open});
//   },
//
//   render: function() {
//     var sidebarContent = <b>Sidebar content</b>;
//
//     return (
//       <Sidebar sidebar={sidebarContent}
//                open={this.state.sidebarOpen}
//                onSetOpen={this.onSetSidebarOpen}>
//         <b>Main content</b>
//       </Sidebar>
//     );
//   }
// });
//
// module.exports = App;

var element = document.createElement('div');
element.style.top = '50px';
element.style.width = '150px';
element.style.height = '500px';
element.style.position = 'fixed';
element.style.right = '0px';
element.style.background = 'red';
document.getElementsByTagName('body')[0].appendChild(element);

ReactDOM.render(React.createElement(SoundBox, null), element);
