// src/utils/eventBus.js
const eventBus = (() => {
    const events = {};

    return {
        on(event, listener) {
            if (!events[event]) {
                events[event] = [];
            }
            events[event].push(listener);
        },
        emit(event, data) {
            if (events[event]) {
                events[event].forEach(listener => listener(data));
            }
        },
    };
})();

export default eventBus;
