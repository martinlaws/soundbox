// var React = require('react');
// var Sidebar = require('react-sidebar');

var SoundBox = React.createClass({
  render: function() {
    return (
      <div className="soundBox">
        Hello, world! I am a SoundBox.
      </div>
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

ReactDOM.render(
  <SoundBox />,
  document.getElementById('soundbox-app')
);


// Fin
