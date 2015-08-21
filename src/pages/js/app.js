var RQ = RQ || {},
  BG = chrome.extension.getBackgroundPage();

RQ.Mixins = RQ.Mixins || {};

RQ.Templates = {
  RULE_CARDS_TEMPLATE: $('#rule-cards-template').html(),
  REPLACE_RULE_EDITOR_TEMPLATE: $('#replace-rule-editor-template').html(),
  HEADERS_EDITOR_TEMPLATE: $('#headers-editor-template').html()
};

RQ.TemplateHelpers = RQ.TemplateHelpers || {};
RQ.HandlebarHelpers = RQ.HandlebarHelpers || {};

RQ.init = function() {
  this.Models = {};

  this.Collections = {};

  this.showView = function(view, options) {
    if (this.currentView) {
      this.currentView.close();
    }

    this.currentView = view;
    this.currentView.render(options);

    $('#content').html(this.currentView.el);
  };

  this.router = new RQ.Router();

  Backbone.history.start();
};

Backbone.View.prototype.close = function() {
  this.remove();
  this.unbind();
};