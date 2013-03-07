if (Meteor.isClient) {
  Template.hello.greeting = function () {
    d3.select("body").selectAll("p")
        .data([4, 8, 15, 16, 23, 42])
      .enter().append("p")
        .text(function(d) { return "I’m number " + d + "!"; });
    d3.selectAll("p")
        .data([4, 8, 15, 16, 23, 42])
        .style("font-size", function(d) { return d + "px"; })
        .style("color", function() {return "hsl(" + Math.random() * 360 + ",100%,50%)";});
    
    return "Welcome to brckt-blkblnkt.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
