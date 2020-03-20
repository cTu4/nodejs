import Vue from 'vue'
import App from './App.vue'
import main from './components/test.vue'

Ext.onReady(function () {
  Ext.create({
    xtype: 'panel',
    title: 'APP VUE',
    width: '100%',
    height: window.innerHeight-100,
    layout: 'border',
    renderTo: Ext.getElementById('app'),
    defaults: {
      collapsible: true,
      split: true,
      bodyPadding: 15
    },
    items: [
      {
        title: 'Left',
        region: 'west',
        minWidth: 250


      },
      {
        xtype: 'panel',
        title: "Center",
        region: 'center',
        collapsible: false,
        html: '<div id="vue"></div>',
      }
    ],
    listeners: {
      afterRender(){
        new Vue({
          el: '#vue',
          render: h => h(main)
        });
      }
    }

  });
});

