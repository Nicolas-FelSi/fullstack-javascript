import { randomUUID } from 'node:crypto'

class DataBaseMemory {
    #videos = new Map();

    list() {
        const videoId = randomUUID();

        return this.#videos.values();
    }

    create(video) {
        const videoId = randomUUID();

        this.#videos.set(videoId, video);
    }

    update(videoId, video) {
        this.#videos.set(videoId, video);
    }

    delete(videoId) {
        this.#videos.delete(videoId);
    }
}

export default DataBaseMemory;