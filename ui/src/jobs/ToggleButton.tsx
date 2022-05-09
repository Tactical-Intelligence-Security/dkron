import * as React from 'react';
import { useState } from 'react';
import { useNotify, useRefresh, Button } from 'react-admin';
import { apiUrl } from '../dataProvider';
import ToggleIcon from '@mui/icons-material/Pause';

const ToggleButton = ({record}: any) => {
    const refresh = useRefresh();
    const notify = useNotify();
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
        setLoading(true);
        notify('Start fetching'); // start the global loading indicator 
        fetch(`${apiUrl}/jobs/${record.id}/toggle`, { method: 'POST' })
            .then(() => {
                notify('Job toggled');
                refresh();
            })
            .catch((e) => {
                notify('Error on toggle job', { type: 'warning' })
            })
            .finally(() => {
                setLoading(false);
                notify('End fetching'); // stop the global loading indicator
            });
    };
    return (
        <Button 
            label="Toggle"
            onClick={handleClick}
            disabled={loading}
        >
            <ToggleIcon/>
        </Button>
    );
};

export default ToggleButton;
