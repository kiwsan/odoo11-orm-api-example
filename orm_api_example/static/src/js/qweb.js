odoo.define('extend_addons.button_export_extend', function (require) {
    "use strict";

    var Model = require("web.rpc");
    var ListController = require('web.ListController');

    ListController.include({

        renderButtons: function () {
            this._super.apply(this, arguments);
            if (this.$buttons) {
                let importButton = this.$buttons.find(".o_button_export");
                importButton && importButton.click(this.proxy("exportOnClickHandler"));
            }
        },

        exportOnClickHandler: function () {
            //implement your click logic here
            Model.query({
                model: "orm_api_example.note",
                method: "my_custom_function",
                args: [{}]
            }).then(function (data) {
                console.log(data);
            });
        }

    });
});

// https://www.odoo.com/fr_FR/forum/aide-1/question/create-button-before-create-and-import-in-odoo-v11-130563
// https://www.odoo.com/fr_FR/forum/aide-1/question/add-a-button-after-import-button-144486