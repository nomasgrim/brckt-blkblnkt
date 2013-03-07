#### _Cliff Notes, VML COE [cbarendsen@vml.com]_
## []

### Overview
> Short practice using meteor with d3 package. Goal is to setup a local environment. Push to heroku and maintain repo with GitHub.

### Constant Region
> A constant region is invoked using the {{#constant}} block helper. It’s purpose is to prevent Meteor from re-rendering the DOM elements when its reactive data sources change. This is useful when using third-party widgets or libraries that manage their own DOM elements — think Google Maps, or in our case, d3. Meteor won’t handle the rendering of the timeline. Instead, Meteor will pass the data along to d3 which will do the work for us (after we supply it with some logic). You can also see that I’ve included some basic attributes and elements that will remain constant throughout the application, including the current time indicator line.

