import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import usePlayer from "../Player/usePlayer";

const useDirectory = () => {
    const { showPlayer } = usePlayer();

    const [dir, setDir] = useState({
        children: []
    });

    const callListDir = useCallback((id = '') => {
        axios.get(`/api/list/${id}`).then(response => {
            setDir(response.data);
        });
    }, [setDir]);

    const callPlay = useCallback((id) => {
        axios.get(`/api/play/${id}`).then(() => {});
    }, []);

    useEffect(() => {
        callListDir();
    }, [callListDir]);

    const onOpenClick = useCallback((item) => (/* event */) => {
        callListDir(item.id)
    }, [callListDir]);

    const onBackClick = useCallback((/*event*/) => {
        callListDir(dir.parentId);
    }, [callListDir, dir]);

    const onPlayClick = useCallback((item) => (/*event*/) => {
        callPlay(item.id);
        showPlayer();
    }, [callPlay, showPlayer]);

    return {dir, onBackClick, onOpenClick, onPlayClick};
};

export default useDirectory;


