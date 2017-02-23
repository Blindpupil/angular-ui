(function () {  //IIFE
'use strict';

var agentsList = [
    { agent_name: "Marika Saas", agent_url: "#"},
    { agent_name: "Martin Tiis", agent_url: "#"},
    { agent_name: "Freddy Lools", agent_url: "#"}
    ];

var pagesList = [
  { page_url: "https://www.facebook.com/TeliaEesti/", page_status: "Active", page_label: "warning", page_activity: 85 },
  { page_url: "https://www.facebook.com/TeliaRussia/", page_status: "Active", page_label: "warning", page_activity: 40 },
  { page_url: "https://twitter.com/VunkLabs", page_status: "Inactive", page_label: "danger", page_activity: 0 }
  ];


angular.module('HypesiloApp', [])
.controller('DisplayAgentsController', DisplayAgentsController)
.controller('PagesController', PagesController)
.service('ShowAvAgentsService', ShowAvAgentsService)
.service('ShowPagesService', ShowPagesService);

//here are the controllers that take whatever happened in the logic and implements it in the view
DisplayAgentsController.$inject = ['ShowAvAgentsService'];
function DisplayAgentsController(ShowAvAgentsService) {
  var list = this;

  list.agents = ShowAvAgentsService.getAgents();

}

PagesController.$inject = ['ShowPagesService'];
function PagesController(ShowPagesService) {
  var page = this;
  
  page.data = ShowPagesService.getPages();
  
}



//the business logic is defined below
function ShowAvAgentsService() {
  var service = this;   //since it's a function constructor we can use 'this'. Now instead of 'this' every time we'll call it service

  // List of shopping items
  var agents = agentsList;

  service.getAgents = function () {  //this one exposes the internal items array to the outside
    return agents;
  };
}

function ShowPagesService() {
  var service = this;
  
  var data = pagesList; 
  
  service.getPages = function() {
    return data;;
  };
}

})();
