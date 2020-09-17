import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

function SongList() {
    const [songs, setSongs] = useState([
        { title: 'happy birth day', id: 1 },
        { title: 'eslamy ya misr', id: 2 },
        { title: 'mawlay eny bebabek', id: 3 }
    ]);
    const [title, setTitle] = useState("");
    useEffect(() => {
        console.log('use effect', songs);
    }, [songs]);
    function addSong() {
        setSongs([...songs, { title: title, id: uuidv4() }])
    }
    function handleSubmit(e) {
        e.preventDefault();
        addSong();
        setTitle('');
    }
    return (
        <div>
            {songs.map(song => <li key={song.id}>{song.title}</li>)}
            <br />
            <form onSubmit={handleSubmit}>
                <label>song name: </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="submit" value="add song" />
            </form>
        </div>
    )
}

export default SongList
