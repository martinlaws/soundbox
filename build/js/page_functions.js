window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  console.log(event);

  if(event.data.name && event.data.name == "tomato:startTimer")

    HarvestPlatform.setTimer({
      group: { id: event.data.groupId },
      item: { id: event.data.itemId }
    });
  else if (event.data.name && event.data.name == "tomato:stopTimer")
    HarvestPlatform.stopTimer({
      group: { id: event.data.groupId },
      item: { id: event.data.itemId }
    });

}