// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require react
//= require react_ujs
//= require components
//= require_tree .

// function SimpleSimon(props) {
//   return (
//       <p>
//         <em>{props.name}</em>
//         <strong>Page</strong>
//       </p>
//     )
// }
var SoundBox = React.createClass({

// each box has: title, tracklist, user, date_created
// will also have icons for send, delete, add_track
// each track has: title, artist, send, delete

  render: function() {
    var tracks = [ { title: "Bing and David", artist: "Bing Crosby" },
                    { title: "Jingle Bells", artist: "Martin Laws"},
                    { title: "Highway 61 Revisited", artist: "Ke$ha"}]

    var trackList = tracks.map(function(track) {
      return (
          <Track title={track.title} artist={track.artist} />
      )
    });
    return (
      <ul>
        {trackList}
      </ul>
    )
  }

  render: function() {
    return (
      <div>
        <SeafoamButton
          message={ this.state.message }
          handleClick={ this.changeMessage }
      </div>
    )
  }
});

var Track = React.createClass({

// props: title, artist, length
  render: function(props) {
    return (
        <li>{this.props.title} {this.props.artist}</li>
    )
  }



  // getInitialState: function() {
  //   return {count: 100};
  // },

  //   // return (
  //   //   <li>{this.props.name})</li>
  //   // ),
  // // componentDidMount: function() {
  // //   var _this = this;

  // //   setInterval(function() { _this.setState({count: _this.state.count - 1}) }, 1000);
  // // },

  // render: function() {
  //   return (
  //     <section>
  //       <h1>My First Reacting!</h1>
  //       <SimpleSimon name={'Timmy ' + this.state.count + ' '} />
  //      </section>
  //   );
  // }
});

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(<SoundBox />, document.getElementById('app'));
});