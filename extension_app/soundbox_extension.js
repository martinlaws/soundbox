// var React = require('react');
// var Sidebar = require('react-sidebar');

// var SoundBox = React.createClass({
//   displayName: "SoundBox",
//
//   render: function () {
//     return React.createElement(
//       "div",
//       null,
//       React.createElement(
//         "div",
//         { className: "dropping-box" },
//         "DROP YO TRACKS HERE"
//       ),
//       React.createElement(
//         "button",
//         { onClick: function () {
//             alert("ouch! you've clicked me!");
//           } },
//         "Add song to a box!"
//       ),
//       React.createElement(
//         "button",
//         { onClick: function () {
//             alert("ouch! you've clicked me!");
//           } },
//         "Add song to a box!"
//       )
//     );
//   }
// });

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
element.className = 'soundbox-sidebar';

document.getElementsByTagName('body')[0].appendChild(element);
