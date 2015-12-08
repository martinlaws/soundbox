// var React = require('react');
// var Sidebar = require('react-sidebar');

var DropBox = React.

var SoundBox = React.createClass({
  render: function() {
    return (
      <div>
        <div className="dropping-box">
          DROP YO TRACKS HERE
        </div>
        <button onClick={ function() {
            alert("ouch! you've clicked me!")
          } } >
          Add song to a box!
        </button>
        <button onClick={ function() {
            alert("ouch! you've clicked me!")
          } } >
          Add song to a box!
        </button>
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

var element = document.createElement('div');
element.className = 'soundbox-sidebar';

document.getElementsByTagName('body')[0].appendChild(element);

ReactDOM.render(
  <SoundBox />,
  element
);
