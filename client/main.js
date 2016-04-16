import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

import { Wishes } from '../imports/api/wishes.js';

Template.wishesform.onCreated(function() {

});

Template.wishesform.helpers({
  wishes() {
    return Wishes.find({});
  },
});



Template.wishesform.events({
  'click .wishsubmit'(event, instance) {
  	var wishValue = $('.wish').val();
  	Wishes.insert({
  		text:wishValue
  	});
  },
});
