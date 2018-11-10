import * as React from 'react';

export interface InvitationProps {
    readonly compiler: string;
    readonly framework: string;
}

export const Invitation: React.SFC<InvitationProps> = (props: InvitationProps) => (
    <ul>
        <li>Compiler: {props.framework}</li>
        <li>Framework: {props.framework}</li>
    </ul>
);

/**
 * @NOTE
 * React.memo is imcompatible for typedefs.
 * @see https://github.com/facebook/react/issues/14059
 * for future 👇
 */
// export defautl React.memo(Invitation);