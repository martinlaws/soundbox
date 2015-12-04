module.exports = React.createClass({

  getInitialState: function() {
    return {
      timerRunning: false,
      timerStartTime: null,
      elapsed: 0,
      totalTime: 60 * 25 // 25 minutes
    }
  },

  startTimer: function() {
    this.setState({
      timerRunning: true,
      timerStartTime: Date.now()
    });

    this.timerInterval = setInterval(this.tick, 1000)

    var $harvestButton = $('.harvest-timer')
    var groupId = $harvestButton.data().group.id
    var itemId = $harvestButton.data().item.id

    //window.postMessage({name: "tomato:startTimer", groupId: groupId, itemId: itemId}, "*");
    $('.harvest-timer')[0].click()

  },

  stopTimer: function() {
    this.setState({
      timerRunning: false
    });

    clearInterval(this.timerInterval);

    var $harvestButton = $('.harvest-timer')
    var groupId = $harvestButton.data().group.id
    var itemId = $harvestButton.data().item.id

    $('.harvest-timer')[0].click()
    
    //window.postMessage({name: "tomato:stopTimer", groupId: groupId, itemId: itemId}, "*");

  },

  tick: function() {
    if(this.timeLeft < 1) {
      this.stopTimer();
    }
    else
      this.setState({
        elapsed: new Date() - this.state.timerStartTime
      });
  },

  render: function() {
    var elapsed = Math.round(this.state.elapsed / 1000)
    this.timeLeft = this.state.totalTime - elapsed;

    var minutes = parseInt(this.timeLeft / 60, 10);
    var seconds = parseInt(this.timeLeft % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var displayText = minutes + ":" + seconds;

    if( this.state.timerRunning )
      return (
        <a className="button-link" style={{background: 'red', color: 'white'}} onClick={this.stopTimer}>
          <img src={ chrome.extension.getURL('build/images/tomato_icon.png') } /> Stop ({displayText})
        </a>
      )
    else
      return (
        <a className="button-link" onClick={this.startTimer}>
          <img src={ chrome.extension.getURL('build/images/tomato_icon.png') } /> Start Timer
        </a>
      )
  } 
  
});