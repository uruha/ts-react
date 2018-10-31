import * as React from 'react';

export interface InvitationProps {
    compiler: string;
    framework: string;
}

export const Invitation: React.SFC<InvitationProps> = (props: InvitationProps) => (
    <ul>
        <li>Compiler: {props.framework}</li>
        <li>Framework: {props.framework}</li>
    </ul>
);