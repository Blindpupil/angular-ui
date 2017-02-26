(function () {  //IIFE
'use strict';

var todayStatsList = [
  { ongoing: 24,  sales: 16, other: 8 }
  ];

var agentsList = [
    { agent_name: "Marika Saas", agent_url: "#" },
    { agent_name: "Martin Tiis", agent_url: "#" },
    { agent_name: "Freddy Lools", agent_url: "#" }
    ];

var pagesList = [
  { page_url: "https://www.facebook.com/TeliaEesti/", page_status: "Active", page_label: "warning", page_activity: 85 },
  { page_url: "https://www.facebook.com/TeliaRussia/", page_status: "Active", page_label: "warning", page_activity: 40 },
  { page_url: "https://twitter.com/VunkLabs", page_status: "Inactive", page_label: "danger", page_activity: 0 }
  ];


angular.module('HypesiloApp', [])
.controller('DisplayStatsController', DisplayStatsController)
.controller('DisplayAgentsController', DisplayAgentsController)
.controller('PagesController', PagesController)
.controller('TagsMakerController', TagsMakerController)
.controller('TagsShowController', TagsShowController)
.service('ShowDataService', ShowDataService)
.service('TagsService', TagsService);

//here are the controllers that take whatever happened in the logic and implements it in the view
DisplayStatsController.$inject = ['ShowDataService'];
function DisplayStatsController(ShowDataService) {
  var stats = this;
  
  stats.today = ShowDataService.getTodayStats();
  
}


DisplayAgentsController.$inject = ['ShowDataService'];
function DisplayAgentsController(ShowDataService) {
  var list = this;

  list.agents = ShowDataService.getAgents();

}

PagesController.$inject = ['ShowDataService'];
function PagesController(ShowDataService) {
  var page = this;
  
  page.data = ShowDataService.getPages();
  
}


TagsMakerController.$inject = ['TagsService'];
function TagsMakerController(TagsService) {
  var tagAdder = this;
  tagAdder.tag_name = "";
 
 tagAdder.addTag = function() {
   TagsService.addTag(tagAdder.tag_name);
 };
}

TagsShowController.$inject = ['TagsService'];
function TagsShowController(TagsService) {
  var showTag = this;
  
  showTag.tags = TagsService.getTags();
  
  showTag.removeTag = function (tagIndex) {
    TagsService.removeTag(tagIndex);
  };
}


//the business logic is defined below
function ShowDataService() {
  var service = this;   
  
  // Lists
  var today = todayStatsList;
  
  var agents = agentsList;
  
  var data = pagesList;
  
    
  service.getTodayStats = function() { //this exposes the internal items array to the outside
    return today;
  };
  
  service.getAgents = function () {  
    return agents;
  };
  
  service.getPages = function() {
    return data;
  };
  
}

//For the tags I'm adding the add tag functionality, not using a pre-existing database
function TagsService() {
  var service = this;
  
  var tags = [];
  
  //tag_activity parameter needs to be included later
  service.addTag = function (tag_name) {
    var tag = {
      name: tag_name
    };
    tags.push(tag);
  };
  
  service.removeTag = function (tagIndex) {
    tags.splice(tagIndex, 1);
  };
  
  service.getTags = function () {
    return tags;
  };
  
}

})();
