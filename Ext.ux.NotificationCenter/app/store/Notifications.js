Ext.define('NotificationCenter.store.Notifications', {
  extend: 'Ext.data.Store',

  config: {
    model: 'NotificationCenter.model.Notification',
    grouper: {
      groupFn: function(record) {
        return '<div class="'+record.get('type')+'"><div class="icon"></div>'+record.get('type')+'</div><div class="cross"></div>';
      }
    },
    data: [
    /*
      { title: 'Phone', icon: 'phone' },
      { title: 'Messages', icon: 'sms' },
      { title: 'Facebook', icon: 'facebook' }
    */
    ]
    
  }
});
