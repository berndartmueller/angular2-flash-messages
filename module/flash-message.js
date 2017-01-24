"use strict";
var FlashMessage = (function () {
    function FlashMessage(text, cssClass) {
        this.id = (FlashMessage.nextId++);
        this.text = 'default text';
        this.cssClass = '';
        this.text = text;
        this.cssClass = cssClass;
    }
    FlashMessage.nextId = 0;
    return FlashMessage;
}());
exports.FlashMessage = FlashMessage;
//# sourceMappingURL=flash-message.js.map