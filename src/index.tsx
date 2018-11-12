import * as React from 'react';

export interface EditInlineReactProps {
    initText: string
    onTextChange: Function
    activeEditingClass?: string
    minLength?: number
    maxLength?: number
    editingDisabled?: boolean
}

export interface EditInlineReactState {

}

/**
 * A react component which will allow inline edit of a profided text component
 * 
 * @version : 1.0.0
 */
class EditInlineReact extends React.Component<EditInlineReactProps, EditInlineReactState> {
    constructor(props: EditInlineReactProps) {
        super(props);
    }
    render() {
        return (
            <div className='react-inline-editor'></div>
        )
    }
}

export default EditInlineReact;