Ext.define('WebSocketDemo.view.StockGrid', {
    extend: 'Ext.grid.Panel',
    store: 'StockStore',
    alias: 'widget.stockgrid',
    cls: 'my-grid-panel',
    viewConfig: {
        markDirty: false
    },
    columns: [
        {
            header: 'symbol',
            dataIndex: 'symbol',
            flex: 2 /*editor: {xtype: 'textfield'}*/
        },
        {
            header: 'Open Price',
            dataIndex: 'price',
            flex: 1
            /*editor: {xtype: 'textfield'}*/
        },
        {
            header: 'Last Price',
            dataIndex: 'change',
            flex: 1,
            renderer: function change(val) {
                if (val > 0) {
                    return '<span style="color:green; background-color:#FCEBAD">' + val + '</span>';
                } else if (val < 0) {
                    return '<span style="color:red; background-color:#FCEBAD">' + val + '</span>';
                }
                return val;
            }
            /*editor: {xtype: 'textfield'}*/
        }
    ]
});