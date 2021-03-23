import React, { useState, useEffect, useCallback } from 'react';
import StickerHeader from './components/StickerHeader';
import StickersList from './components/StickersList';
import api from './services/api';

const EMPTY_STICKER = {
    description: ''
};

function App() {
    const [stickers, setStickers] = useState([]);

    useEffect(() => {
        api.get().then(({ data }) => setStickers(data));
    }, []);

    const addNewSticker = useCallback(
        () => {
            api.post('', EMPTY_STICKER).then(({ data }) =>
            setStickers([...stickers, data])
        );
        },
        [stickers],
    )

    function deleteSticker(sticker) {
        api.delete(sticker.id).then(() => {
            setStickers(stickers.filter((el) => el !== sticker));
        });
    }

    function changeSticker(id, updatedData) {
        let sticker = stickers.find((el) => el.id === id);

        sticker = {
            ...sticker,
            ...updatedData,
        };

        const newStickers = stickers.map((el) =>
            el.id === sticker.id ? sticker : el
        );
        setStickers(newStickers);
    }

    function saveSticker(id) {
        const sticker = stickers.find((el) => el.id === id);
        api.put(id, sticker);
    }

    return (
        <>
            <StickerHeader onAddClick={addNewSticker} />
            <StickersList
                stickers={stickers}
                onDelete={deleteSticker}
                onChange={changeSticker}
                onSave={saveSticker}
            />
        </>
    );
}

export default App;
