import React from 'react';
import { Delete } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

interface DeleteProps {
    onClick : () => void;
}

const DeleteButton = ({ onClick } : DeleteProps) => {
    return (
        <IconButton aria-label='delete' edge='end' onClick={ onClick }>
            <Delete />
        </IconButton>
    );
};

export default React.memo(DeleteButton);