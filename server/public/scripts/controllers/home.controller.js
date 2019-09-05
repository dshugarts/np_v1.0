
myApp.controller('HomeController', ['$location', function($location) {
    // console.log('LandingController created');
    var self = this;

    self.toDashboard = function() {
        $location.url('/dashboard')
      } // end toLogin

      self.toggle = function() {
          self.sidebar.toggleClass('active');
      }

  }]);