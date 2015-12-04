var TomatoButton = require('./button.jsx');

module.exports = {
  renderInCard: function() {
    $(".other-actions").find(".u-clearfix").append("<div class='js-pomodoro-harvest-holder'></div>")
    React.render(<TomatoButton />, $('.js-pomodoro-harvest-holder')[0]);
  }  
}

