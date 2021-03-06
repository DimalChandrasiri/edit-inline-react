var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
/**
 * A react component which will allow inline edit of a profided text component
 *
 * @version : 1.0.0
 */
var EditInlineReact = /** @class */ (function (_super) {
    __extends(EditInlineReact, _super);
    function EditInlineReact(props) {
        return _super.call(this, props) || this;
    }
    EditInlineReact.prototype.render = function () {
        var _a = this.props, editingDisabled = _a.editingDisabled, initText = _a.initText, customClass = _a.customClass;
        if (editingDisabled) {
            return (React.createElement("span", { className: 'edit-inline' + customClass }, initText));
        }
        else {
            return React.createElement("span", null, initText);
        }
    };
    return EditInlineReact;
}(React.Component));
export default EditInlineReact;
//# sourceMappingURL=index.js.map