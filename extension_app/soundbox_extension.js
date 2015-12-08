// var React = require('react');
// var Sidebar = require('react-sidebar');

var SoundBox = React.createClass({
  displayName: "SoundBox",

  render: function () {
    return React.createElement(
      "div",
      { className: "soundBox" },
      "Hello, world! I am a SoundBox."
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

ReactDOM.render(React.createElement(SoundBox, null), document.getElementById('soundbox-app'));

// Fin
