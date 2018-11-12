import * as React from 'react';
export interface EditInlineReactProps {
    initText: string;
    onTextChange: Function;
    activeEditingClass?: string;
    minLength?: number;
    maxLength?: number;
    editingDisabled?: boolean;
    customClass: string;
}
export interface EditInlineReactState {
}
/**
 * A react component which will allow inline edit of a profided text component
 *
 * @version : 1.0.0
 */
declare class EditInlineReact extends React.Component<EditInlineReactProps, EditInlineReactState> {
    constructor(props: EditInlineReactProps);
    render(): JSX.Element;
}
export default EditInlineReact;
